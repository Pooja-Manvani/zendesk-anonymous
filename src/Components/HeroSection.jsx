import React from "react";
import { useRef } from "react";

export default function HeroSection() {
  
  return (
    <div className="heroContainer container-xl p-5 ">
      <div className="row d-flex text-white">
        <div className="p-2 p-lg-5 py-lg-0 col-12 col-lg-7 align-self-center flex-grow-1">
          <h1 className="hero-title-font">
            <span className="text-champions"></span>
          </h1>

          <div className="">
            <div className="d-flex">
              <h1 className="hero-title-font ">
                <span className="text-of"></span>{" "}
              </h1>
              <div className="  ms-3">
                <h1 className="hero-title-font">
                  {/* <span className="text-roller-up">
                      <span className="border-3 border-bottom border-white mb-3">customer</span>
                      <span className="border-3 border-bottom border-white mb-3">no-hassle</span>
                      <span className="border-3 border-bottom border-white mb-3">not waiting on</span>
                      <span className="border-3 border-bottom border-white mb-3">social</span>
                      <span className="border-3 border-bottom border-white mb-3">extra sauce</span>
                      <span className="border-3 border-bottom border-white mb-3">actually having </span>
                  </span> */}
                  <span className="text-roller-up">
                    <span >
                      <span>customer</span>
                    </span>
                    <span>
                      <span>no-hassle</span>
                    </span>
                    <span>
                      <span>not waiting on</span>
                    </span>
                    <span>
                      <span>social</span>
                    </span>
                    <span>
                      <span>extra sauce</span>
                    </span>
                    <span>
                      <span>actually having </span>
                    </span>
                  </span>
            
                </h1>
              </div>
            </div>
            <div>
              <h1 className="hero-title-font border-bottom-3 border-white">
                <span className=" text-roller-up">
                <span>
                      <span >service</span>
                    </span>
                    <span>
                      <span>returns</span>
                    </span>
                    <span>
                      <span>hold forever</span>
                    </span>
                    <span>
                      <span>messaging </span>
                    </span>
                    <span>
                      <span>on the side </span>
                    </span>
                    <span>
                      <span >a nice day </span>
                    </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="p-2 p-lg-5 col-12 col-lg-5 align-align-items-center">
          <p className="p-2 fw-500 fs-5">
            Zendesk makes customer service better. We build software to meet
            customer needs, set your team up for success, and keep your business
            in sync.
          </p>
          <div className="d-lg-flex">
            <button className="btn-background btn btn-outline-light   my-4 my-lg-0 mx-lg-2 px-4 py-2 rounded-0 fw-bold border border-2">
              Free Trial
            </button>
            <button className="btn-custom-outline btn btn-outline-light  rounded-0 px-3 py-2 mx-lg-2 fw-bold border border-2 ">
              View demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
