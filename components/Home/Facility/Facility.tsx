import Image from "next/image";
import React from "react";
import Heading from "@Heading/Heading";

interface FacilityProps {
	heading: string;
	text: string;
	image: string;
}

export const Facility = ({ heading, text, image }: FacilityProps) => {
	return (
		<div className="flex gap-4 items-center">
			<Image src={image} alt={heading} />
			<div>
				<Heading variant="hero-tertiary">{heading}</Heading>
				<p className="text-base">{text}</p>
			</div>
		</div>
	);
};
