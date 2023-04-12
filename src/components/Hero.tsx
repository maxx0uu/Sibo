import { PrismicRichText } from "@prismicio/react";
import { ImageField, RichTextField, TitleField } from "@prismicio/types";
import Image from "next/image";
import { Cta } from "./Cta";
import { CtaDocument } from "../../.slicemachine/prismicio";

interface HeroProps {
	title: TitleField;
	description: RichTextField;
	cardBody: RichTextField;
	cardCta: any;
}

export const Hero = ({ title, description, cardBody, cardCta }: HeroProps) => {
	return (
		<>
			<section className=" text-white pt-36 relative after:bg-my-olive after:absolute after:-z-10 after:top-0 after:left-0 after:right-0 after:block after:!h-4/6 after:md:!h-5/6">
				{/* Headings */}
				<img
					src="/wave.png"
					alt="wave"
					className="hidden md:block md:absolute xl:right-[10%] md:right-[2.5%] md:top-0 xl:w-72 md:w-64"
				/>
				<div className="px-6 max-w-7xl mx-auto relative">
					<div className="flex flex-col gap-4 md:pb-24">
						<div className="md:w-1/2">
							<PrismicRichText field={title} />
						</div>
						<div className="md:text-2xl">
							<PrismicRichText field={description} />
						</div>
					</div>
					{/* Card */}
					<div className="px-7 py-10 rounded-2xl bg-white mt-10 mb-6 text-my-black flex flex-col gap-6 md:absolute md:w-80 md:right-24 md:top-12">
						<PrismicRichText field={cardBody} />
						{/* <Cta cta={cardCta} ctas={ctasData} type={""} /> */}
					</div>
					{/* Image */}
					{/* <div className="flex flex-col gap-6 z-50 md:flex-row">
						<div className="aspect-[16/12] overflow-hidden rounded-2xl flex justify-center items-center md:aspect-square md:w-1/2">
							<Image
								width={image1.dimensions?.width}
								height={image1.dimensions?.height}
								src={image1.url!}
								alt={image1.alt!}
							/>
						</div>
						<div className="aspect-[16/12] overflow-hidden rounded-2xl flex justify-center items-center md:aspect-square md:w-1/2">
							<Image
								width={image2.dimensions?.width}
								height={image2.dimensions?.height}
								src={image2.url!}
								alt={image2.alt!}
							/>
						</div>
					</div> */}
				</div>
			</section>
		</>
	);
};
