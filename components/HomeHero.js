import React from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link';

const HomeHero = ({tagline,mainLine,heroImage,btnText,btnLink}) => {
  return (
    <div className="swiper-slide slide" style={{ backgroundImage: `url(${urlFor(heroImage)})`}}>
        <div className="content">
            <span>{tagline}</span>
            <h3>{mainLine}</h3>
            <div className="btn">
            <Link href={btnLink}>{btnText}</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeHero