import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./carouselIndicator";
import useEmblaCarousel from "embla-carousel-react";
import CarouselCard from "./carousel-card";
import Button from "../button/button";
import ProfileCard from "./profile-card";

import { CAROUSELS_DATA, CarouselsData, CompanySlide, ProfileSlide, EventSlide } from "../../mockData/carousels";
import EventCard from "./event-card";

type PropType = {
	slidesData: string;
	carouselType: string;
	slidesInView: number;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slidesData, carouselType, slidesInView } = props;
	const OPTIONS: EmblaOptionsType = { align: "start", dragFree: true };
	let SLIDE_COUNT;

	if (slidesData in CAROUSELS_DATA) {
		SLIDE_COUNT = CAROUSELS_DATA[slidesData as keyof CarouselsData].length;
	} else {
		console.error("Invalid key:", slidesData);
	}
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

	const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

	const slideClasses = slidesInView === 1 ? `flex-[0_0_66%]` : `flex-[0_0_28%]`;

	return (
		<section className="mx-auto">
			<div
				className="overflow-hidden"
				ref={emblaRef}>
				<div className="flex ml-[-3rem]">
					{SLIDES.map((index) => {
						const data = CAROUSELS_DATA[slidesData as keyof CarouselsData][index];

						return (
							<div
								className={`${slideClasses} pl-[3rem] min-w-0 translate-z-0`}
								key={index}>
								{carouselType === "COMPANIES" && (
									<CarouselCard
										imgUrl={(data as CompanySlide).imgUrl} // Narrow the type to CompanySlide
										companyLogo={(data as CompanySlide).companyLogo}
										companyName={(data as CompanySlide).companyName}
										category={(data as CompanySlide).category}
									/>
								)}

								{carouselType === "PROFILES" && (
									<ProfileCard
										name={(data as ProfileSlide).name} // Narrow the type to ProfileSlide
										designation={(data as ProfileSlide).designation}
										avatarUrl={(data as ProfileSlide).avatarUrl}
										hasBadge={(data as ProfileSlide).hasBadge}
									/>
								)}

								{carouselType === "EVENTS" && (
									<EventCard
										eventData={(data as EventSlide).eventData} // Narrow the type to EventSlide
										eventName={(data as EventSlide).eventName}
										eventTagLine={(data as EventSlide).eventTagLine}
										eventDescription={(data as EventSlide).eventDescription}
										eventAudience={(data as EventSlide).eventAudience}
									/>
								)}
							</div>
						);
					})}
				</div>
			</div>

			{/* Embla Dots */}
			<div className="mt-60">
				<div className="flex flex-wrap justify-end items-center w-full pr-70">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							style={{
								width: `calc(100% / ${scrollSnaps.length})`,
							}}
							className={`w-[calc(100%/${
								scrollSnaps.length
							})] h-[2px] flex items-center justify-center cursor-pointer ${
								index === selectedIndex
									? "shadow-inner border-2 border-primary-lightGreen1"
									: "bg-transparent shadow-inner border-2 border-primary-lightGreen4"
							}`}
						/>
					))}
				</div>
			</div>

			<Button
				classes="mt-30"
				variant="primary">
				Show All
			</Button>
		</section>
	);
};

export default EmblaCarousel;
