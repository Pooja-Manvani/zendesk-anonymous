import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'

export default function Header(props) {
  console.log(props)
                                     
  const [hoverCompany,setHoverCompany] = useState(false);                                  
  const [hoverLang,setHoverLang] = useState(false);                  
  const [hoverProduct,setHoverProduct] = useState(false);                  
  const [hoverPricing,setHoverPricing] = useState(false);                  
  const [hoverSolution,setHoverSolution] = useState(false);                  
  const [hoverResource,setHoverResource] = useState(false);                  
  
  const handleCompanyEnter = () => {
    setHoverCompany(true)
  }
  const handleCompanyLeave = () => {
    setHoverCompany(false)
  }
  
  const handleLangEnter = () => {
    setHoverLang(true)
  }
  const handleLangLeave = () => {
    setHoverLang(false)
  }

  const handleProductEnter = () => {
    setHoverProduct(true)
  }
  const handleProductLeave = () => {
    setHoverProduct(false)
  }

  const handlePricingEnter = () => {
    setHoverPricing(true)
  }
  const handlePricingLeave = () => {
    setHoverPricing(false)
  }

  const handleSolutionEnter = () => {
    setHoverSolution(true)
  }
  const handleSolutionLeave = () => {
    setHoverSolution(false)
  }

  const handleResourceEnter = () => {
    setHoverResource(true)
  }
  const handleResourceLeave = () => {
    setHoverResource(false)
  }
  const wapperHeader = `wrapper-header + ${props.showHeader}`
  return (
    <div className={wapperHeader} >
    <div className=' container-xl d-lg-flex d-none flex-column px-xl-5 position-relative'>
        <Nav className='sub-nav flex-grow-1 px-5' >
            <ul className='d-flex justify-content-end pt-2' >
            <li className='list-unstyled px-1 underline-hover nav-item-font cursor-pointer '  >Sign in</li> 
                
                <li className='list-unstyled px-2 underline-hover nav-item-font hover-text-white cursor-pointer '  >Product Support</li> 
                <li className='list-unstyled px-2 underline-hover nav-item-font cursor-pointer '  onMouseEnter={handleCompanyEnter} onMouseLeave={handleCompanyLeave} >Company</li> 
                <li className='list-unstyled px-2 underline-hover nav-item-font cursor-pointer '  >Contact Us</li>
                <li className='list-unstyled px-2 underline-hover nav-item-font cursor-pointer '  onMouseEnter={handleLangEnter} onMouseLeave={handleLangLeave} >English</li> 
            </ul>
        </Nav>
        <div className='info-container d-flex px-5 justify-content-end'>
        {hoverCompany &&  <div className='nav-item-position p-4 float-sm-start border text-start bg-white h-25' >
          <ul className='list-unstyled text-center small px-4'> 
            <li className='p-2'>About</li>
            <li className='p-2'>Contact</li>
            <li className='p-2'>Service</li>
            <li className='p-2'>Use cases</li>
          </ul>
        </div> }
        {hoverLang &&  
        <div className='p-4 text-center small bg-white h-25' >
          <p>English(UK)</p>
          <p>English(US)</p>
          <p>Italiano</p>
          <p>Nederlands</p>
          <p>Dansk</p>
          <p>English(Australia)</p>
          <p>English(Singapore)</p>
          <p>Francias</p>
        </div>
        }
      </div>
        <Nav className='px-xl-5 p-2 align-items-center d-flex position-relative '>
          <h4 className='cursor-pointer p-0 align-items-center'>Zendesk</h4>
          <div className='d-flex flex-grow-1 justify-content-end align-items-center'>
          <ul className='list-unstyled pt-1 d-flex align-items-center mb-0'>
            <li className=' hover-underline-bottom mx-4 cursor-pointer py-2 position-relative' onMouseEnter={handleProductEnter} onMouseLeave={handleProductLeave} ><h6>Products</h6>
              {hoverProduct && 
                  <div className='p-4 shadow d-flex nav-hover-items' onMouseEnter={handleProductEnter} onMouseLeave={handleProductLeave}>
                      <div className='m-1'>
                        <div className='p-2 content-box-hover text-nowrap'>
                            <h6>Zendesk for service</h6>
                            <p className='text-bottleGreen small'>The complete solution service</p>
                        </div>
                        <div className='p-2 content-box-hover text-nowrap'>
                            <h6 className='text-bottleGreen'>Zendesk for sales</h6>
                            <p className='text-bottleGreen small'>The morden sales solution</p>
                        </div>
                      </div>
                      <div className='m-1'>
                        <div className='p-2 content-box-hover text-nowrap'>
                            <h6>Sunshine platform</h6>
                            <p className='text-bottleGreen small'>Fast, open and flexible</p>
                        </div>
                        <div className='p-2 content-box-hover text-nowrap'>
                            <h6 className='text-bottleGreen'>Marketplace</h6>
                            <p className='text-bottleGreen small'>Apps, integrations and partners</p>
                        </div>
                      </div>
                  </div>
                }
            </li>
            <li className=' hover-underline-bottom mx-4 cursor-pointer py-2 position-relative' onMouseEnter={handlePricingEnter} onMouseLeave={handlePricingLeave} ><h6>Pricing</h6>
              {hoverPricing &&
              <div className='p-4 shadow d-flex nav-hover-items justify-content-center' onMouseEnter={handlePricingEnter} onMouseLeave={handlePricingLeave}>
                    <div className='m-1'>
                      <div className='p-2 content-box-hover text-nowrap'>
                          <h6>Zendesk for service</h6>
                          <p className='text-bottleGreen small'>The complete solution service</p>
                      </div>
                      <div className='p-2 content-box-hover text-nowrap'>
                          <h6 className='text-bottleGreen'>Zendesk for sales</h6>
                          <p className='text-bottleGreen small'>The morden sales solution</p>
                      </div>
                    </div>
                </div>
              }
            </li>
            <li className=' hover-underline-bottom mx-4 cursor-pointer py-2 position-relative' onMouseEnter={handleSolutionEnter} onMouseLeave={handleSolutionLeave}><h6>Solutions</h6>
            {hoverSolution &&
              <div className='p-4 shadow d-flex nav-hover-items justify-content-center' onMouseEnter={handleSolutionEnter} onMouseLeave={handleSolutionLeave}>
                    <div className='m-1'>
                      <div className='p-2 content-box-hover text-nowrap'>
                          <h6>Enterprise</h6>
                          <p className='text-bottleGreen small'>Have conversations at scale</p>
                      </div>
                      <div className='p-2 content-box-hover text-nowrap'>
                          <h6 className='text-bottleGreen'>Small & medium businesses</h6>
                          <p className='text-bottleGreen small'>Grow without growing pain</p>
                      </div>
                      <div className='p-2 content-box-hover text-nowrap'>
                          <h6 className='text-bottleGreen'>Startups</h6>
                          <p className='text-bottleGreen small'>Start off on the right foots</p>
                      </div>
                    </div>
                    <div className='m-1'>
                      <div className='p-2 content-box-hover text-nowrap'>
                          <h6>Employee experience</h6>
                          <p className='text-bottleGreen small'>Treat employees like customers</p>
                      </div>
                      <div className='p-2 content-box-hover text-nowrap'>
                          <h6 className='text-bottleGreen'>Industries</h6>
                          <p className='text-bottleGreen small'>Meet your market's need</p>
                      </div>
                      <div className='p-2 content-box-hover text-nowrap'>
                          <h6 className='text-bottleGreen'>Conversational CRM</h6>
                          <p className='text-bottleGreen small'>Create lasting customers relationship</p>
                      </div>
                    </div>
                </div>
              }
            </li>
            <li className=' hover-underline-bottom mx-4 cursor-pointer py-2'><h6>Demo</h6></li>
            <li className=' hover-underline-bottom mx-4 cursor-pointer py-2 position-relative' onMouseEnter={handleResourceEnter} onMouseLeave={handleResourceLeave}><h6>Resources</h6>
              {hoverResource &&
                <div className='p-4 shadow d-flex nav-hover-items' onMouseEnter={handleResourceEnter} onMouseLeave={handleResourceLeave}>
                  <div className='m-1'>
                    <div className='p-2 content-box-hover text-nowrap'>
                        <h6 className='text-bottleGreen'>Blogs</h6>
                        <p className='text-bottleGreen small'>Guides, reports and best practice</p>
                    </div>
                    <div className='p-2 content-box-hover text-nowrap'>
                        <h6 className='text-bottleGreen'>Events and webinar</h6>
                        <p className='text-bottleGreen small'>Learn from wherever you are</p>
                    </div>
                    <div className='p-2 content-box-hover text-nowrap'>
                        <h6 className='text-bottleGreen'>Community</h6>
                        <p className='text-bottleGreen small'>Connect, learn and engage with Zendesk users</p>
                    </div>
                    <div className='p-2 content-box-hover text-nowrap'>
                        <h6 className='text-bottleGreen'>Professional services</h6>
                        <p className='text-bottleGreen small'>Get hands-on help, dedicated support and expert guidance</p>
                    </div>
                  </div>
                  <div className='m-1'>
                    <div className='p-2 content-box-hover text-nowrap'>
                        <h6>What's new with Zendesk</h6>
                        <p className='text-bottleGreen small'>Check out recent product updates</p>
                    </div>
                    <div className='p-2 content-box-hover text-nowrap'>
                        <h6 className='text-bottleGreen'>APIs & Developer</h6>
                        <p className='text-bottleGreen small'>Info for building things with Zendesk</p>
                    </div>
                    <div className='p-2 content-box-hover text-nowrap'>
                        <h6 className='text-bottleGreen'>Partners</h6>
                        <p className='text-bottleGreen small'>How to locate or become a Zendesk partner</p>
                    </div>
                    <div className='p-2 content-box-hover text-nowrap'>
                        <h6 className='text-bottleGreen'>Customers stories</h6>
                        <p className='text-bottleGreen small'>See what success with zendesk looks like</p>
                    </div>
                  </div>
                </div>
              }
            </li>
          </ul>
          <button className='btn-background btn  mx-4 px-4 py-2 rounded-0 fw-bold' onClick={()=>alert("In progress..!")}>Free Trial</button>
          <button className='btn-custom-outline btn rounded-0 px-4 py-2 fw-bold  ' onClick={()=>alert("In progress..!")} >Buy now</button>
          </div> 
        </Nav>
    </div>
    </div>
  )
}
