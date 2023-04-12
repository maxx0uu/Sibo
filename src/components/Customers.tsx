import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/types";
import { TestimonialDocument } from "../../.slicemachine/prismicio";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CustomersProps {
	title: RichTextField;
	testimonialsData: TestimonialDocument<string>[];
}

export const Customers = ({ title, testimonialsData }: CustomersProps) => {
	const [isMobile, setIsMobile] = useState(true);

	const updateMedia = () => {
		setIsMobile(
			typeof window !== "undefined" ? window.innerWidth > 768 : false
		);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	return (
		<>
			<section className="bg-my-black text-white py-16">
				<div className="px-6 max-w-4xl mx-auto">
					<div className="pb-10 md:w-3/5">
						<PrismicRichText field={title} />
					</div>
					<Swiper
						modules={[Pagination, Navigation, Autoplay]}
						spaceBetween={48}
						slidesPerView={1}
						loop
						navigation={isMobile ? true : false}
						autoplay={{ delay: 5000 }}
						pagination={{ clickable: true }}
					>
						{testimonialsData.map(
							(testimonial: TestimonialDocument, key: number) => {
								return (
									<SwiperSlide
										key={testimonial.uid}
										className="flex flex-col gap-10 md:flex-row md:items-end md:gap-24"
									>
										<div className="quote md:pb-20">
											<PrismicRichText field={testimonial.data.body} />
										</div>
										<div className="w-full pt-10 flex flex-col items-center">
											<div className="w-40 md:w-64">
												<Image
													src={testimonial.data.user_image.url!}
													alt={testimonial.data.user_image.alt!}
													width={testimonial.data.user_image.dimensions?.width}
													height={
														testimonial.data.user_image.dimensions?.height
													}
												/>
											</div>
											<div className="pt-6 text-center flex flex-col gap-2 md:pt-[72px]">
												<PrismicRichText field={testimonial.data.user_name} />
												<div className="flex justify-center">
													{testimonial.data.user_job.length ? (
														<div className="flex">
															<PrismicRichText
																field={testimonial.data.user_job}
															/>
															&nbsp;-&nbsp;
														</div>
													) : null}
													<PrismicRichText
														field={testimonial.data.user_location}
													/>
												</div>
											</div>
										</div>
									</SwiperSlide>
								);
							}
						)}
					</Swiper>
				</div>
			</section>
		</>
	);
};
