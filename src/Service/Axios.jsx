import axios from "axios";

const http = 'http://localhost:3000/PromoCard';
const service = 'http://localhost:3000/ServiceCase';
const sales = 'http://localhost:3000/SalesCase';
const experience = 'http://localhost:3000/ExperienceCase';

export const getPromoCard = async () => {
    return await axios.get(`${http}`);
}

export const getServiceCase = async () => {
    return await axios.get(`${service}`);
}
export const getSalesCase = async () => {
    return await axios.get(`${sales}`);
}
export const getExperienceCase = async () => {
    return await axios.get(`${experience}`);
}


