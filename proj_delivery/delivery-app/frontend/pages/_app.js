/* _app.js */
import React from "react";
import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";


class MeuApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </>
    );
  }
}

export default MeuApp;