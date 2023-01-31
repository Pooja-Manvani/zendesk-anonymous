import React from 'react'
// import API services.
import { getServiceCase, getExperienceCase, getSalesCase } from '../Service/Axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function UseCaseSection() {
    const [UseCase, setUseCase] = useState([]);
    const [activeSales, setSales] = useState(Boolean);
    const [activeService, setService] = useState(Boolean);
    const [activeExperience, setExperience] = useState(Boolean);
    useEffect(() => {
        getService();
        // getSales();
        // getExperience();
    }, []);
    const getService = async () => {
        setService(true);
        setSales(false);
        setExperience(false);
        const response = await getServiceCase();
        return setUseCase(response.data);
    }
    const getSales = async () => {
        setSales(true);
        setExperience(false);
        setService(false);
        const response = await getSalesCase();
        return setUseCase(response.data);
    }
    const getExperience = async () => {
        setExperience(true);
        setSales(false);
        setService(false);
        const response = await getExperienceCase();
        return setUseCase(response.data);
    }
   
  return (
    <div className='wrapper text-center flex-column'>
        <div className='title-wrapper '>
            <h1 className='title-font mb-4'>Where good conversations become great experiences</h1>
            <h5 className='text-bottleGreen'>To make customers happy, you need conversational experiences—connected communication across any channel.</h5>
            <nav className=''>
                <ul className='list-unstyled d-flex justify-content-center'>
                    <li  className={"nav-item p-3 mx-2 fw-bold text-darker" +' '+(activeService && 'nav-border')}  onClick={getService} >SERVICE</li>
                    <li className={"nav-item p-3 mx-2 fw-bold text-darker" +' '+(activeSales && 'nav-border')}  onClick={getSales} >SALES</li>
                    <li className={"nav-item p-3 mx-2 fw-bold text-darker" +' '+(activeExperience && 'nav-border')}  onClick={getExperience} >EMPLOYEE EXPERIENCE</li>
                </ul>
            </nav>
        </div>
        {UseCase.map((data) => (
        <div className='row container mx-5 px-5'>
            <div className='col-6 pt-1 px-5'>
                <div className='w-75 pt-1'>
                    <h2 className='fw-bold text-darker text-start pb-4'> {data.title} </h2>
                    <p className='pb-2 text-bottleGreen text-start fw-ligter'>
                        {data.detail}
                    </p>
                    <div className='d-flex cursor-pointer'>
                        <a className='text-link fw-bold fs-5 text-darker'>Learn more</a>
                        <span className='icon-container icon-play3 mx-2'></span>
                        <a className='text-link fw-bold fs-5 text-darker'>Watch video</a>
                    </div>
                </div>
                <div className='info-border-left mt-5 mx-5 text-start ps-4'>
                    <img src={require(`../assets/images/${data.logo}`)}  className='pb-3 logo-company overflow-hidden'></img>
                    <div className='pb-4 text-bottleGreen w-75'>
                        "{data.info}"
                    </div>
                    <div className='d-flex flex-column w-75 text-bottleGreen ' >
                        <div> {data.author} </div>
                        <div className='text-wrap '> {data.post} </div>
                    </div>
                </div>
            </div>
            <div className='col-6 p-3 position-relative'>
                <img src={require(`../assets/images/${data.BGimage}`)} alt='BGcase' className='lower-image-usecase overflow-hidden' ></img>
                <img src={require(`../assets/images/${data.upperimage}`)} alt='screenBGcase' className='upper-image-usecase overflow-hidden' ></img>
            </div>
        </div>
        ))}
    </div>
  )
}
