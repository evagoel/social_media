import React,{useEffect} from "react";
import Page from "./Page"

function About(){

  return(
    <Page title="About Us">
      <h2>About Us</h2>
      <p className="lead text-muted">Welcome to complex app, where connections come alive!</p>
      <p>At this platform, we believe in the power of social interactions and the importance of staying connected with friends, family, and the world around you. Our platform is designed to bring people closer, foster meaningful conversations, and create a space where everyone can share their stories.</p>
      <h4>Our Mission</h4>
     <p>Our mission is to empower individuals to connect, share, and inspire. We strive to create a safe, engaging, and user-friendly environment where everyone’s voice can be heard and valued.</p>
     <h4> What We Offer</h4>  <ol>
<li>User-Friendly Interface: Navigate through a seamless and intuitive design.</li>
<li>Secure Connections: Your privacy and security are our top priorities.</li>
<li>Engaging Features: Share updates and more with just a few clicks.</li>
<li>Community Building: Join groups, follow interests, and build communities that matter to you.</li>
</ol></Page>
  )
}

export default About;