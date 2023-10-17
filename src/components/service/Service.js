import React, { useState } from 'react';
import './service.css';

const Service = () => {
    const [activeService, setActiveService] = useState(0);

    const serviceData = [
        {
            title: 'BUSINESS GROWTH',
            content: 'HIGHEST SUCCESS RATES\nLorem Ipsum nibh vel velit auctor aliqu. Aenean sollicitudin, lorem is simply free text quis bibendum.',
        },
        {
            title: 'BUSINESS DEVELOP',
            content: 'HIGHEST DEVELOPMENT RATES\nLorem Ipsum nibh vel velit auctor aliqu. Aenean sollicitudin, lorem is simply free text quis bibendum.',
        },
        {
            title: 'SOFTWARE DEVELOP',
            content: 'SOFTWARE QUALITY\nLorem Ipsum nibh vel velit auctor aliqu. Aenean sollicitudin, lorem is simply free text quis bibendum.',
        },
    ];

    const handleServiceClick = (index) => {
        setActiveService(index);
    };

    return (
        <div className="container-fluid mx-0" id="service" style={{ minHeight: "100vh" }}>
            <div className="row" style={{ position: "relative" }}>
                <div className="col-12 d-flex justify-content-center">
                    <div className="service_box_main">
                        {serviceData.map((service, index) => (
                            <div
                                key={index}
                                className={`service_box ${activeService === index ? 'active' : ''}`}
                                onClick={() => handleServiceClick(index)}
                            >
                                <p>{service.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='row service_row2'>
                <div className='col-lg-10 col-md-10 col-sm-12 m-auto '>
                    <div className='d-flex flex-wrap gap-lg-5 gap-xl-5 gap-2 '>
                        {activeService !== null && (
                            <>
                                <div className='d-flex gap-3'>
                                    <div className='service_icon'><img src="/Icon feather-check-circle.png" alt="No network" /></div>
                                    <div className='service_detail'>
                                        <p className='fw-bolder'>{serviceData[activeService].title}</p>
                                        <p>{serviceData[activeService].content}</p>
                                    </div>
                                </div>
                                <div style={{ width: "450px" }}>
                                    <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.</p>
                                </div>
                                <div className='d-flex gap-3'>
                                    <div className='service_icon'><img src="/Icon feather-check-circle.png" alt="No network" /></div>
                                    <div className='service_detail'>
                                        <p className='fw-bolder'>{serviceData[activeService].title}</p>
                                        <p>{serviceData[activeService].content}</p>
                                    </div>
                                </div>
                                <div style={{ width: "450px" }}>
                                    <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
