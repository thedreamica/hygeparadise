import React from "react";

import Heading from "@Heading/Heading";
import { Check2 } from "@styled-icons/bootstrap/Check2";

export const Facilities = () => {
	const facilities = [
		"Charging Points",
		"Seating Area",
		"Mirror",
		"Hangers",
		"Intercom",
		'48" HD TV with more than 60 channels',
		"Hight quality bed sheets",
	];
	return (
		<div className="flex flex-col gap-2">
			<Heading variant="room-type-heading">Room Facilities</Heading>
			<ul className="text-white text-sm flex flex-col gap-2">
				{facilities.map(facility => (
					<li key={facility} className="flex gap-2">
						<Check2 width={16} height={16} className="text-primary" /> {facility}
					</li>
				))}
			</ul>
		</div>
	);
};
