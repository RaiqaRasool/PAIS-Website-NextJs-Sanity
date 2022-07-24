import { Html, Head, Main, NextScript } from 'next/document';
import { useState } from 'react';    

export default function Document({children}) {
    const [lightTheme,setLightTheme]=useState(true);
  return (
    <Html>
      <Head/>
      <body className="light-theme">
        <Main/> 
        <NextScript/>
      </body>
    </Html>
  )
}