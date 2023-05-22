import type { ReactNode } from "react";
import { useState, useEffect } from "react";

import discoverImage from "@public/hero-images/discover.jpg";
import Footer from "@Footer/Footer";
import Social from "@Social/Social";

interface ContainerProps {
	children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		if (window.innerWidth >= 1024) {
			setIsExpanded(true);
		} else {
			setIsExpanded(false);
		}
	});

	return (
		<main
			className="w-full pt-24 lg:pt-36 px-4 pb-4 min-h-screen overflow-hidden flex flex-col items-center relative"
			style={{
				background: `url('${discoverImage.src}') center center / cover no-repeat, linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7))`,
				backgroundBlendMode: "overlay",
			}}
		>
			{children}
			<Footer />
			{isExpanded && <Social variant="secondary" />}
		</main>
	);
};

export default Container;
