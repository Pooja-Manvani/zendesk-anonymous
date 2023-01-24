import React from 'react'

export default function PromoCard() {
  return (
    <div className='Promo-Card-container p-4 d-flex flex-column justify-content-between border-2 border-bottom border-success'>
        <div>
        <div className='pb-4'>
            <h6 className='fw-bold text-bottleGreen'>Cx TRENDS 2023</h6>
            <h4 className='fw-bold text-bottleGreen'>What's shaping CX today</h4>
        </div>
        <div className='pb-4'>
            <p>
            Immersive customer experience is in. Dive into our latest research and learn how to get an edge in 2023.
            </p>
        </div>
        </div>

        <div className='py-3'>
            <a className='text-bottleGreen fw-bold'>Get the Report</a><span></span>
        </div>
    </div>
  )
}
