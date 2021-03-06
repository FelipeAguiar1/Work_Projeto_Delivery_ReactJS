/* /pages/restaurants/[id].js */
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const GET_RESTAURANTS_DISHS = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

function Restaurants(props) {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_RESTAURANTS_DISHS, {
    variables: { id: router.query.id },
  });
  if (error) return JSON.stringify(error, null, 2);
  if (loading) return <h1>Carregando...</h1>;
  if (data.restaurant) {
    const { restaurant } = data;
    return (
      <>
        <h1>{ restaurant.name }</h1>
        <Row>
          { restaurant.dishes.map((res) => (
            <Col xs="6" sm="4" styl={{ padding: 0 }} key={ res.id }>
              <Card style={{ margin: "0 10px" }}>
                <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={`${ process.env.NEXT_PUBLIC_API_URL }${ res.image[0].url }`}  
                />
                <CardBody>
                  <CardTitle>{ res.name }</CardTitle>
                  <CardText>{ res.description }</CardText>
                </CardBody>
                <div className="card-footer">
                  <Button outline color="primary">
                    + Adicionar ao Carrinho
                  </Button>
                  <style jsx>
                    {`
                      a {
                        color: white;
                      }
                      a:link {
                        text-decoration: none;
                        color: white;
                      }
                      .container-fluid {
                        margin-bottom: 30px;
                      }
                      .btn-outline-primary {
                        color: #007bff !important;
                      }
                      a:hover {
                        color: white !important;
                      }
                    `}
                  </style>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
  return <h1>Adicione pratos.</h1>
}

export default Restaurants;