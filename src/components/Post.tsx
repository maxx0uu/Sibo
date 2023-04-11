import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { CtaDocument, PostDocument } from "../../.slicemachine/prismicio";
import { Cta } from "./Cta";
import { ContentRelationshipField } from "@prismicio/types";

interface PostProps {
	post: PostDocument<string>;
	ctas: CtaDocument<string>[];
	reverse: boolean;
}

export const Post = ({ post, ctas, reverse }: PostProps) => {
	return (
		<>
			<div
				className={
					reverse
						? "md:flex md:flex-row md:items-center md:gap-36"
						: "md:flex md:flex-row-reverse md:items-center md:"
				}
			>
				<Image
					width={post.data.post_image.dimensions?.width}
					height={post.data.post_image.dimensions?.height}
					src={post.data.post_image.url!}
					alt={post.data.post_image.alt!}
					className="pb-10 md:w-1/2"
				/>
				<div className="flex flex-col gap-6 items-start md:w-1/3">
					<div className="flex gap-5 items-start">
						<Image
							width={post.data.post_icon.dimensions?.width}
							height={post.data.post_icon.dimensions?.height}
							src={post.data.post_icon.url!}
							alt={post.data.post_icon.alt!}
						/>
						<PrismicRichText field={post.data.post_title} />
					</div>
					<PrismicRichText field={post.data.post_body} />
					<Cta cta={post.data.post_cta} ctas={ctas} type="post" />
				</div>
			</div>
		</>
	);
};
