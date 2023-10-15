import React from 'react'
import Navbar from "../navbar/Navbar"
import "./hero.css"

const Hero = () => {
  return <>
    <div className='container-fluid  mx-0 py-5 hero_container' >
      <div className='row'>
        <div className='col-12'>
          <Navbar />
        </div>
      </div>
      <div className='row'>

        <div className='col-lg-12 col-md-12 col-sm-12 text-uppercase'>
          <p className='hero_welcome'>welcome to codeshaper</p> <br />
          <p className='hero_detail'>consulting <br /> for every <br /> buiseness</p>
          <button className='btn hero_btn' >
            Discover more
          </button>
        </div>

      </div>
    </div>
  </>
}

export default Hero