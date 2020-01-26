import React from 'react';
import './About.css'
import chef from '../assets /chef-photo.jpg'

const About = () => {
  return (
    <div className="page_About_Pg">
      <div className="about_me_pic">
        <img src={chef} alt="Chef_Bourne" />
      </div>
      <div className="text-block">
        <h3>In Bourne's Word</h3>
        <div className="sub">
          <p> Bourne was established in Brooklyn, NY on November 23rd, 2019. We specialize in baking wholesome traditional American desserts, using only the freshest, sustainable ingredients, predominantly sourcing locally, from farms in the Hudson Valley, Catskills, Vermont, New Jersey, and in strides, seasonally, with all baking done in small batches on-site, everyday. No shortening. No preservatives. Our milk is from grass fed cows.
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;