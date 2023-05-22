import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Heading from "@Heading/Heading";
import Button from "@Button/Button";

import CaraouselCircles from "@CaraouselCircles/CaraouselCircles";

export interface CaraouselData {
	title: String;
	image: String;
}

interface CaraouselProps {
	caraouselData: CaraouselData[];
}

export const Caraousel = ({ caraouselData }: CaraouselProps) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(previousIndex => (previousIndex + 1) % caraouselData.length);
		}, 4000);
		return () => clearInterval(interval);
	}, [caraouselData]);

	return (
		<>
			<AnimatePresence>
				<motion.div
					style={{
						background: `url('${caraouselData[currentIndex].image}') center center / cover no-repeat, linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))`,
						backgroundBlendMode: "overlay",
					}}
					initial={{
						opacity: 0,
						x: -200,
					}}
					exit={{ opacity: 0, x: 200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 1,
						ease: "easeInOut",
					}}
					key={currentIndex}
					className={`absolute top-0 left-0 right-0 bottom-0 flex flex-col h-full justify-center items-center lg:justify-start lg:pt-52 gap-4`}
				>
					<Heading variant="hero">{caraouselData[currentIndex].title}</Heading>
					<Button variant="secondary" href="choose-room">
						{caraouselData[currentIndex].title === "Paradise"
							? "Explore More"
							: "Choose Room"}
					</Button>
				</motion.div>
			</AnimatePresence>
			<CaraouselCircles
				className="absolute bottom-8 lg:bottom-72 w-full flex gap-4 justify-center"
				length={caraouselData.length}
				active={currentIndex}
			/>
		</>
	);
};
