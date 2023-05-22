import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import React from "react";

import CaraouselCircles from "@CaraouselCircles/CaraouselCircles";

export const Caraousel = () => {
	const data = useMemo(
		() => [
			"Our paradise inn is conveniently located within a walkable distance of 5 to 10 minutes from the temple",
			"Paradise Inn is situated in close proximity to Shiridi Temple, just 1 kilometer away.",
			"Some of the places worth visiting include Shani Shignapur, Old Shiridi, and the Sai Devotional Temple.",
		],
		[]
	);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(previousIndex => (previousIndex + 1) % data.length);
		}, 2000);
		return () => clearInterval(interval);
	}, [data]);

	return (
		<div className="hidden lg:block w-full py-10 px-16 bg-white bg-opacity-80 text-center max-w-lg rounded-xl">
			<AnimatePresence>
				<LayoutGroup>
					<motion.div
						transition={{
							ease: "easeInOut",
						}}
						key={currentIndex}
						className="mb-8"
					>
						<p className="font-bold mb-4 uppercase">Did you know?</p>
						<p className="italic h-16">{`“${data[currentIndex]}”`}</p>
					</motion.div>
				</LayoutGroup>
			</AnimatePresence>
			<CaraouselCircles
				length={data.length}
				active={currentIndex}
				className="flex justify-center gap-2"
				variant="tertiary"
			/>
		</div>
	);
};
