'use client'

import AboutUs from "./about-us";
import CategoryFilter from "./category-filter";
import Section from "./section";
import Team from "./team";
import { ScissorsIcon } from '@heroicons/react/20/solid'

export default function Home() {
  return (
    <div className="">
      {/* <CategoryFilter /> */}
      <Section />
      {/* <Team /> */}
      <div className="flex items-center justify-center mt-20">
        <hr className="w-14 border-black border-1" />
        <ScissorsIcon className="w-8 h-8 -rotate-90" />
        <hr className="w-14 border-black border-1" />
      </div>
      <h5 className="text-4xl text-center mt-5 font-semibold">BROWSE OUR SERVICES</h5>
      <p className="text-center mx-auto w-96 mt-5">
      We offer a wide range of premium grooming services for all genders, from classic haircuts to stylish fades, our experienced barbers are here to provide you with a personalized experience.
      </p>

    </div>
  );
}


