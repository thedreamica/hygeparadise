import Link from "next/link";
import React from "react";
import Image from "next/image";
import type { RoomTypeData } from "@RoomTypes/RoomTypes";

import Heading from "@Heading/Heading";

import { CircleUser } from "@styled-icons/fa-regular/CircleUser";

interface RoomTypeProps {
	room: RoomTypeData;
}

export const RoomType = ({ room }: RoomTypeProps) => {
	return (
		<Link
			href={{ pathname: "/view-room", query: { room: room.title } }}
			className="bg-gradient-to-b from-black to-transparent max-w-[500px]"
		>
			<div className="relative">
				<Image src={room.image} alt={room.title} />
				<div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white px-4 py-2">
					<CircleUser width={16} height={16} /> {room.guests} Guests
				</div>
			</div>
			<div className="p-4 flex flex-col gap-2">
				<Heading variant="room-type-heading">{room.title}</Heading>
				<p className="text-white text-sm">{room.detail}</p>
			</div>
		</Link>
	);
};
