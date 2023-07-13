import React from 'react';
// images
import Image from '../assets/my-img-v1.svg'
// icons
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa';
// type animation
import {TypeAnimation} from 'react-type-animation'
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'

const Banner = () => {
  return (
  <section className='section' id='home'>
    <div className="container mx-auto">
      <div>
        {/* text */}
        <div className='mb-0'>
          <h1>Lishia <span>ELLIS</span>
          </h1>
          <div>
            <span className='mr-4'>I am a</span>
            <TypeAnimation sequence ={[
              'Developer',
              2000,
              'Podcaster',
              2000,
              'Entrepreneur',
              2000,
            ]}
            speed ={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
             />
          </div>
        </div>
        {/* image */}
        <div>
          <img  src={Image} alt="" />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
