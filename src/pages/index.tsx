import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "../../prismicio";
import { Post } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialDocument } from "../../.slicemachine/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ page, posts, testimonials }: PageProps) {
	console.log(testimonials);
	return (
		<>
			<section>{/* <Post /> */}</section>
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
								<PrismicRichText field={testimonial.data.testimonial_body} />
								<Image
									src={testimonial.data.testimonial_user_image.url!}
									alt={testimonial.data.testimonial_user_image.alt!}
									width={
										testimonial.data.testimonial_user_image.dimensions?.width
									}
									height={
										testimonial.data.testimonial_user_image.dimensions?.height
									}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>
		</>
	);
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
	const client = createClient({ previewData });

	// Query page
	const page = await client.getSingle("homepage");
	// Queries all items
	const ctas = await client.getAllByType("cta");
	const links = await client.getAllByType("link");
	const posts = await client.getAllByType("post");
	const testimonials = await client.getAllByType("testimonial");

	return {
		props: {
			page,
			ctas,
			links,
			posts,
			testimonials,
		},
	};
}
