import React from 'react'

export default function GlobalFooter() {
  return (
    <>
    {/* Proactive-offer section. */}
    <div className='footer-inner-container d-lg-flex justify-content-center align-items-center'>
        <div className='p-lg-5 row-lg justify-content-center p-3'>
            <h1 className='fw-bold title-font text-darker m-auto col-7 text-center'>Champions of awesome free trials</h1>
            <div className='d-flex justify-content-center py-3'>
                <button className='btn-dark-bg btn fs-lg-5 mx-lg-4 mx-2 px-lg-4 py-2 rounded-0 fw-semibold' onClick={()=>alert("In progress..!")}>Start a free trial</button>
                <button className='btn-dark-outline btn fs-lg-5 rounded-0 px-lg-4 py-2 fw-semibold  ' onClick={()=>alert("In progress..!")}>View demo</button>
            </div>
        </div>
    </div>
    {/* Global footer section */}
    <div className='d-lg-flex d-none justify-content-center align-items-center px-xxl-5 mx-xxl-5 mt-md-5 '>
        <div className='d-flex flex-column mx-xxl-5 px-xxl-5 '>
            <div className='justify-content-start mx-lg-5 px-xl-5'>
                <span className='icon-zendesk p-3 fs-1 text-darker'></span>
            </div>

            <div className='row mx-xl-5 px-xl-5 border-bottom border-2 border-lightgray'>
                    <div className='col-2 p-3'>
                        <h4 className='text-darker text-wrap fw-bold'>
                            Champions <br></br>of customer service
                        </h4>
                    </div>
                    <div className='col-2 py-3'>
                        <h6 className='text-darker fw-bold py-2'>
                        OUR PRODUCTS
                        </h6>
                        <ul className='list-unstyled '>
                            <li>
                                <span className='service-link-text'>Zendesk for service</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Zendesk for sales</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Sunshine Platform</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Marketplace</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Product updates</span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-2 py-3'>
                        <h6 className='text-darker fw-bold py-2'>
                        TOP FEATURES
                        </h6>
                        <ul className='list-unstyled '>
                            <li>
                                <span className='service-link-text'>Ticketing system</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Messaging & live chat</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Help center</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Voice</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Community forums</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Reporting & analytics</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Answer Bot</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Customer service software</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Ticketing system software</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Live chat software</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Knowledge base</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Forum software</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Help desk software</span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-2 py-3'>
                        <h6 className='text-darker fw-bold py-2'>
                        RESOURCES
                        </h6>
                        <ul className='list-unstyled '>
                            <li>
                                <span className='service-link-text'>Security</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Product support</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Request a demo</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Blog</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Training</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Partners</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Webinars</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Customer Stories</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Services</span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-2 py-3'>
                        <h6 className='text-darker fw-bold py-2'>
                        COMPANY
                        </h6>
                        <ul className='list-unstyled '>
                            <li>
                                <span className='service-link-text'>About us</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Newsroom</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Investors</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Events</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Careers</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Diversity & Inclusion</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Sustainability</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Contact us</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Sitemap</span>
                            </li>
                            <li>
                                <span className='service-link-text'>System status</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Zendesk Foundation</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Legal</span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-2 py-3'>
                        <h6 className='text-darker fw-bold py-2'>
                            FAVORITE THINGS
                        </h6>
                        <ul className='list-unstyled '>
                            <li>
                                <span className='service-link-text'>What is Zendesk</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Zendesk for Enterprise</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Zendesk for Small Business</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Zendesk for Startups</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Zendesk Benchmark</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Gartner CRM Magic Quadrant</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Customer Experience Trends</span>
                            </li>
                            <li>
                                <span className='service-link-text'>What is CRM?</span>
                            </li>
                            <li>
                                <span className='service-link-text'>CRM software guide</span>
                            </li>
                            <li>
                                <span className='service-link-text'>Join our research panel</span>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    </div>

        {/* Subscribe & disclaimation section */}
        <div className='d-lg-flex justify-content-center align-items-center px-xl-5 py-4 mx-xl-5 '>
            <div className='mx-xl-5 px-xl-5'>
                <div className='mx-xl-5 px-xl-5 d-lg-flex justify-content-between'>
                    <div className='ms-xl-5 text-center text-lg-start ps-lg-5'>
                        <label className='text-start fs-4 fw-bold text-bottleGreen '>Enter the fold</label>
                        <p className='text-bottleGreen'>Subscribe to our newsletter.</p>
                    </div>

                    <div className='pt-3'>
                        <div className='d-flex justify-content-center'>
                            <input placeholder="what's your email?" className='py-2 px-2 ' ></input>
                            <button className='btn-dark-bg fs-lg-5 px-lg-4 py-2'>Subscribe</button>
                        </div>
                    </div>
                    
                    <div className='me-xl-5 pe-lg-5 d-lg-flex d-none'>
                        <span className='icon-twitter icon-color fs-2 p-2 cursor-pointer'></span>
                        <span className='icon-facebook icon-color fs-2 p-2 cursor-pointer'></span>
                        <span className='icon-linkedin icon-color fs-2 p-2 cursor-pointer'></span>
                        <span className='icon-youtube icon-color fs-2 p-2 cursor-pointer'></span>
                        <span className='icon-instagram icon-color fs-2 p-2 cursor-pointer'></span>
                    </div>
                </div>
                <div className='px-xl-5 mx-xl-5'>
                        <ul className='list-unstyled d-none d-lg-flex py-2 px-lg-5 mx-xl-5'>
                            <li className='p-3 ps-0'>
                                <span className='service-link-text'>Zendesk for service</span>
                            </li>
                            <li className='p-3'>
                                <span className='service-link-text'>Zendesk for sales</span>
                            </li>
                            <li className='p-3'>
                                <span className='service-link-text'>Sunshine Platform</span>
                            </li>
                            <li className='p-3'>
                                <span className='service-link-text'>Marketplace</span>
                            </li>
                            <li className='p-3'>
                                <span className='service-link-text'>Product updates</span>
                            </li>
                        </ul>
                </div>
                <div className='mx-xl-5 mx-3 pt-3 px-xl-5'>
                    <p className='conatiner small text-muted  px-md-5 mx-xl-5'>
                    Gartner, Critical Capabilities for the CRM Customer Engagement Center, 8 June 2020, Nadine LeBlanc, 
                    Brian Manusama <br></br>Gartner does not endorse any vendor, product or service depicted in its research publications and
                    does not advise technology users to select only those vendors with the highest ratings or other designations. 
                    Gartner research publications consist of the opinions of Gartner's Research & Advisory organization and should not be construed as statements of fact.
                    Gartner disclaims all warranties, expressed or implied, with respect to this research, including any warranties of 
                    merchantability or fitness for particular purpose. GARTNER is a registered trademark and service mark of Gartner, Inc. 
                    and/or its affiliates in the U.S. and internationally and is used herein with permissions.
                    All rights reserved.
                    </p>
                </div>
            </div>
        </div>
   
    </>
  )
}
