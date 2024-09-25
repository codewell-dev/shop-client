'use client'
import Section from "./components/section";
import ProductsList from "./components/products-list";
import BoxSection from "./components/box-section";
import ButtonBlue from "./components/button-blue";
import Gallery from "./components/gallery";
import StatisticItems from "./components/statistic-items";

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
          <StatisticItems />
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
      <Gallery />
      <div className="max-w-7xl mx-auto mt-40">
        <BoxSection
          title="FOLLOW US ON INSTA"
          text="Stay up-to-date with our latest styles, products, and events by following us on Instagram. We can't wait to connect with you!"
          center={true}
        />
      </div>
    </div>
  );
}


