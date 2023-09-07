import React from 'react'
import "../CSS/hero.css"
const Hero =()=>{
    return(
      <>
    <div className="hero_section">
  <div className="hero_section_opacity"> </div>
  <div className="hero_content">
    <div className="hero_section_left">
      <p className="hero_section_small_text">Your Oral Health Matters to Us</p>
      <hr />
      <p className="hero_section_large_text">
        Get Brighter Smile from London's Best Dentists
      </p>
    </div>
    <div className="hero_section_right">
      <div className="form">
        <p className="form_heading">Book a Free Consultation</p>
        <hr />
        <div className="name">
          <input type="text" placeholder="First Name" className="first_name" />
          <input type="text" placeholder="Last Name" className="last_name" />
        </div>
        <input type="tel" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <textarea
          name="message"
          id="message"
          cols={10}
          rows={3}
          className="message"
          placeholder="Message"
          defaultValue={""}
        />
        <button className="btn form_button">Book Now</button>
      </div>
    </div>
  </div>
</div>

    </>
    )
    
  }

export default Hero;
