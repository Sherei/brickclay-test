import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import "./test.css"
const Testimonial = () => {
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
                    <div className='test-box'>
                        <p className='test-box-detail'>
                            Lorem ipsum is simply free text dolor sit amet,
                            consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.Lorem ipsum is simply free text dolor sit amet,
                            consectetur notted adipisicing elit sed do eiusmod tempor
                        </p>
                        <p className='m-0 test-box-title'>Todd Higgins</p>
                        <p className='text-muted'>Customer</p>
                    </div>
                    <div className='test-box'>
                        <p className='test-box-detail'>
                            Lorem ipsum is simply free text dolor sit amet,
                            consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.Lorem ipsum is simply free text dolor sit amet,
                            consectetur notted adipisicing elit sed do eiusmod tempor
                        </p>
                        <p className='m-0 test-box-title'>Todd Higgins</p>
                        <p className='text-muted'>Customer</p>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Testimonial