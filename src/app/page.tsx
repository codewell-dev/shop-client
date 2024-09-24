'use client'

import AboutUs from "./about-us";
import CategoryFilter from "./category-filter";
import Section from "./section";
import Team from "./team";
import { ScissorsIcon, HeartIcon } from '@heroicons/react/20/solid'
import ProductsList from "./products-list";
import Image from "next/image";
import BoxSection from "./box-section";
import ButtonBlue from "./button-blue";

export default function Home() {
  return (
    <div className="">
      <Section />
      <div className="w-2/4 mx-auto">
        <BoxSection
          center={true}
          title={"BROWSE OUR PRODUCTS"}
          text={"We offer a carefully curated selection of premium grooming products to help keep you looking and feeling your best. From hair care products to shaving supplies, we've got everything you need to maintain your style."}
        />
      </div>

      <ProductsList />

      <div className="making max-w-7xl flex justify-center items-center mx-auto gap-16">
        <div className="making__image">
          <img src="https://static.wixstatic.com/media/d1468f_e4ad5d6b33034a8bbfabeb03dbb8f86b~mv2.jpg/v1/fill/w_1066,h_920,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d1468f_e4ad5d6b33034a8bbfabeb03dbb8f86b~mv2.jpg" className="w-2/1" alt="" />
        </div>
        <div className="making__content w-4/6">
          <BoxSection
            title="MAKING OUR CUSTOMERS HAPPY"
            text="We offer a wide range of premium grooming services for all genders, from classic haircuts to stylish fades, our experienced barbers are here to provide you with a personalized experience."
          />
          <div className="making__statistics-items flex gap-16 mt-4 mb-6">
            <div className="making__statistics-item">
              <div className="flex items-center font-extrabold">
                <h3 className="text-7xl">99</h3>
                <h4 className="text-7xl color-blue">%</h4>
              </div>
              <p className="font-semibold">CUSTOMER SATISFACTION</p>
            </div>

            <div className="making__statistics-item">
              <div className="flex items-center font-extrabold">
                <h3 className="text-7xl">16</h3>
                <h4 className="text-7xl color-blue">Y+</h4>
              </div>
              <p className="font-semibold">YEARS OF EXPERIENCE</p>
            </div>
          </div>
          <ButtonBlue text="Learn About Us" color={true} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-40">
        <BoxSection
          title="MAKING OUR CUSTOMERS HAPPY"
          text="We offer a wide range of premium grooming services for all genders, from classic haircuts to stylish fades, our experienced barbers are here to provide you with a personalized experience."
        />
        <ButtonBlue text="BOOK AN APPOINTMENT" color={true} />
      </div>
      <div className=" max-w-7xl mx-auto grid grid-cols-1 gap-2 mt-14 md:grid-cols-4">
      <img src="https://static.wixstatic.com/media/d1468f_2d09309f89224645b1c7e855a6911ba6~mv2.png/v1/fill/w_644,h_642,q_90/d1468f_2d09309f89224645b1c7e855a6911ba6~mv2.webp"
        alt=""
        />
        <img src="https://static.wixstatic.com/media/d1468f_cbce093fda814374aff78ab26798c2dc~mv2.jpg/v1/fill/w_1326,h_1326,q_90/d1468f_cbce093fda814374aff78ab26798c2dc~mv2.webp"
          className="col-span-1 row-span-1 bg-slate-700 md:col-span-2 md:row-span-2"
          alt="images"
        />
        <img src="https://static.wixstatic.com/media/d1468f_087c75b027594a44a08e7e708d3c4876~mv2.jpg/v1/fill/w_644,h_644,q_90/d1468f_087c75b027594a44a08e7e708d3c4876~mv2.webp"
        alt=""
        />
        <img src="https://static.wixstatic.com/media/d1468f_5497eb206d084159a412402f1d6656c1~mv2.png/v1/fill/w_578,h_578,q_90/d1468f_5497eb206d084159a412402f1d6656c1~mv2.webp"
        alt="" 
        />
        <img src="https://static.wixstatic.com/media/d1468f_c592c400b9974e10ab66ba4acbaff684~mv2.jpg/v1/fill/w_578,h_580,q_90/d1468f_c592c400b9974e10ab66ba4acbaff684~mv2.webp"
        alt=""
        />
      </div>
    </div>
  );
}


