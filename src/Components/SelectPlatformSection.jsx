import React from 'react';
import PlatformBG from '../assets/images/bg-customize.webp'

export default function SelectPlatformSection() {
  return (
    <div className='my-5 pt-5  position-relative text-center' >
        <img src={PlatformBG} alt='PlatformBG' className='w-75 overflow-hidden'></img>
        <div className='customise-card text-start shadow'>
            <h1 className='mb-4 text-darker fw-bold'>Customise your customer experience</h1>
            <p className='mb-4 text-bottleGreen'>Sunshine lets you customise and extend Zendesk to provide personalised experiences, 
                help agents stay productive, and keep the entire business connected. Plus,
                 it is open and flexible, so you can adapt quickly to anything thrown your way.
            </p>
            <div className='d-flex cursor-pointer'>
                <a className='text-link fw-bold fs-6 text-darker'>Learn more</a>
                <span className='icon-container icon-play3 mx-2'></span>
                <a className='text-link fw-bold fs-6 text-darker'>Watch video</a>
            </div>
        </div>
    </div>
  )
}
