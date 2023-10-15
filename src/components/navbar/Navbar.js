import React from 'react';
import { Link } from 'react-scroll';
import "./navbar.css";

const Navbar = () => {


  return <>

    <div className="container-fluid mb-1 ">
      <div className="row">
        <nav className="navbar navbar-expand-lg p-0">
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className='d-flex flex-column gap-1'>
              <span className="navbar-toggler-icon line1"></span>
              <span className="navbar-toggler-icon line2"></span>
              <span className="navbar-toggler-icon line3"></span>
            </div>
          </button>
          <div className='row' id="navbarNavDarkDropdown">
            <div className='col-2' >
              <p>catallog</p>
            </div>
            <div className='col-8'>
              <div className="collapse navbar-collapse" >
                <ul className="navbar-nav">
                  <li className="nav-item2">
                    <Link className="nav-link" to="/" role="button">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item2">
                    <Link className="nav-link" to="/Products/all" role="button">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item2">
                    <Link className="nav-link" to="/Products/all" role="button">
                      Pages
                    </Link>
                  </li>
                  <li className="nav-item2">
                    <Link className="nav-link" to="/Products/all" role="button" >
                      Case Shop
                    </Link>
                  </li>
                  <li className="nav-item2">
                    <Link className="nav-link" to="/Products/all" role="button" >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item2">
                    <Link className="nav-link" to="/Products/all" role="button">
                      Content
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-2 d-flex'>
              <p>Search</p>
              <p>Need helo</p>
            </div>
          </div>

        </nav>
      </div>
    </div>

  </>
}
export default Navbar;