import React from 'react';
import { client } from '../../lib/client';
import Link from 'next/link';

const Blog = ({blog,categories}) => {
  return (
    <>
    <section className="single-blog-page">
        {blog && (
          <div className="blog">
            <h1 className="title">{blog.title}</h1>
            <div className="blog-content">
                     {blog.body[0].children[0].text}
            </div>           
        </div>
        )
        }
        {/* <!-- sidebar  starts--> */}
        <div className="sidebar single-blog-sidebar">
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
    {/* <!-- sidebar ends --> */}
</section>
</>

  )
}

export default Blog;

export const getStaticPaths=async()=>{
  const query_blogs=`*[_type=='post']{
    slug{
      current
    }
  }`;
  const blogs=await client.fetch(query_blogs);
  const paths=blogs.map(blog=>({
    params:{
      slug:blog.slug.current
    }
  }))
  return {
    paths,
    fallback:"blocking"
  }
}

export const getStaticProps=async({params:{slug}})=>{
  const query_cats=`*[_type=='category']`;
  const query_blog=`*[_type=='post' && slug.current=='${slug}']{
          title,
          body,
  }[0]`;
  const categories=await client.fetch(query_cats);
  const blog=await client.fetch(query_blog);
  return {
      props:{
          blog,
          categories      
          
      }
  }
}