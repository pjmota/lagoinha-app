import React from "react";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return(<Component {...pageProps} />);
}

export default MyApp;