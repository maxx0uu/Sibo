import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { Cta } from "./Cta";

interface PostProps {
	post: any;
	reverse: boolean;
}

export const Post = ({ post, reverse }: PostProps) => {
	return (
		<>
			<div
				className={
					reverse
						? "md:flex md:flex-row md:items-center md:gap-36"
						: "md:flex md:flex-row-reverse md:items-center"
				}
			>
				<Image
					width={post.data.image.dimensions?.width}
					height={post.data.image.dimensions?.height}
					src={post.data.image.url!}
					alt={post.data.image.alt!}
					className="pb-10 md:w-1/2"
				/>
				<div className="flex flex-col gap-6 items-start md:w-1/3">
					<div className="flex gap-5 items-start">
						<Image
							width={post.data.icon.dimensions?.width}
							height={post.data.icon.dimensions?.height}
							src={post.data.icon.url!}
							alt={post.data.icon.alt!}
						/>
						<PrismicRichText field={post.data.title} />
					</div>
					<PrismicRichText field={post.data.body} />
					<Cta
						text={post.data.cta.data.text}
						url={post.data.cta.data.url}
						type={post.data.cta.data.type}
					/>
				</div>
			</div>
		</>
	);
};
