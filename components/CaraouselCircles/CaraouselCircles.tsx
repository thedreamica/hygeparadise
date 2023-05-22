import { useMemo } from "react";
import { Circle } from "@styled-icons/entypo/Circle";
import { Circle as CircleFilled } from "@styled-icons/fluentui-system-filled/Circle";
import React from "react";

interface CaraouselCirclesProps {
	className?: string;
	length: number;
	active: number;
	variant: string;
}

const CaraouselCircles = ({ className, length, active, variant }: CaraouselCirclesProps) => {
	const circles = useMemo(() => {
		let circleIcons = [];
		for (let i = 0; i < length; i++) {
			if (i === active) {
				if (variant === "secondary") {
					circleIcons.push(<CircleFilled key={i} width={8} height={8} color="#FFCC00" />);
				} else if (variant === "tertiary") {
					circleIcons.push(<CircleFilled key={i} width={8} height={8} color="#FFCC00" />);
				} else {
					circleIcons.push(<CircleFilled key={i} width={12} height={12} color="white" />);
				}
			} else {
				if (variant === "secondary") {
					circleIcons.push(<CircleFilled key={i} width={8} height={8} color="#d9d9d9" />);
				} else if (variant === "tertiary") {
					circleIcons.push(<CircleFilled key={i} width={8} height={8} color="#000000" />);
				} else {
					circleIcons.push(<Circle key={i} width={12} height={12} color="white" />);
				}
			}
		}
		return circleIcons;
	}, [length, active]);

	return <div className={className}>{circles}</div>;
};

export default CaraouselCircles;
