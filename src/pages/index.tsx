import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "../../prismicio";
import { Blog, Customers, Footer, Header, Hero } from "@/components";
import { HomepageDocumentDataSlicesSlice } from "../../.slicemachine/prismicio";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({
	page,
	posts,
	testimonials,
	ctas,
	maps,
}: PageProps) {
	console.log(page);
	return (
		<>
			{/* <main className="flex flex-col gap-16">
				{page.data.slices.map(
					(slice: HomepageDocumentDataSlicesSlice, key: number) => {
						switch (slice.slice_type) {
							case "header":
								return (
									<Header
										image={slice.primary.header_logo}
										key={slice.slice_type}
									/>
								);
								break;
							case "hero":
								return (
									<Hero
										title={slice.primary.title}
										description={slice.primary.description}
										cardBody={slice.primary.card_body}
										cardCta={slice.primary.card_cta}
										image1={slice.primary.image_1}
										image2={slice.primary.image_2}
										ctasData={ctas}
										key={slice.slice_type}
									/>
								);
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
							case "blog_slice":
								return <p>blog slice</p>;
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
								// console.log(slice);
								return (
									<Footer
										image={slice.primary.logo}
										right={slice.primary.right}
										legal={slice.primary.legal}
										madeby={slice.primary.made_by}
										mapsData={maps}
										ctasData={ctas}
										key={slice.slice_type}
									/>
								);
								break;
							default:
								console.warn("Unknown slice_type");
								break;
						}
					}
				)}
			</main> */}
		</>
	);
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
	const client = createClient({ previewData });

	// Query page
	const page = await client.getSingle("homepage");
	// Queries all items
	const ctas = await client.getAllByType("cta");
	const posts = await client.getAllByType("post");
	const testimonials = await client.getAllByType("testimonial");
	const maps = await client.getAllByType("mapcategory");

	return {
		props: {
			page,
			ctas,
			posts,
			testimonials,
			maps,
		},
	};
}
