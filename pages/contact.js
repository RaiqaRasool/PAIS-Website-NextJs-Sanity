import React from 'react'

const Contact = () => {
  return (
    // <!-- contact section form starts -->
<section className="contact-form-section">
<form className="contact-form">
    <h1 className="heading-contact"><span>Let's Get  in Touch</span></h1>
    <label for="name">Name<span> *</span></label>
   <div className="name"> 
       <div>
        <input type="text" name="first_name" required/>
        <small>First</small>
        </div>
        <div>
        <input type="text" name="last_name" required/>
        <small>Last</small>
        </div>
    </div>
    <div><label for="contact-number">Contact Number<span> *</span></label>
    <input type="tel" name="contac_number" id="contact-number" required/>
    </div>
    <div>
        <label for="email">Email<span> *</span></label>
        <input type="email" name="email" id="email" required/>
    </div>

    <div>
        <label for="message">Message<span> *</span></label>
    <textarea name="message" id="message" cols="30" rows="5"></textarea>
</div>
<div className="btn">
<input type="submit" value="Submit"/>
</div>
</form>
</section>


  )
}

export default Contact