import React,{useState} from 'react';
import Spacer from '../components/Spacer';
import Link from 'next/link';
import { urlFor,client } from '../lib/client';


const Blogs = ({blogs,categories}) => {
    const [blogSearch,setBlogSearch]=useState(blogs);
    const handleSearch=(e)=>{
        const input=e.target.value.toLowerCase()
        const newBlogs=blogs.filter(blog=>{
            return (
            blog.body[0].children[0].text.toLowerCase().includes(input)||
            blog.title.toLowerCase().includes(input)||
            blog.excerpt?.toLowerCase().includes(input)
        )
        })
       setBlogSearch(newBlogs)

    }
  return (
    <>
        {/* <!-- blog section starts---- --> */}
<section className="blogs-top-slider-section">
    <div className="swiper swiper-blog-page">
        {/* <!-- Additional required wrapper --> */}
        <div className="swiper-wrapper">
          {/* <!-- Slides --> */}
          { 
            blogs?.slice(0,3).map((blog)=>(
                <Link href={`/blogs/${blog.slug.current}`}>
                <div className="swiper-slide">
              <div className="slider-content">
                <h1 className="blog-title">{blog.title}</h1>
                <span className="blog-author-date"><span className="author">{blog.name}</span> | <span className="date">{blog.publishedAt}</span></span>
                <p className="blog-excerpt">{blog.excerpt}</p>
              </div>
            <img src={urlFor(blog.mainImage)} alt={blog.title} className="blog-thumbnail"/>
            </div>
            </Link>

            ))
          }
        </div>     
        {/* <!-- If we need scrollbar --> */}
        <div className="swiper-scrollbar"></div>
      </div>
    {/* <!-- blog top trending posts section ends --> */}
    
       
</section>
{/* <!-- blog slider section ends---- --> */}
<section className="recent-posts-section">
    <div className="main-part">
        <div className="blogs-list">
            <h1 className="title">Recent Posts</h1>
            {
                blogSearch?.map(blog=>(
                    <div className="list-item">
                <div className="item-image">
                    <img src={urlFor(blog.mainImage)} alt={blog.title}/>
                </div>
                <div className="item-content">
                    <h1 className="post-title">{blog.title}</h1>
                    <h2 className="author-and-date">
                        <i className="fa-solid fa-user"></i>  &nbsp;
                        <span className="author">{blog.name}</span> &nbsp;&nbsp;
                        <i className="fa-solid fa-calendar-days"></i>
                        &nbsp;<span className="date">{blog.publishedAt}</span>
                    </h2>
                    {/* <!-- Excerpt should not be more  than 13 words --> */}
                    <p className="excerpt">  
                        {blog.excerpt}</p>
                    <div className="bottom-button">
                    <div className="read-more-button">
                        <Link href={`/blogs/${blog.slug.current}`} className="read-more-button">Read More</Link>
                    </div>
                    </div>
                </div>
            </div>
                ))
            }
        </div>
        {/* <!-- sidebar  starts--> */}
        <div className="sidebar">
            <div className="section search">
                <h2 className="title">Search</h2>
                <form>
                    <input type="text" name="search" id="search-box" placeholder="Search" onChange={handleSearch}/>
                </form>
            </div>
            <div className="section categories">
                <h2 className="title">Categories</h2>
                <ul className="categories-list">
                {
                    categories?.map(category=>(
                        <li className="category"><Link href={`/categories/${category.slug.current}`}>{category.title}</Link></li>
                    ))
                }
                </ul>
            </div>
        </div>
    </div>
    {/* <!-- sidebar ends --> */}
</section>

    </>
  )
}

export default Blogs


export const getServerSideProps=async({params})=>{
    const query_cats=`*[_type=='category']`;
    const query_blogs=`*[_type=='post']{
            title,
            body,
            slug,
            excerpt,
            "name":author->name,
            mainImage,
            publishedAt
    }`;
    const categories=await client.fetch(query_cats);
    const blogs=await client.fetch(query_blogs);
    return {
        props:{
            blogs,
            categories      
            
        }
    }
}