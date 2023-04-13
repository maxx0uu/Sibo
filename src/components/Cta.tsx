import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { LinkField, RichTextField } from "@prismicio/types";

interface CtaProps {
	text: RichTextField;
	url: LinkField;
	type: string;
}

export const Cta = ({ text, url, type }: CtaProps) => {
	const checkType = () => {
		switch (type) {
			case "main":
				return "px-10 py-5 text-center bg-my-gold rounded-xl font-bold hover:bg-my-black hover:text-white";
				break;
			case "secondary":
				return "px-10 py-5 text-center bg-my-black text-white rounded-xl font-bold hover:bg-my-dark-grey";
				break;
			default:
				break;
		}
	};
	const ctaStyle = checkType();
	return (
		<>
			<PrismicLink field={url}>
				<div className={ctaStyle}>
					<PrismicRichText field={text} />
				</div>
			</PrismicLink>
		</>
	);
};
