import { PrismicRichText } from "@prismicio/react";
import { ImageField, RichTextField } from "@prismicio/types";
import Image from "next/image";

interface NavSubitemProps {
	image: ImageField<never>;
	title: RichTextField;
	body: RichTextField | null;
}

export const NavSubItem = ({ image, title, body }: NavSubitemProps) => {
	return (
		<>
			<div className="bg-red-400">
				<div>
					<Image
						width={image.dimensions?.width}
						height={image.dimensions?.height}
						src={image.url!}
						alt={image.alt!}
					/>
					<PrismicRichText field={title} />
				</div>
				<PrismicRichText field={body} />
			</div>
		</>
	);
};
