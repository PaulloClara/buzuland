import React from "react"
import PropTypes from "prop-types"

import Head from "next/head"
import "../assets/css/main.css"

function App({ Component, pageProps }) {
  return (
    <div id="__layout">
      <Head>
        <title>BuzuLand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps}></Component>
    </div>
  )
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.any
}

export default App
