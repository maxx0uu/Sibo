import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/types";
import { PostDocument } from "../../.slicemachine/prismicio";
import { Post } from "./Post";

interface BlogProps {
	title: RichTextField;
	subtitle: RichTextField;
	body: RichTextField;
	postsData: PostDocument<string>[];
}

export const Blog = ({ title, subtitle, body, postsData }: BlogProps) => {
	return (
		<>
			<section className="px-6 max-w-7xl mx-auto">
				<div className="text-center pb-16 flex flex-col gap-2 md:w-3/5 md:mx-auto">
					<div className="text-my-velour">
						<PrismicRichText field={subtitle} />
					</div>
					<div className="md:pb-4">
						<PrismicRichText field={title} />
					</div>
					<PrismicRichText field={body} />
				</div>
				<div className="flex flex-col gap-16">
					{postsData.map((post: PostDocument<string>, i: number) => {
						return (
							<Post
								key={post.uid}
								post={post}
								reverse={i % 2 == 0 ? true : false}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};
