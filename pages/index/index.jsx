import React from "react"
import Head from "next/head"

import styles from "./styles.module.css"

function Home() {
  return (
    <main id="home">
      <Head>
        <title>Home - BuzuLand</title>
      </Head>

      <h1 className={styles.title}>Home</h1>
    </main>
  )
}

export default Home
