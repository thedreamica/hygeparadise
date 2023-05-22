import { useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";

import Heading from "@Heading/Heading";
import Caraousel from "@Room/Caraousel";
import Detail from "@Room/Detail";
import Description from "@Room/Description";
import Facilities from "@Room/Facilities";

import standardImage1 from "@public/rooms/standard-1.jpg";
import standardImage2 from "@public/rooms/standard-2.jpg";
import standardImage3 from "@public/rooms/standard-3.jpg";
import standardImage4 from "@public/rooms/standard-4.jpg";
import standardImage5 from "@public/rooms/standard-5.jpg";
import standardImage6 from "@public/rooms/standard-6.jpg";
import deluxeImage1 from "@public/rooms/deluxe-1.jpg";
import deluxeImage2 from "@public/rooms/deluxe-2.jpg";
import deluxeImage3 from "@public/rooms/deluxe-3.jpg";
import deluxeImage4 from "@public/rooms/deluxe-4.jpg";
import deluxeImage5 from "@public/rooms/deluxe-5.jpg";
import deluxeImage6 from "@public/rooms/deluxe-6.jpg";

export default function ViewRoom() {
	const router = useRouter();

	const images = useMemo(() => {
		if (router.query?.room === "Standard Non-AC Rooms") {
			return [
				standardImage1,
				standardImage2,
				standardImage3,
				standardImage4,
				standardImage5,
				standardImage6,
			];
		} else if (router.query?.room === "Deluxe AC Rooms") {
			return [
				deluxeImage1,
				deluxeImage2,
				deluxeImage3,
				deluxeImage4,
				deluxeImage5,
				deluxeImage6,
			];
		} else {
			return [];
		}
	}, [router.query]);

	const description = useMemo(() => {
		if (router.query?.room === "Standard Non-AC Rooms") {
			return (
				<>
					<p>
						Our standard non-AC room is a budget-friendly option for those looking for a
						comfortable yet economical stay. These rooms are equipped with essential
						amenities such as a comfortable bed, clean linens, a private bathroom with
						basic toiletries, and a television. The absence of an air conditioner makes
						these rooms ideal for those who do not require a cooler environment,
						especially during the cooler months.
					</p>
					<p>
						The decor is simple yet tasteful and divine, making the space cozy and
						inviting. Standard non-AC rooms are ideal for those who prefer to spend
						their time outside exploring the surroundings and need a clean and
						comfortable place to rest and refresh.
					</p>
				</>
			);
		} else if (router.query?.room === "Deluxe AC Rooms") {
			return (
				<>
					<p>
						Our Deluxe AC Room with a divine motif is a luxurious retreat that embodies
						serenity and comfort. The room features stylish furnishings, high-quality
						amenities, and breathtaking views of the surrounding nature. The divine
						motif adds a touch of elegance and sophistication to the overall ambiance.
						Sink into the plush bedding and relish the cool air provided by the
						air-conditioning.
					</p>
					<p>
						The room is equipped with a flat-screen TV, high-speed Wi-Fi, a spacious
						closet, and an en-suite bathroom with premium toiletries. Unwind in the
						peaceful environment and experience a truly rejuvenating stay in our Deluxe
						AC Room with a divine motif.
					</p>
				</>
			);
		} else {
			return <></>;
		}
	}, [router.query]);

	return (
		<>
			<Head>
				<title>{router.query?.room} | Hyge Paradise</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<Heading>{router.query?.room}</Heading>
			<div className="flex flex-col items-center gap-8 mt-8 lg:max-w-[1024px]">
				<Caraousel images={images} />
				<Detail />
				<div className="flex flex-col-reverse md:flex-row gap-8 w-full">
					<Description description={description} />
					<Facilities />
				</div>
			</div>
		</>
	);
}