import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import CaraouselCircles from "@CaraouselCircles/CaraouselCircles";
import { ChevronLeft } from "@styled-icons/bootstrap/ChevronLeft";
import { ChevronRight } from "@styled-icons/bootstrap/ChevronRight";

interface CaraouselProps {
  images: StaticImageData[];
}

export const Caraousel = ({ images }: CaraouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  });

  const length = isExpanded ? images.length / 3 : images.length;

  return (
    <div className="w-full">
      <div className="relative">
        <div
          className="absolute top-0 left-0 flex items-center h-full"
          onClick={() =>
            setCurrentIndex(
              (previousIndex) =>
                (((previousIndex - 1) % length) + length) % length
            )
          }
        >
          <ChevronLeft width={48} className="cursor-pointer" />
        </div>
        <div className="flex flex-row gap-4 justify-center">
          {isExpanded ? (
            <>
              <Image
                src={images[currentIndex]}
                alt="Room Image"
                className="w-full h-[300px] lg:max-w-[330px]"
                style={{ objectFit: "cover" }}
              />
              <Image
                src={images[currentIndex + 1]}
                alt="Room Image"
                className="w-full h-[300px] lg:max-w-[330px]"
                style={{ objectFit: "cover" }}
              />
              <Image
                src={images[currentIndex + 2]}
                alt="Room Image"
                className="w-full h-[300px] lg:max-w-[330px]"
                style={{ objectFit: "cover" }}
              />
            </>
          ) : (
            <Image
              src={images[currentIndex]}
              alt="Room Image"
              className="w-full h-[300px] lg:max-w-[330px]"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div
          className="absolute top-0 right-0 flex items-center h-full"
          onClick={() =>
            setCurrentIndex(
              (previousIndex) =>
                (((previousIndex + 1) % length) + length) % length
            )
          }
        >
          <ChevronRight width={48} className="cursor-pointer" />
        </div>
      </div>
      <CaraouselCircles
        length={length}
        active={currentIndex}
        className="flex justify-center gap-2 mt-4"
        variant="secondary"
      />
    </div>
  );
};
