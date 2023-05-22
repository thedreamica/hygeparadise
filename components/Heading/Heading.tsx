import { useMemo } from "react";
import type { ReactNode } from "react";
import React from "react";

interface HeadingProps {
	children: ReactNode;
	variant?: string;
}

const Heading = ({ children, variant }: HeadingProps) => {
	const headingClasses = useMemo(() => {
		let className = `text-white  font-bold  `;
		if (variant === "hero") {
			className += "text-3xl uppercase tracking-[0.25em] lg:text-6xl md:text-5xl";
		} else if (variant === "room-type-heading" || variant === "input-label") {
			className += "text-sm uppercase tracking-[0.10em]";
		} else if (variant === "hero-secondary") {
			className += "text-3xl";
		} else if (variant === "hero-tertiary") {
			className += "text-lg";
		} else {
			className += "text-center uppercase text-xl md:text-3xl tracking-[0.25em]";
		}
		return className;
	}, [variant]);

	if (variant === "room-type-heading" || variant === "hero-tertiary") {
		return <h3 className={headingClasses}>{children}</h3>;
	} else if (variant === "hero-secondary") {
		return <h2 className={headingClasses}>{children}</h2>;
	} else if (variant === "input-label") {
		return <label className={headingClasses}>{children}</label>;
	} else {
		return <h1 className={headingClasses}>{children}</h1>;
	}
};

export default Heading;
