import React from "react";

import { CircleUser } from "@styled-icons/fa-regular/CircleUser";
import Button from "@Button/Button";

export const Detail = () => {
	return (
		<div className="flex flex-col md:flex-row gap-4 items-center justify-between md:justify-between border-[0.5px] border-slate-400 w-full p-4">
			<div className="text-white flex w-full justify-evenly md:justify-between md:flex-1">
				<div>
					<CircleUser width={16} height={16} /> 2 Guests
				</div>
				<div>
					<CircleUser width={16} height={16} /> 2 Guests
				</div>
			</div>
			<Button href="booking" className="md:flex-1 md:justify-end">
				Book Now
			</Button>
		</div>
	);
};
