import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./experience.css"

const Experience = () => {
  return <>
    <div className='container-fluid mx-0 py-5 experience_conteiner'>
      <div className='row'>
        <div className='col-12'>

          <center>
            <p className='e_heading'> real-world experience</p>
            <p className='e_s_heading'>The best business consulting firm you can count on!</p>
          </center>

          <div className='mt-5 pt-4 d-flex justify-content-center flex-wrap gap-5'>

            <div className='e_box'>
              <div className='text-uppercase'>
                <p className='e_box_title'>Wealth <br /> Management</p>
                <p className='e_box_detail'>Read More</p>
              </div>
              <div>
                <button className='btn e_btn'>
                  <button className='btn e_btn2'>
                  </button>
                </button>
              </div>
            </div>

            <div className='e_box'>
              <div className='text-uppercase'>
                <p className='e_box_title'>Wealth <br /> Management</p>
                <p className='e_box_detail'>Read More</p>
              </div>
              <div>
                <button className='btn e_btn'>
                  <button className='btn e_btn2'>
                  </button>
                </button>
              </div>
            </div>


            <div className='e_box'>
              <div className='text-uppercase'>
                <p className='e_box_title'>Wealth <br /> Management</p>
                <p className='e_box_detail'>Read More</p>
              </div>
              <div>
                <button className='btn e_btn'>
                  <button className='btn e_btn2'>
                  </button>
                </button>
              </div>
            </div>
          </div>

          <div className='mt-5 pt-4'>
            <center>
              <p className='e_heat'>heet the partners</p>
            </center>
          </div>

          <center>
            <div className='e_arrow_div my-5'>
              <button> <FaArrowLeft /> </button>
              <button> <FaArrowRight /> </button>
            </div>
          </center>
        </div>
      </div>
    </div>

  </>
}

export default Experience