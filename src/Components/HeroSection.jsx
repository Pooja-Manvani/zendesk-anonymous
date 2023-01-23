import React from 'react'

export default function HeroSection() {
  return (
    <div className='heroContainer container-xl p-5 '>
      <div className='row d-flex text-white'>
        <div className='p-2 p-lg-5 py-lg-0 col-12 col-lg-7 align-self-center flex-grow-1'>
          <h1 className='hero-title-font'>
            <span className='text-champions'></span>
            </h1>

          <div className='' >
            <div className='d-flex'>
              <h1 className='hero-title-font '>
                <span className='text-of'></span> </h1>
              <div  className=' border-bottom border-3 ms-3' >
                <h1 className='hero-title-font' >
                  <span className='text-roller-up' ></span>
                  </h1>
              </div>
            </div>
    
            <div >
               <h1 className='hero-title-font  '>
               <span className=' text-roller-down border-bottom border-3'>
                </span>
               </h1>
            </div>
          </div>
          
        </div>
        <div className='p-2 p-lg-5 col-12 col-lg-5 align-align-items-center'>
          <p className='p-2 fw-500 fs-5'>
          Zendesk makes customer service better. We build software to meet customer needs, set your team up for success, and keep your business in sync.
          </p>
          <div className='d-lg-flex'>
            <button className='btn-background btn btn-outline-light   my-4 my-lg-0 mx-lg-2 px-4 py-2 rounded-0 fw-bold border border-2' >Free Trial</button>
            <button className='btn-custom-outline btn btn-outline-light  rounded-0 px-3 py-2 mx-lg-2 fw-bold border border-2 ' >View demo</button>
          </div>
        </div>
      </div>
    </div>
  )
}
