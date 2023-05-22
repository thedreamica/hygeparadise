import type { ReactNode } from "react";

import Heading from "@Heading/Heading";

interface DescriptionProps {
	description: ReactNode;
}

export const Description = ({ description }: DescriptionProps) => {
	return (
		<div className="flex-1 flex flex-col gap-2">
			<Heading variant="room-type-heading">Room Overview</Heading>
			<div className="text-white text-sm flex flex-col gap-2">{description}</div>
		</div>
	);
};
