import React from 'react'
import { FaPhoneSquareAlt, FaEnvelope, FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"
import { ImLocation2 } from "react-icons/im"
import { Link } from 'react-scroll'
import "./footer.css"

const Footer = () => {

    return <>
        <div className='container-fluid mx-0 px-0 py-5' style={{ backgroundColor: "rgb(15, 15,29)" }} >
            <div className='row footer_row ' style={{ minHeight: "60vh" }}>
                <div className='col-lg-4 col-md-12 col-sm-12 mb-3'>
                    <p className='footer_heading fw-bolder fs-5'>CreativeLogo</p>
                    <p className='footer_head_detail'>Welcome to our consultancy agency. Lore ipsum simply <br />
                        text amet cing elit simply text amet cing elit.</p>
                    <div className='footer_address'>
                        <div className='mb-2'>
                            <span className='footer_addres_icon'><FaPhoneSquareAlt /> <span className='text-muted px-2'>+92 666 888 0000 </span> </span>
                        </div>
                        <div className='mb-2'>
                            <span className='footer_addres_icon'><FaEnvelope /> <span className='text-muted px-2'>needhelp@company.com</span></span>

                        </div>
                        <div className='mb-2'>
                            <span className='footer_addres_icon'><ImLocation2 /> <span className='text-muted px-2'>66 Broklyn Street New York, USA</span></span>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-12 col-sm-12'>
                    <p className='footer_heading fw-bolder fs-5'>EXPLORE</p>
                    <div className='footer_explore_detail'>
                        <div>
                            <Link to='about'>
                                <p>About</p>
                            </Link>
                            <Link to="/">
                                <p>Meet our Team</p>
                            </Link>
                            <Link to='case'>
                                <p>Case studies</p>
                            </Link>
                            <Link to='/'>
                                <p>Latest News</p>
                            </Link>
                            <Link to='about'>
                                <p>Contact</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/'>
                                <p>Suppport</p>
                            </Link>
                            <Link to="/">
                                <p>Terms of use</p>
                            </Link>
                            <Link to='/'>
                                <p>Privacy & Policy</p>
                            </Link>
                            <Link to='/'>
                                <p>Help</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 col-md-12 col-sm-12 mb-5'>
                    <p className='footer_heading fw-bolder fs-5'>NEWSLETTER</p>
                    <div className='newsletter_box'>
                        <p>Subscribe for latest articles and resources</p>
                        <div style={{ position: 'relative' }}>
                            <input type="text" placeholder='Email Address' className='newsletter_input' />
                            <button className='newsletter_btn'>REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row footer_row2'>
                <div className='col-12 d-flex align-items-center justify-content-between'>
                    <p className='mt-3' style={{ color: "rgba(143, 141, 160, 1)" }}>@ Copyright 2022 by Brickclay</p>
                    <div className='footer_icon'>
                        <div><FaInstagram /></div>
                        <div><FaLinkedin /></div>
                        <div><FaTwitter /></div>
                        <div><FaFacebook /></div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Footer