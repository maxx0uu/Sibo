import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

interface PostProps {
	post_id: any;
	post_icon: any;
	post_title: any;
	post_body: any;
	post_image: any;
	post_cta: any;
}

export const Post = ({
	post_id,
	post_icon,
	post_title,
	post_body,
	post_image,
	post_cta,
}: PostProps) => {
	return (
		<div>
			<Image
				width={post_image.dimensions.width}
				height={post_image.dimensions.height}
				alt={post_image.alt}
				src={post_image.url}
			/>
			<div className="flex gap-5">
				<Image
					width={post_icon.dimensions.width}
					height={post_icon.dimensions.height}
					alt={post_icon.alt}
					src={post_icon.url}
				/>
				<PrismicRichText field={post_title} />
			</div>
			<PrismicRichText field={post_body} />
		</div>
	);
};

export default Post;
