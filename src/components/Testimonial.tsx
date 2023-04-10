import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialDocument } from "../../.slicemachine/prismicio";

interface TestimonialProps {
	testimonials: TestimonialDocument<string>[];
}

export const Testimonial = ({ testimonials }: TestimonialProps) => {
	return (
		<>
			<section className="bg-my-black">
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{testimonials.map((testimonial: TestimonialDocument, key: number) => {
						return (
							<SwiperSlide key={testimonial.uid} className="px-6 text-white">
								<div className="quote">
									<PrismicRichText field={testimonial.data.testimonial_body} />
								</div>
								<div className="w-full pt-10 flex flex-col items-center">
									<div className="w-40">
										<Image
											src={testimonial.data.testimonial_user_image.url!}
											alt={testimonial.data.testimonial_user_image.alt!}
											width={
												testimonial.data.testimonial_user_image.dimensions
													?.width
											}
											height={
												testimonial.data.testimonial_user_image.dimensions
													?.height
											}
										/>
									</div>
									<div className="pt-6 text-center">
										<PrismicRichText
											field={testimonial.data.testimonial_user_name}
										/>
										<div className="flex justify-center">
											{testimonial.data.testimonial_user_job != "" ? (
												<div className="flex">
													<PrismicRichText
														field={testimonial.data.testimonial_user_job}
													/>
													<p>&nbsp;-&nbsp;</p>
												</div>
											) : null}
											<PrismicRichText
												field={testimonial.data.testimonial_user_location}
											/>
										</div>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>
		</>
	);
};
