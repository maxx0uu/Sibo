import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.BlogSlice} BlogSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogSlice>} BlogProps
 * @param { BlogProps }
 */
const Blog = ({ slice }) => (
	<section>
		<div class="text-center flex flex-col gap-2 py-16">
			<div class="text-my-velour">
				<PrismicRichText field={slice.primary.blog_subtitle} />
			</div>
			<PrismicRichText field={slice.primary.blog_title} />
			<PrismicRichText field={slice.primary.blog_body} />
		</div>
		{slice?.items?.map((item, i) => (
			<PrismicLink key={i} document={item.post}>
				My Link
			</PrismicLink>
		))}
	</section>
);

export default Blog;
