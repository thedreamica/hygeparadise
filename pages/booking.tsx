import { useState } from "react";
import Head from "next/head";

import Heading from "@Heading/Heading";
import DateInput from "@Form/DateInput";
import Guest from "@Form/Guest";
import Input from "@Form/Input";
import TextArea from "@Form/TextArea";
import Button from "@Button/Button";
import Popup from "@Booking/PopUp";
import Caraousel from "@Booking/Caraousel";

export default function Booking() {
  const [showStatus, setShowStatus] = useState(false);

  return (
    <>
      <Head>
        <title>Book | Hyge Paradise</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="lg:max-w-[1024px]">
        <Heading>Booking</Heading>
        <form className="mt-8 flex flex-col gap-8 items-center">
          <div className="lg:flex">
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-y-8">
              <DateInput label="Check In" />
              <DateInput label="Check Out" />
              <Guest label="Adult" intialCount={2} />
              <Guest label="Children" intialCount={0} />
            </div>
            <Caraousel />
          </div>
          <div className="flex flex-col md:flex-row md:items-stretch gap-4 items-center w-full">
            <div className="flex flex-col gap-4 w-full">
              <Input
                label="Select your room"
                select={[
                  {
                    label: "Standard Room",
                    value: "standard-room",
                  },
                  {
                    label: "Standard Double Room",
                    value: "standard-double-room",
                  },
                  {
                    label: "Deluxe Room",
                    value: "deluxe-room",
                  },
                  {
                    label: "Deluxe King Room",
                    value: "deluxe-king-room",
                  },
                  {
                    label: "Comfort Family Room",
                    value: "comfort-family-room",
                  },
                ]}
              />
              <Input label="Your Name" />
              <Input label="Your Email" type="email" />
              <Input label="Your Phone" />
            </div>
            <TextArea label="Your message" />
          </div>
          <Button
            className="text-center"
            buttonClassName="md:min-w-full md:w-36"
            onClick={(e) => {
              e.preventDefault();
              setShowStatus(true);
            }}
          >
            Confirm
          </Button>
        </form>
      </div>
      <Popup show={showStatus} close={() => setShowStatus(false)} />
    </>
  );
}
