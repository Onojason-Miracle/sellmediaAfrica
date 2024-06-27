import React from 'react';
import Navbar from "./navbar";
import About from './about';
import Team from './team';
import Metrics from './metrics';
import Contact from './contact';
import Footer from './footer';

function Home(){
    return(
<div>

      <Navbar />

      <div className='wrapper'>
      <h1 className='wrapper-header'>Let’s create something great together.</h1>

      <img src="assets/Hero Image (1).png" alt='hero-image'/>
      </div>

      <About/>
      <Team/>
      <Metrics/>
      <Contact/>
      <Footer/>
</div>
    )
}

export default Home