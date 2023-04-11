import { PrismicRichText } from "@prismicio/react";
import { ImageField, RichTextField } from "@prismicio/types";
import Image from "next/image";
import {
	MapCategorySlice,
	MapcategoryDocument,
} from "../../.slicemachine/prismicio";

interface FooterProps {
	image: ImageField<never>;
	right: RichTextField;
	legal: RichTextField;
	madeby: RichTextField;
	mapsData: MapcategoryDocument<string>[];
}

export const Footer = ({
	image,
	right,
	legal,
	madeby,
	mapsData,
}: FooterProps) => {
	const maps = mapsData[0].data.slices;
	return (
		<>
			<footer className="pt-6 pb-9">
				<div className="max-w-7xl mx-auto">
					<div className="px-6 flex flex-col gap-12 pb-6">
						{maps.map((map: MapCategorySlice) => {
							return (
								<div key={map.id}>
									<div className="pb-6 big ">
										<PrismicRichText field={map.primary.title} />
									</div>
									<PrismicRichText field={map.primary.list} />
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
