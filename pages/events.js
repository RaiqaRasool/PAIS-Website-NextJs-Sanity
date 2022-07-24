import React from 'react'
import { client,urlFor } from '../lib/client'

const   Events = ({events}) => {
  return (
    <main class="event-page">

    {/* <!-- hero section starts --> */}
    <section class="hero-section">
        <h1>Events</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, neque?</p>
    </section>

    {/* gallery section starts here */}
    <section class="gallery-section">
    {
        events.map(({title,gallery,desc})=>(
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

export default  Events

export const getStaticProps=async()=>{
    const query_events=`*[_type=='event']{
        gallery,
        title,
        desc
    }`;
    const events=await client.fetch(query_events);
    return {
        props:{
            events
        }
    }
}