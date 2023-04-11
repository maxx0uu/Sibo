import { ContentRelationshipField } from "@prismicio/types";
import Link from "next/link";
import { CtaDocument } from "../../.slicemachine/prismicio";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

interface CtaProps {
	cta: any;
	ctas: CtaDocument<string>[];
	type: string;
}

export const Cta = ({ cta, ctas, type }: CtaProps) => {
	return (
		<>
			<PrismicLink
				field={
					ctas.find((singleCta) => (singleCta.uid = cta.uid))?.data.cta_url
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
