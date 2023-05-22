import type { MouseEventHandler, ChangeEventHandler, LegacyRef } from "react";
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
			}: {
				value: string | number | readonly string[] | undefined;
				onClick: MouseEventHandler<HTMLInputElement>;
				onChange: ChangeEventHandler<HTMLInputElement>;
			},
			ref: LegacyRef<HTMLInputElement>
		) => (
			<div className="flex items-center">
				<input value={value} onClick={onClick} onChange={onChange} ref={ref}></input>
				<ArrowDropDownCircle
					width={24}
					height={24}
					className="text-white relative right-[28%] lg:right-[24%]"
				/>
			</div>
		)
	);

	return (
		<div className="flex flex-col gap-2 text-center items-center h-[72px] w-full">
			<Heading variant="input-label">{label}</Heading>
			<DatePicker
				wrapperClassName="datePicker"
				selected={date}
				onChange={(date: Date) => setDate(date)}
				dateFormat="dd MMM"
				customInput={<CustomInput />}
				popperClassName="datePickerPopper"
				id={label}
			/>
		</div>
	);
};
