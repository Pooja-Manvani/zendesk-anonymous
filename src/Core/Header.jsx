import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'

export default function Header(props) {
  console.log(props)
                                     
  const [hoverCompany,setHoverCompany] = useState(false);                                  
  const [hoverLang,setHoverLang] = useState(false);                  
  
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
  const wapperHeader = `wrapper-header + ${props.showHeader}`
  return (
    <div className={wapperHeader} >
    <div className=' container d-lg-flex d-none flex-column px-lg-5 position-relative'>
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
          <ul className='list-unstyled text-center px-4'> 
            <li className='p-2'>About</li>
            <li className='p-2'>Contact</li>
            <li className='p-2'>Service</li>
            <li className='p-2'>Use cases</li>
          </ul>
        </div> }
        {hoverLang &&  <div className='p-4 border text-start bg-white h-25' ><p>Languages</p><p>Languages</p><p>Languages</p><p>Languages</p><p>Languages</p></div> }
          </div>
        <Nav className='px-5 p-2 align-items-center d-flex position-relative '>
          <h4 className='cursor-pointer p-0 align-items-center'>Zendesk</h4>
          <div className='d-flex flex-grow-1 justify-content-end align-items-center'>
          <ul className='list-unstyled pt-1 d-flex align-items-center mb-0'>
            <li className=' hover-underline-bottom mx-4 cursor-pointer py-2'><h6>Products</h6></li>
            <li className=' hover-underline-bottom mx-4 cursor-pointer py-2'><h6>Pricing</h6></li>
            <li className=' hover-underline-bottom mx-4 cursor-pointer py-2'><h6>Solutions</h6></li>
            <li className=' hover-underline-bottom mx-4 cursor-pointer py-2'><h6>Demo</h6></li>
            <li className=' hover-underline-bottom mx-4 cursor-pointer py-2'><h6>Resources</h6></li>
          </ul>
          <button className='btn-background btn  mx-4 px-4 py-2 rounded-0 fw-bold' >Free Trial</button>
          <button className='btn-custom-outline btn rounded-0 px-4 py-2 fw-bold  ' >Buy now</button>
            </div> 
        </Nav>
    </div>
    </div>
  )
}
