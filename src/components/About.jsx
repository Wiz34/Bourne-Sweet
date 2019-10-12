import React from 'react';
import './About.css'
import chef from '../assets /chef-photo.jpg'




const About = () => {
  return (
    <div className="About_Pg">
      <h2 className="title">OUR STORY</h2>
      {/* <div className="sub">
        When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
      </div> */}
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