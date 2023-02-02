import React from 'react'
import GartnerLogo from '../assets/images/GartnerLogo.png'
import DevLogo from '../assets/images/DevLogo.png'
import Clip from '../assets/images/clip.webp'

export default function ArticleSection() {
  return (
    <div className='wrapper m-5 mb-0 pb-0 p-5 d-flex flex-column'>
        {/* Gartner section */}
        <div className='gartner-container shadow'>
            <h2 className='text-darker fw-bold mb-4'>#1 in Digital Customer Service use case by</h2>
            <img src={GartnerLogo} alt='Logo' className='gartner-logo'></img>
        </div>
        {/* Article section */}
        <div className='article-container d-flex py-5 mx-5'>
            <div className='my-5 pt-4 me-5 ps-1'>
                <div className='position-relative '>
                    <img src={Clip} alt='Clip' className='clip-img'></img>
                    <div className='clip-icon-container cursor-pointer'><span className='icon-play3'></span></div>
                </div>
            </div>
            <div className='flex-grow-1 mx-5 ps-5'>
                <img src={DevLogo} alt='DevLogo' className='py-3'></img>
                <p className='fw-semibold text-bottleGreen my-4 fs-5'>“Zendesk gave us the best practices we needed right out of the box to manage customer support for all of our
                    acquired businesses from one central platform. As a result, our customer satisfaction across products went up from
                    89.2 percent in June 2020 to 94.8 percent in November 2020.“
                </p> 
                <div className='mt-5'>
                    <p className='fw-semibold text-bottleGreen m-0'>Rahul Subramaniam</p>
                    <small>CEO at <span className='text-decoration-underline'>DevFactory.</span></small>
                </div>
            </div>
        </div>

    </div>
  )
}
