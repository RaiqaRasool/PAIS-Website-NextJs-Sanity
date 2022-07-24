import React from 'react'
import { client,urlFor } from '../lib/client'

const   workshops = ({workshops}) => {
  return (
    <main class="event-page">

    {/* <!-- hero section starts --> */}
    <section class="hero-section">
        <h1>Workshops</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, neque?</p>
    </section>

    {/* gallery section starts here */}
    <section class="gallery-section">
    {
        workshops.map(({title,gallery,desc})=>(
            <div class="gallery-box">
        <h1 class="gallery-heading">{title}</h1>
        <p class="gallery-text">{desc}</p>
        <div class="gallery">
           {
            gallery.map(image=>(
                <div className="image-box">
                <img src={urlFor(image)} alt={title}/>
                </div>
            ))
           }
        </div>
    </div>
        ))
    }
    </section>
    </main>
  )
}

export default  workshops

export const getStaticProps=async()=>{
    const query_workshops=`*[_type=='workshop']{
        gallery,
        title,
        desc
    }`;
    const workshops=await client.fetch(query_workshops);
    return {
        props:{
            workshops
        }
    }
}