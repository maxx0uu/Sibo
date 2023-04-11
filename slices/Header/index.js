import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param { HeaderProps }
 */

const Header = ({ slice }) => (
	<section>
		{/* <img
			src={slice.primary.header_logo.url}
			alt={slice.primary.header_logo.alt}
		/> */}
		<div class="text-black">
			<PrismicLink document={slice.primary.cta}>My Link</PrismicLink>
		</div>
	</section>
);

export default Header;
