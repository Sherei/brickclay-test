import React from 'react'
import { FaBars, FaSearch, FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"
import "./navbar.css"
import { Link } from 'react-scroll'

const TopNavbar = () => {

  return <>
    <>

      <nav className="navbar navbar-expand-lg " style={{ minHeight: "90px" }}>
        <div className="container-fluid">
          <Link className="nav-link logo px-lg-5 px-0" to="">
            Catalog
          </Link>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarButtonsExample"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="service">
                  services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  case shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="faq">
                  blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="stat">
                  content
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav hide  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link2" href="#">
                  <FaInstagram />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link2" href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link2" href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link2" href="#">
                  <FaFacebook />
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center hide">
              <div className='px-4 hide'>
                <a className="nav-link2" href="#">
                  <FaSearch />
                </a>
              </div>
              <div className='px-2 hide'>
                <p className='m-0 nav-link3'>Need help?</p>
                <p className='m-0 nav-link3'>+92 666 888 0000</p>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </>

  </>

}

export default TopNavbar