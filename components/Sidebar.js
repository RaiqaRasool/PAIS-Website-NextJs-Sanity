import Link from 'next/link';
import { client } from '../lib/client';


const Sidebar = ({categories}) => {
  return (
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
  )
}

export default Sidebar

export const getServerSideProps=async({params})=>{
    const query_cats=`*[_type=='category']`;
      const categories=await client.fetch(query_cats);
   
    return {
        props:{
           
            categories      
            
        }
    }
}