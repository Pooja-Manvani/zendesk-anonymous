import React from 'react'

export default function HeroSection() {
  return (
    <div className='heroContainer container p-5 '>
      <div className='row d-flex text-white'>
        <div className='px-5 col-7  align-align-items-center flex-grow-1'>
          <h1 className='hero-title-font'>Champions</h1>

          <div className='roller' >
            <div className='d-flex'>
              <h1 className='hero-title-font'>of </h1>

              <span  className='font-slider'>
                <span className='hero-title-font'>customer </span>
                <span className='hero-title-font'>no-hassle </span>
                <span className='hero-title-font'>not waiting on </span>
                <span className='hero-title-font'>social </span>
                <span className='hero-title-font'>extra sauce </span>
                <span className='hero-title-font'>actually having </span>
                <span className='hero-title-font'>customer </span>
             </span>
            </div>
    
            <div >
              <h1 className='hero-title-font'>service</h1>
              <h1 className='hero-title-font'>returns</h1>
              <h1 className='hero-title-font'>hold forever</h1>
              <h1 className='hero-title-font'>messaging</h1>
              <h1 className='hero-title-font'>on th side</h1>
              <h1 className='hero-title-font'>a nice day</h1>
              <h1 className='hero-title-font'>service</h1>
            </div>
          </div>
          
        </div>
        <div className='p-5 col-5 align-align-items-center'>
          <p className='p-2 fw-500 fs-5'>
          Zendesk makes customer service better. We build software to meet customer needs, set your team up for success, and keep your business in sync.
          </p>
          <div className='d-flex'>
            <button className='btn-background btn btn-outline-light me-4 px-4 py-2 rounded-0 fw-bold border border-2' >Free Trial</button>
            <button className='btn-custom-outline btn btn-outline-light rounded-0 px-3 py-2 fw-bold border border-2 ' >View demo</button>
          </div>
        </div>
      </div>
    </div>
  )
}
