import React from 'react'
import Person1 from '../assets/images/photo-person-1.webp'
import Person2 from '../assets/images/photo-person-2.webp'
import Person3 from '../assets/images/photo-person-3.webp'

export default function CustomerExperienceSection() {
  return (
    <>
    {/* Customer experience section  */}
    <div className='experience-container shadow-sm d-flex align-content-center justify-content-center bg-light'>
        <div className='d-flex inner-container my-5 py-5 align-self-center '>

            <div className='info-conatiner mt-5 me-5'>
                <h1 className='text-bottleGreen title-font'>The best customer experiences are built with Zendesk</h1>
                <h5 className='text-bottleGreen py-4'>The companies you use, use Zendesk</h5>
                <div className="py-3">
                    <a className="card-item text-bottleGreen fw-bold overflow-hidden text-truncate pb-2 cursor-pointer">
                    See all customers story
                    </a>
                    <span className="fw-lighter icon-arrow-right cursor-pointer" ></span>
                </div>
            </div>

            <div className='p-5 flex-grow-1 position-relative '>
               <img src={Person1} alt='person1' className='img-container-item1'></img>
               <img src={Person2} alt='person2' className='img-container-item2'></img>
               <img src={Person3} alt='person3' className='img-container-item3 mb-3'></img>
            </div>
        </div>
    </div>
    {/* Recomanded Links section */}
    <div className='justify-content-center align-items-center d-flex'>
        <div className='d-flex link-container row'>
        <h2 className='text-darker fw-bold text-nowrap col pe-5'>Recommended reading</h2>
        <div className='col mb-5'>
            <ul className='list-unstyled'>
                <li className='p-2'>
                    <a className='text-bottleGreen fw-bold text-link ' href='https://www.zendesk.com/blog/why-companies-should-invest-in-the-customer-experience/'>
                        Zendesk Customer Experience Trends Report 2021</a>
                </li>
                <li className='p-2'>
                    <a className='text-bottleGreen fw-bold text-link ' href='https://www.zendesk.com/in/blog/customer-service-skills/'>
                        Business texting for customer service</a>
                </li>
                <li className='p-2'>
                    <a className='text-bottleGreen fw-bold text-link ' href='https://www.zendesk.com/in/blog/cx-agility-larger-companies/'>
                        The agility playbook – how larger firms can score a competitive advantage in CX</a>
                </li>
                <li className='p-2'>
                    <a className='text-bottleGreen fw-bold text-link ' href='https://www.zendesk.com/in/blog/customer-service-skills/'>
                        Customer service definition for 2021 and beyond</a>
                </li>
            </ul>
        </div>
        <div className='col'>
            <ul className='list-unstyled'>
                <li className='p-2'>
                    <a className='text-bottleGreen fw-bold text-link ' href='https://www.zendesk.com/in/blog/cx-critical-new-digital-world-financial-services/'>
                    How CX is critical for the new digital world of financial services</a>
                </li>
                <li className='p-2'>
                    <a className='text-bottleGreen fw-bold text-link ' href='https://www.zendesk.com/in/blog/supporting-customers-starts-supporting-agents/'>
                    Supporting your customers starts with supporting your agents</a>
                </li>
                <li className='p-2'>
                    <a className='text-bottleGreen fw-bold text-link ' href='https://www.zendesk.com/in/blog/gartner-magic-quadrant-crm/'>
                    Gartner’s 2021 Magic Quadrant for the CRM Customer Engagement Centre</a>
                </li>
                <li className='p-2'>
                    <a className='text-bottleGreen fw-bold text-link ' href='https://www.zendesk.com/in/blog/messaging-apps-open-business/'>
                    Messaging apps are open for business</a>
                </li>
            </ul>
        </div>
      </div>
        
    </div>
    </>
  )
}
