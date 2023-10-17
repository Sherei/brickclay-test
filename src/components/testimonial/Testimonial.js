import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay } from 'swiper/modules';

import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

import "./test.css"
const Testimonial = () => {

    const data = [
        { name: "todd higgins", describe: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor" },
        { name: "sharjeel akhtar", describe: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor" },
        { name: "adeel", describe: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor" },
        { name: "wessie", describe: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor" },
        { name: "marrie johnson", describe: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor" },
        { name: "david weise", describe: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor" },
        { name: "harron ali", describe: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor" },
    ]

    return <>

        <div className='container-fluid mx-0 py-5' style={{ backgroundColor: "rgba(242, 244, 248, 1)" }}>
            <div className='row d-flex justify-content-center align-items-center' style={{ minHeight: "70vh" }}>
                <div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
                    <p className='test_heading'>
                        WHAT THEY <br />
                        ARE TALKING <br />
                        ABOUT?
                    </p>
                    <p className='test_heading2'>Trusted by more than 4,200 customers</p>
                    <div className='mt-4 test-icons'>
                        <button><FaArrowLeft /></button>
                        <button><FaArrowRight /></button>
                    </div>
                </div>
                <div className='col-lg-8 col-md-6 col-sm-12 test_box_main'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}        
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@1.00': {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            '@1.50': {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        autoplay={{ delay: 5000 }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {data.map((item, index) => {
                            return <>
                                <SwiperSlide>
                                    <div className='test-box' key={index}>
                                        <p className='test-box-detail'>
                                            {item.describe}
                                        </p>
                                        <p className='m-0 test-box-title'>{item.name}</p>
                                        <p className='text-muted'>Customer</p>
                                    </div>
                                </SwiperSlide>

                            </>
                        })

                        }

                    </Swiper>

                </div>
            </div>
        </div>

    </>
}

export default Testimonial