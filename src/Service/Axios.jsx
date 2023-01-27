import axios from "axios";

const http = 'http://localhost:3000/PromoCard';

export const getPromoCard = async () => {
    return await axios.get(`${http}`);
}


