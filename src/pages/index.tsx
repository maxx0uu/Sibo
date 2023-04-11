import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "../../prismicio";
import { Blog, Customers } from "@/components";
import { HomepageDocumentDataSlicesSlice } from "../../.slicemachine/prismicio";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({
	page,
	posts,
	testimonials,
	ctas,
	links,
}: PageProps) {
	return (
		<>
			{page.data.slices.map(
				(slice: HomepageDocumentDataSlicesSlice, key: number) => {
					switch (slice.slice_type) {
						case "header":
							return console.log("header");
							break;
						case "hero":
							return console.log("hero");
							break;
						case "blog":
							return (
								<Blog
									title={slice.primary.blog_title}
									subtitle={slice.primary.blog_subtitle}
									body={slice.primary.blog_body}
									postsData={posts}
									ctasData={ctas}
									key={slice.slice_type}
								/>
							);
							break;
						case "testimonials":
							return (
								<Customers
									title={slice.primary.testimonials_title}
									testimonialsData={testimonials}
									key={slice.slice_type}
								/>
							);
							break;
						case "footer":
							return console.log("footer");
							break;
						default:
							console.warn("Unknown slice_type");
							break;
					}
				}
			)}
		</>
	);
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
	const client = createClient({ previewData });

	// Query page
	const page = await client.getSingle("homepage");
	// Queries all items
	const ctas = await client.getAllByType("cta");
	const links = await client.getAllByType("link");
	const posts = await client.getAllByType("post");
	const testimonials = await client.getAllByType("testimonial");

	return {
		props: {
			page,
			ctas,
			links,
			posts,
			testimonials,
		},
	};
}
