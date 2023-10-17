import React from 'react'
import "./stat.css"

const Stats = () => {

    return <>
        <div className='container-fluid mx-0 py-5'id='stat' style={{ backgroundColor: "rgba(7, 18, 45, 0.98)" }}>
            <div className='row mb-5 d-flex justify-content-center align-items-center' style={{ minHeight: '70vh' }}>
                <div className='col-12'>
                    <div className='d-flex justify-content-center flex-wrap gap-4'>
                        <div className='stats_box'>
                            <div className='stat_img'>
                                <img src="/brainstorming.png" alt="No Network" />
                            </div>
                            <p className='fs-1 fw-bolder'>420</p>
                            <p className='fs-6'>CONSULTING SOLUTIONS</p>
                        </div>
                        <div className='stats_box'>
                            <div className='stat_img'>
                                <img src="/brainstorming.png" alt="No Network" />
                            </div>
                            <p className='fs-1 fw-bolder'>420</p>
                            <p className='fs-6'>CONSULTING SOLUTIONS</p>
                        </div>
                        <div className='stats_box'>
                            <div className='stat_img'>
                                <img src="/brainstorming.png" alt="No Network" />
                            </div>
                            <p className='fs-1 fw-bolder'>420</p>
                            <p className='fs-6'>CONSULTING SOLUTIONS</p>
                        </div>
                        <div className='stats_box'>
                            <div className='stat_img'>
                                <img src="/brainstorming.png" alt="No Network" />
                            </div>
                            <p className='fs-1 fw-bolder'>420</p>
                            <p className='fs-6'>CONSULTING SOLUTIONS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Stats