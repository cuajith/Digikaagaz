import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section id="header" className='d-flex align-items-center'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-11 mx-auto'>
                            <div className='row'>
                                <div
                                    className='col-md-3 pt-2 pt-lg-0 order-2 order-lg-1 
                                    d-flex 
                                    justify-content-center 
                                    flex-column'>
                                    <p>
                                        <strong className=''> Product </strong>
                                    </p>
                                </div>
                                <div
                                    className='col-md-3 pt-2 pt-lg-0 order-2 order-lg-1 
                                    d-flex justify-content-center flex-column'>
                                    <p>
                                        <strong className=''> Solutions </strong>
                                    </p>
                                </div>
                                <div
                                    className='col-md-3 pt-2 pt-lg-0 order-2 order-lg-1 
                                    d-flex justify-content-center flex-column'>
                                    <p>
                                        <strong className=''> Resources </strong>
                                    </p>
                                </div>
                                <div
                                    className='col-md-3 pt-2 pt-lg-0 order-2 order-lg-1 
                                    d-flex justify-content-center flex-column'>
                                    <p>
                                        <strong className=''> Company </strong>
                                    </p>
                                </div>
                            </div><hr/>
                            <div className='row'>
                                <div
                                    className='col-md-4 pt-2 pt-lg-0 order-2 order-lg-1 gap-2
                                    d-flex 
                                    justify-content-center 
                                    align-items-center
                                    flex-row'>
                                    <Link to="/"><TwitterIcon/></Link>
                                    <Link to="/"><InstagramIcon/></Link>
                                    <Link to="/"><LinkedInIcon/></Link>
                                    <Link to="/"><YouTubeIcon/></Link>
                                </div>
                                <div
                                    className='col-md-4 pt-2 pt-lg-0 order-2 order-lg-1 
                                    d-flex justify-content-center align-items-center flex-column'>
                                    <p>
                                    &copy; 2022 Copyright DigiApricus. All rights reserved.
                                    </p>
                                </div>
                                <div
                                    className='col-md-4 pt-2 pt-lg-0 order-2 order-lg-1 color-secondary
                                    d-flex justify-content-center align-items-center flex-column'>
                                    <Link to="/">Terms and conditions</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer