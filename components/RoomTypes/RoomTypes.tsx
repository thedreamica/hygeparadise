import { useMemo } from "react";
import type { StaticImageData } from "next/image";
import React from "react";

import Heading from "@Heading/Heading";
import RoomType from "./RoomType";

import standardImage from "@public/rooms/standard.jpg";
import deluxeImage from "@public/rooms/deluxe.jpg";

export interface RoomTypeData {
	image: StaticImageData;
	guests: number;
	title: string;
	detail: string;
}

const RoomTypes = () => {
	const roomTypes: RoomTypeData[] = useMemo(
		() => [
			{
				image: standardImage,
				guests: 5,
				title: "Standard Non-AC Rooms",
				detail: "Most hotesls are mmajor in natureMost hotesls are mmajor Most hotesls are mmajor in nature",
			},
			{
				image: deluxeImage,
				guests: 5,
				title: "Deluxe AC Rooms",
				detail: "Most hotesls are mmajor in natureMost hotesls are mmajor Most hotesls are mmajor in nature",
			},
		],
		[]
	);

	return (
		<div className="">
			<Heading>Select Room Type</Heading>
			<div className="flex flex-col gap-8 mt-8 items-center lg:flex-row lg:justify-center lg:gap-16">
				{roomTypes.map(room => (
					<RoomType key={room.title} room={room} />
				))}
			</div>
		</div>
	);
};

export default RoomTypes;
