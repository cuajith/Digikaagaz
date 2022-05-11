import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import "./index.css"

const Home = () => {
    const [key, setKey] = useState('home');
    return (
        <section id="header" className='d-flex align-items-center'>
            <div className='container-fluid nav_bg' style={{marginTop:"120px"}}>
                <div className='row'>
                    <div className='col-11 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h2>
                                    Grow your skills with <strong className='brand-name'> DigiKaagaz </strong>
                                </h2>
                                <h5 className='my-3'>
                                    We are team of talented developer making websites
                                </h5>
                                <div className='mt-3'>
                                    <NavLink to="/" className="btn-get-started">Get Started</NavLink>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                <img
                                    src='./images/frontimage.webp'
                                    className='img-fluid animated'
                                    alt="Home page"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-8 col-sm-8 mx-auto pt-5 d-flex justify-content-center align-items-center">
                            <h2 className="" style={{ fontSize: "25px" }}>
                                In-house or agency recruiter, JobAdder helps you do your best work
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-8 col-sm-11 mx-auto pt-2'>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Home">
                                    Hi
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    Hello
                                </Tab>
                                <Tab eventKey="contact" title="Contact">
                                    Welcome
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home