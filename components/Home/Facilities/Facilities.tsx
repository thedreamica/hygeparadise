import React from "react";
import Heading from "@Heading/Heading";
import Facility from "@Home/Facility";

import magicalCafeterial from "@public/facilities/magical-cafetaria.svg";
import purifyingPlunge from "@public/facilities/purifying-plunge.svg";
import euphoricAirCondition from "@public/facilities/euphoric-air-conditioning.svg";

export const Facilities = () => {
  return (
    <div className="hidden lg:flex flex-col absolute bottom-12 w-full items-center gap-4">
      <Heading variant="hero-secondary">Enchanted Facilities</Heading>
      <hr className="w-10 border-2 rounded-ful border-primary" />
      <div className="flex w-full px-10 gap-6 text-white">
        <Facility
          heading="Magical Cafetaria"
          text="Indulge in delightful treats, surrounded by whimsical decor, creating an tunforgetable magical experience."
          image={magicalCafeterial}
        />
        <Facility
          heading="Euphoric Air Conditioning"
          text="Experience euphoric comfort with our divine air conditioning. Pure bliss for all seasons."
          image={purifyingPlunge}
        />
        <Facility
          heading="Purifying Plunge"
          text="Embark on a purifying plunge for your cherished garments at our divine laundry service."
          image={euphoricAirCondition}
        />
      </div>
    </div>
  );
};
