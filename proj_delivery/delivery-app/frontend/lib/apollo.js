/* /lib/apollo.js */
import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

const client = new ApolloClient({
  link: new HttpLink({ uri: `${API_URL}/graphql`}),
  cache: new InMemoryCache()
});

export default client;