import React from 'react'
import TopNavbar from "../navbar/Navbar"
import "./hero.css"

const Hero = () => {
  return <>
    <div className='container-fluid mx-0 hero_container' >
      <div className='row'>
        <div className='col-12'>
          <TopNavbar />
        </div>
      </div>
      <div className='row pb-5'>
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