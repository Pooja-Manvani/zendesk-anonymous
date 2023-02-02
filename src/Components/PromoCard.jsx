import React, { useEffect, useState } from "react";
import { getPromoCard } from "../Service/Axios.jsx";
import superImg from "../assets/images/Star.webp";

export default function PromoCard() {
  const [PromoData, setPromoData] = useState([]);
  useEffect(() => {
    getPromoData();
  }, []);
  const getPromoData = async () => {
    const response = await getPromoCard();
    return setPromoData(response.data);
  };

  return PromoData.map((data) => (
    <div
      key={data.id}
      className={
        "Promo-Card-container m-3 p-4 d-flex flex-column justify-content-between position-relative" +' '+ (data.id === 1 ? 'box-green': data.id === 2 ? 'box-blue' : 'box-orange')
      }
    >
      <div>
        <div className="pb-4">
          <h6 className="fw-bold text-bottleGreen overflow-hidden text-truncate">
            {" "}
            {data.title}{" "}
          </h6>
          <h4 className="fw-bold text-bottleGreen overflow-hidden text-wrap">
            {" "}
            {data.subtitle}{" "}
          </h4>
        </div>
        <div className="pb-2">
          <p className="small overflow-hidden text-wrap">{data.detail}</p>
        </div>
      </div>

      <div className="py-xl-3">
        <a className="card-item text-bottleGreen fw-bold overflow-hidden text-truncate cursor-pointer">
          {" "}
          {data.linktext}{" "}
        </a>
        <span className="fw-lighter icon-arrow-right cursor-pointer" ></span>
      </div>
      {data.id === 3 && (
        <img src={superImg} alt="" className="promo-sticker"></img>
      )}
    </div>
  ));
}
