// ContactPage.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import img from "../assets/images/contact-us-image.webp"
const ContactPage = () => (
  <div>
    <Helmet>
      <title>Contact Page</title>
      <meta name="description" content="This is the contact page description." />
      <meta property="og:title" content="Contact Page" />
      <meta property="og:description" content="This is the contact page description." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content={img}/>
    </Helmet>
    <h1>Contact Page</h1>
    <p>Get in touch with us!</p>
  </div>
);

export default ContactPage;
