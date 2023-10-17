import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import TopNavbar from "../navbar/Navbar"
import "./hero.css"

const Hero = () => {

  const data = [
    { title: "welcome to codeshaper", detail: "consulting for every buiseness growth" },
    { title: "welcome to codeshaper", detail: "consulting for every buiseness developement" },
    { title: "welcome to codeshaper", detail: "consulting for every software development" },
    { title: "welcome to codeshaper", detail: "consulting for every marketing" },
  ]

  return <>
    <div className='container-fluid mx-0 hero_container' id='/'>
      <div className='row'>
        <div className='col-12'>
          <TopNavbar />
        </div>
      </div>
      <div className='row pb-5'>
        <div className='col-lg-12 col-md-12 col-sm-12 text-uppercase'>
          <Swiper
            autoplay={{ delay: 3000 }}
            pagination={false}
            modules={[Pagination, Autoplay]}
            className="mySwiper">
            {data.map((data, index) => {
              return <SwiperSlide>
                <p className='hero_welcome'>{data.title}</p> <br />
                <p className='hero_detail'>{data.detail}</p>
                <button className='btn hero_btn' >
                  Discover more
                </button>
              </SwiperSlide>
            })

            }

          </Swiper>
        </div>

      </div>
    </div>
  </>
}

export default Hero