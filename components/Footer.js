import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <section className="footer" id="footer">
    <div className="box-container">
        <div className="box">
            <h3>Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/workshops">Workshops</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <div className="box">
            <h3>Contact Info</h3>
           <p><i className="fas fa-phone"></i>+123-456-7899</p>
           <p><i className="fas fa-envelope"></i>adminpias@pieas.edu.pk</p>
           <div className="share">
               <a href="#" className="fab fa-facebook"></a>
               <a href="#" className="fab fa-twitter"></a>
               <a href="#" className="fab fa-instagram"></a>
               <a href="#" className="fab fa-linkedin"></a>
           </div>
        </div>
        <div className="box">
            <h3>Newsletter</h3>
            <p>Subscribe for latest updates</p>
            <form>
                <input type="email"  name="email" className="email" placeholder="Enter Your Email"/>        
                <input type="submit" value="Subscribe" className="btn"/>        
            </form>
        </div>
    </div>
</section>
    <div className="credit">
        &copy;Copyright |  All Rights Reserved by <span>PAIS</span>.
    </div>
</>
  )
}

export default Footer