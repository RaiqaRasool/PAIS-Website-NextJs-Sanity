import {client,urlFor} from "../lib/client.js";
import Link from "next/link.js";
import HomeHero from "../components/HomeHero.js";
export default function Home({HeroBanners,About,Events,Teams,Blogs}) {
  return (
    <>
     {/* <!-- home section starts --> */}
<section className="home" id="home">
    <div className="swiper home-slider">
        <div className="swiper-wrapper wrapper">
        {
        HeroBanners?.map(({tagline,mainLine,heroImage,btnText,btnLink},index)=><HomeHero key={index} tagline={tagline} mainLine={mainLine} heroImage={heroImage} btnText={btnText} btnLink={btnLink}/>)
        }
        <div className="swiper-pagination"></div>
        </div>
    </div>
</section>
{/* <!-- home section ends --> */}

{/* <!-- about section starts --> */}
<section className="about" id="about">
    <div className="image">
        <img src={urlFor(About.image)} alt="About"/>
    </div>
    <div className="content">
        <span>About Us</span>
        <h3 className="title">{About.title}</h3>
        <p>{About.desc}</p>
        <div className="box-container">
        {
          About.points.map((point,index)=>
            <div className="box" key={index}>
                <h3><i className="fas fa-check"></i>Point {index+1}</h3>
                <p>{point}</p>
            </div>
        )
        }           
        </div>
    </div>
</section>
{/* <!-- about section ends --> */}


{/* <!-- events sections starts --> */}
<section className="events" id="events">
    <h1 className="heading"><span>Events</span></h1>
    <div className="box-container">
    {
      Events?.map((Event,index)=>(
        <div className={index==1?'box':'box second'}>
            <div className="image">
                <img src={urlFor(Event.gallery[0])} alt="Criss Cross Bits"/>
            </div>
            <div className="content">
                <i dangerouslySetInnerHTML={{ __html:Event.svgLogo }}></i>
                <h3>{Event.title}</h3>
                <p>{Event.desc}</p>
                <div className="btn">
                <Link href="/event" target="_blank">Read More</Link>
                </div>
            </div>
            </div>
      ))
    }
        </div>
</section>
{/* <!-- events sections ends --> */}

{/* <!-- team section starts--- --> */}
<section className="team" id="team">
    <h1 className="heading"><span> Our Team</span></h1>
    <div className="box-container">
    {
      Teams?.map((team)=>(
        <div className="box">
            <img src={urlFor(team.image)} alt={team.name}/>
            <div className="content">
                <span>{team.des}</span>
                <h3>{team.name}</h3>
                <div className="share">
                    <a target="_blank" href={team.facebook?team.facebook:"#"} className="fab fa-facebook"></a>
                    <a target="_blank" href={team.twitter?team.twitter:"#"} className="fab fa-twitter"></a>
                    <a target="_blank" href={team.insta?team.insta:"#"} className="fab fa-instagram"></a>
                    <a target="_blank" href={team.insta?team.linkedin:"#"} className="fab fa-linkedin"></a>
                </div>
            </div>
        </div>
      ))
    }
    </div>
</section>
{/* <!-- team section ends--- --> */}

{/* <!-- banner section starts--- --> */}
<section className="banner">
    <span>Join Us Now</span>
    <h3>Become a PAISIAN!</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum iusto possimus eveniet laboriosam? Omnis maiores quod sit dolorem in.</p>
    <div className="btn">
    <Link href="/contact">Contact Us</Link>
    </div>
</section>
{/* <!-- banner section ends--- --> */}

{/* <!-- blog section starts---- --> */}
<section className="blogs">
    <h1 className="heading"><span>Our Blogs</span></h1>
    <div className="swiper blogs-slider ">
        <div className="swiper-wrapper">
        {
          Blogs?.map((blog,index)=>(
            <div className="swiper-slide slide" key={index}>
                <div className="image">
                    <img src={urlFor(blog.mainImage)} alt={blog.title}/>
                </div>
                <div className="content">
                    <div className="link">By {blog.name}<span>|</span>{blog.publishedAt}</div>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <div className="btn">
                    <Link href={`/blogs/${blog.slug.current}`}>Read More</Link>
                    </div>
                </div>
            </div>
          ))
        }
        </div>
        <div className="swiper-pagination"></div>
    </div>
</section>
{/* <!-- blog section ends---- --> */}

</>
  )
}


export const getServerSideProps=async (context)=>{
  const query_hero="*[_type=='heroBanner']";
  const query_about="*[_type=='about'][0]";
  const query_event=`*[_type=='event'][0...3]`;
  const query_team="*[_type=='team']";
  const query_blogs=`*[_type=='post']
  {
    title,
    excerpt,
    slug,
    "name":author->name,
    mainImage,
    publishedAt
  }
  [0...9]`;


  const HeroBanners=await client.fetch(query_hero);
  const About=await client.fetch(query_about);
  const Events=await client.fetch(query_event);
  const Teams=await client.fetch(query_team);
  const Blogs=await client.fetch(query_blogs);

  return {
    props:{
      HeroBanners,
      About,
      Events,
      Teams,
      Blogs
    }
  }

}
