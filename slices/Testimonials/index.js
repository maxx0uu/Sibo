import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param { TestimonialsProps }
 */
const Testimonials = ({ slice }) => (
	<section>
		<PrismicRichText field={slice.primary.testimonials_title} />
		{slice?.items?.map((item, i) => (
			<PrismicLink key={i} document={item.testimonial}>
				My Link
			</PrismicLink>
		))}
	</section>
);

export default Testimonials;
