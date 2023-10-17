import React from 'react'
import { FaPlay, FaPhoneAlt, FaCarAlt } from "react-icons/fa";
import "./about.css"

const About = () => {
    return <>
        <div className='container-fluid mx-0 about_container' id='about'>
            <div className='row p-5' style={{ position: "relative", minHeight: "100vh" }}>
                <img src="/Path 8.png" alt="No network" className='about_side_img' />
                <img src="/Path 8.png" alt="No network" className='about_side_img2' />
                <div className='col-6 mt-3 px-5 about_btn'>
                    <button className=''>
                        <FaPlay />
                    </button>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 mb-3 px-0' >
                    <p className='about_heading'>We're leading in <br /> the market </p>
                    <p className='mt-4 about_detail1'>
                        Lorem ipsum is simply free text dolor sit amet,
                        consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et doloremagna aliqua lonm andhn.
                    </p>
                    <p className='about_detail2'>
                        We have 35+ years of experience. We offer marketing and consulting services.
                    </p>
                    <div style={{ position: "relative" }}>
                        <div className='progress_bar_main'>
                            <div className='progress_content'>
                                <p>Consulting</p>
                                <p className='text-muted'>88%</p>
                            </div>
                        </div>
                        <div className='progress_bar_main2'>
                            <div className='progress_content2'>
                                <p>Advices</p>
                                <p className='text-muted'>88%</p>
                            </div>
                        </div>
                    </div>

                    <div className='about_contact d-flex flex-wrap gap-4'>
                        <div>
                            <button><FaPhoneAlt /></button>
                        </div>
                        <div>
                            <p className='text-muted my-0'>Have any question? Give us a call</p>
                            <p className='my-0'>+92 666 888 0000</p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-2 col-md-2 about_btn'>
                    <div>
                        <p className='about_brand'>AIVONS</p>
                    </div>
                </div>
            </div>

            <div className='row p-0 m-0' style={{ position: "relative" }} >
                <div className='col-12 about_box_main'>
                    <div className='about_box'>
                        <button className='about_box_btn'>
                            01
                        </button>
                        <div>
                            <p className='fw-bolder'>GET PROFESSIONAL ADVICE</p>
                            <p className='text-muted'>There are many variations of available but the <br />
                                majority have suffered alteration.</p>
                        </div>
                    </div>
                    <div className='about_box'>
                        <button className='about_box_btn'>
                            02
                        </button>
                        <div>
                            <p className='fw-bolder'>GET PROFESSIONAL ADVICE</p>
                            <p className='text-muted'>There are many variations of available but the <br />
                                majority have suffered alteration.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row py-5 mt-5' style={{ backgroundColor: "rgb(242, 244, 248)" }} id='case'>
                <div className='col-12 p-0 m-0'>
                    <center>
                        <p className='about_heading case_study_heading'>New Case Studies</p>
                        <p className='about_detail1 case_study_detail'>We help our clients renew their business </p>
                    </center>
                    <div className='d-flex flex-wrap justify-content-center gap-4 mt-5'>
                        <div className='case_study_box'>
                            <div className='c_inner'>
                                <div className='case_box_icon'>
                                    <FaCarAlt />
                                </div>
                                <div>
                                    <p className='case_head'>Thought leadership</p>
                                    <p className='case_detail'>businesses <br />growth</p>
                                </div>
                            </div>
                        </div>
                        <div className='case_study_box'>
                            <div className='c_inner'>
                                <div className='case_box_icon'>
                                    <FaCarAlt />
                                </div>
                                <div>
                                    <p className='case_head'>Thought leadership</p>
                                    <p className='case_detail'>businesses <br />growth</p>
                                </div>
                            </div>
                        </div>
                        <div className='case_study_box'>
                            <div className='c_inner'>
                                <div className='case_box_icon'>
                                    <FaCarAlt />
                                </div>
                                <div>
                                    <p className='case_head'>Thought leadership</p>
                                    <p className='case_detail'>businesses <br />growth</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>

    </>
}

export default About