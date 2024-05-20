import React from "react";
import HomePage from "./posts/HomePage";
import Head from "next/head";

function App() {
  return (
    <div className="App">
      <Head>
        <link rel="icon" href="/favicon-ds.png" />
      </Head>
      <HomePage />
    </div>
  );
}

export default App;