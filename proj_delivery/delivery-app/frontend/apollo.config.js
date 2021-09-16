/* /lib/apollo.js */
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

const client = new ApolloClient({
  link: new HttpLink({ uri: `${API_URL}/graphql`}),
  cache: new InMemoryCache()
});

module.exports = {
  client: {
    service: {
      name: 'minha api',
      url: `${API_URL}/graphql`,
    }
  }
};