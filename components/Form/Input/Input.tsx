import { useMemo } from "react";

import { ChevronDown } from "@styled-icons/bootstrap/ChevronDown";

interface InputProps {
	select?: Array<{
		label: string;
		value: string;
	}>;
	label: string;
	type?: string;
}

export const Input = ({ select, label, type }: InputProps) => {
	const inputClasses = useMemo(
		() =>
			`bg-transparent text-[#D1D1D1] placeholder:text-[#D1D1D1] w-full border-2 border-[#9F9D9B] p-2 outline-none rounded-xl`,
		[]
	);

	const optionClasses = useMemo(() => `bg-black text-white`, []);

	return (
		<>
			{select ? (
				<div className="w-full relative">
					<select defaultValue="" className={`${inputClasses} appearance-none`}>
						<option value="" disabled className={optionClasses}>
							{label}
						</option>
						{select.map(option => (
							<option
								key={option.value}
								value={option.value}
								className={optionClasses}
							>
								{option.label}
							</option>
						))}
					</select>
					<ChevronDown
						width={24}
						height={24}
						color="white"
						className="absolute right-4 top-2 pointer-events-none"
					/>
				</div>
			) : (
				<input type={type ? type : "text"} placeholder={label} className={inputClasses} />
			)}
		</>
	);
};
