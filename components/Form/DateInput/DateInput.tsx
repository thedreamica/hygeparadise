import type { MouseEventHandler, ChangeEventHandler, LegacyRef, ChangeEvent, MouseEvent } from "react";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { ArrowDropDownCircle } from "@styled-icons/material/ArrowDropDownCircle";
import "react-datepicker/dist/react-datepicker.css";

import Heading from "@Heading/Heading";

interface DateProps {
  label: string;
}

export const DateInput = ({ label }: DateProps) => {
  const [date, setDate] = useState(new Date());

  const CustomInput = forwardRef(
    (
      {
        value,
        onClick,
        onChange,
      }: any,
      ref: LegacyRef<HTMLInputElement>
    ) => (
      <div className="flex items-center">
        <input
          value={value}
          onClick={onClick}
          onChange={onChange}
          ref={ref}
        ></input>
        <ArrowDropDownCircle
          width={24}
          height={24}
          className="text-white relative right-[28%] lg:right-[24%]"
        />
      </div>
    )
  );

  CustomInput.displayName = 'CustomInput'

  return (
    <div className="flex flex-col gap-2 text-center items-center h-[72px] w-full">
      <Heading variant="input-label">{label}</Heading>
      <DatePicker
        wrapperClassName="datePicker"
        selected={date}
        onChange={(date: Date) => setDate(date)}
        dateFormat="dd MMM"
        customInput={<CustomInput value={undefined} onClick={function (event: MouseEvent<HTMLInputElement, MouseEvent>): null {
			throw new Error("Function not implemented.");
		} } onChange={function (event: ChangeEvent<HTMLInputElement>): null {
			throw new Error("Function not implemented.");
		} } />}
        popperClassName="datePickerPopper"
        id={label}
      />
    </div>
  );
};
