import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from 'next/dist/shared/lib/head';



const Layout = ({children}) => {
  return (
    <>
    <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>PAIS | Home</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>

        <link  rel="stylesheet"  href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
      </Head>
    <Navbar/>
    {children}
    <Footer/>

    </>

  )
}

export default Layout