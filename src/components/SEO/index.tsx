import Head from "next/head";
import React from 'react'

const SEO = ({title = "", description = ""}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="logo-invert.png" />
    </Head>
  )
}

export default SEO;