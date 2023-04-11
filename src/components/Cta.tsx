import { ContentRelationshipField } from "@prismicio/types";
import Link from "next/link";
import { CtaDocument } from "../../.slicemachine/prismicio";
import { PrismicRichText } from "@prismicio/react";

interface CtaProps {
	cta: ContentRelationshipField<"cta">;
	ctas: CtaDocument<string>[];
	type: string;
}

export const Cta = ({ cta, ctas, type }: CtaProps) => {
	return (
		<>
			<Link
				href={
					ctas.find((singleCta) => (singleCta.uid = cta.uid))?.data.cta_url.url
				}
				className="bg-my-black text-white py-4 px-10 rounded-xl md:mt-4"
			>
				<PrismicRichText
					field={
						ctas.find((singleCta) => (singleCta.uid = cta.uid))?.data.cta_text
					}
				/>
			</Link>
		</>
	);
};
