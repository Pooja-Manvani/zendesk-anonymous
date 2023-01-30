import React from 'react'
import secondryBG from '../assets/images/HomeBuy.webp';
import msgPerson from '../assets/images/messaging-person-phone.webp'

export default function TourSection() {
  return (
    <div className='tour-wrapper d-none d-lg-flex row p-5 flex-column'>
      <div className='col-8 position-relative'>
        <div className='text-center  container d-flex flex-column justify-self-center align-content-center px-5 '>
            <h1 className='title-font mb-4'>Take a quick tour.</h1>
            <div className='justify-content-center row '>
              <p className=' text-center col-8'>The best way to learn about Zendesk is to experience it like a customer. See for yourself how Zendesk makes customer experience easy.</p>
              </div>
        </div>
        <div className=' d-flex align-items-end flex-grow-1 justify-content-center position-relative ' id='person-msg-card'>
            <img src={secondryBG} alt='secondry' className='homeBug-img position-relative'></img>

            <div className='tour-info-card bg-white p-4' >
              <img src={msgPerson} alt='msg-person'></img>
              <h5 className='text-bottleGreen py-2'>See Zendesk in action.</h5>
              <button className='px-4 py-1 fw- btn-dark-outline mx-5'>Start tour</button>
            </div>
        </div>
      </div>
    </div>
  )
}
