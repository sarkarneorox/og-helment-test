// AboutPage.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import aboutImg from "../assets/images/about-us-concept.webp"
const AboutPage = () => {
  return (
    <div>
    <Helmet>
      <title>About Page</title>
      <meta name="description" content="This is the about page description." />
      <meta property="og:title" content="About Page" />
      <meta property="og:description" content="This is the about page description." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="ho3fh" />
      <meta property="og:image" content={aboutImg} />
    </Helmet>
    <h1>About Page</h1>
    <p>Learn more about us on this page.</p>
    </div>
  );
}


export default AboutPage;
