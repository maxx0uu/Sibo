import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { ImageField, RichTextField } from "@prismicio/types";
import Image from "next/image";
import { MapitemDocument } from "../../.slicemachine/prismicio";
import { Cta } from "./Cta";

interface FooterProps {
	image: ImageField<never>;
	right: RichTextField;
	legal: RichTextField;
	madeby: RichTextField;
	mapitems: any;
}

export const Footer = ({
	image,
	right,
	legal,
	madeby,
	mapitems,
}: FooterProps) => {
	return (
		<>
			<footer className="py-6">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col gap-12 pb-6 md:flex-row">
						{mapitems.map((item: any, key: number) => {
							return (
								<div
									key={key}
									className="border-t border-my-black border-opacity-20 px-6 md:border-0"
								>
									<div className="font-bold py-6">
										<PrismicRichText field={item.data.title} />
									</div>
									{item.data.list.map((listItem: any, key: number) => {
										return (
											<div key={key}>
												<PrismicRichText field={listItem.link} />
												{listItem.cta.data ? (
													<Cta
														text={listItem.cta.data.text}
														url={listItem.cta.data.url}
														type={""}
													/>
												) : null}
											</div>
										);
									})}
								</div>
							);
						})}
					</div>
					<div className="relative flex flex-col w-full justify-center">
						<div className="text-my-black text-center py-6 border-t  tiny flex flex-col gap-6 w-full md:flex-row md:justify-center">
							<div className="flex justify-center gap-4">
								<PrismicRichText field={right} />
								<PrismicRichText field={legal} />
							</div>
							<PrismicRichText field={madeby} />
						</div>
						<div className="flex justify-center pt-6 border-t border-opacity-20 border-my-black md:border-0 md:absolute md:left-0">
							<Image
								width={image.dimensions?.width}
								height={image.dimensions?.height}
								src={image.url!}
								alt={image.alt!}
							/>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
