import React from "react";

import Heading from "@Heading/Heading";
import { Cross } from "@styled-icons/entypo/Cross";

interface PopupProps {
  show?: boolean;
  close: Function;
}

export const Popup = ({ show, close }: PopupProps) => {
  return (
    <>
      {show && (
        <div className="fixed m-2 h-[90%] px-4 top-4 md:px-16 lg:px-32 flex flex-col gap-4 justify-center items-center bg-black bg-opacity-90 z-50 text-white text-center">
          <Heading variant="hero">Thank You</Heading>
          <div>
            <p>
              Invoice will be sent to your <b>Email &amp; Phone</b>
            </p>
            <p>
              We Request you to reach your room <b>2 hours</b> before check-in
              time
            </p>
          </div>
          <div className="hidden absolute bottom-2 right-2">
            <h3>Contact</h3>
            <p>+91 709-222-0001</p>
            <p>admin@hygeparadise.com</p>
          </div>
          <Cross
            width={32}
            height={32}
            color="white"
            className="absolute z-10 right-2 top-7"
            onClick={() => close()}
          />
        </div>
      )}
    </>
  );
};
