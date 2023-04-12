import { GetStaticPropsContext } from "next";
import { CtaDocument } from "../../.slicemachine/prismicio";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

interface CtaProps {
	cta: any;
	ctas: CtaDocument<string>[];
	type: string;
}

export const Cta = ({ cta, ctas, type }: CtaProps) => {
	// console.log(cta.slug);
	// console.log(ctas);
	// console.log(
	// 	ctas.find(
	// 		(singleCta: CtaDocument<string>) => (singleCta.slugs[0] = cta.slug)
	// 	)?.data.cta_url
	// );
	// console.log(ctas.map((singleCta: CtaDocument<string>) => singleCta.slugs[0]));
	// console.log(cta);
	// console.log(cta.slug);
	// 	(singleCta: CtaDocument<string>) => singleCta.slugs[0] == cta.slug
	// )?.data.cta_url);
	return (
		<>
			<PrismicLink
				field={
					ctas.find(
						(singleCta: CtaDocument<string>) => singleCta.slugs[0] == cta.slug
					)?.data.cta_url
				}
			>
				<div className="py-5 text-center bg-my-gold rounded-xl font-bold">
					<PrismicRichText
						field={
							ctas.find((singleCta) => (singleCta.uid = cta.uid))?.data.cta_text
						}
					/>
				</div>
			</PrismicLink>
		</>
	);
};
