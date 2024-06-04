// HomePage.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import homeImg from "../assets/images/logo.webp"
const HomePage = () => {
  return (
    <div>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="This is the home page description." />
      <meta property="og:title" content="Home Page" />
      <meta property="og:description" content="This is the home page description." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content={homeImg} />
    </Helmet>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
  </div>
  );
}

export default HomePage;
