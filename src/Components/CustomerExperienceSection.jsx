import React from 'react'

export default function CustomerExperienceSection() {
  return (
    <div className='d-flex align-content-center justify-content-center bg-light'>
        <div className='row inner-container my-5 py-5 align-self-center'>

            <div className='col-5 me-5'>
                <h1 className='text-bottleGreen title-font'>The best customer experiences are built with Zendesk</h1>
                <h5 className='text-bottleGreen py-4'>The companies you use, use Zendesk</h5>
                <div className="py-3">
                    <a className="card-item text-bottleGreen fw-bold overflow-hidden text-truncate pb-2">
                    See all customers story
                    </a>
                    <span className="fw-lighter icon-arrow-right" ></span>
                </div>
            </div>

            <div className='col'>
                images
            </div>
        </div>
    </div>
  )
}
