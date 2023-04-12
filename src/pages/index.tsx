import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "../../prismicio";
import { Blog, Customers, Footer, Header, Hero, Nav } from "@/components";
import { HomepageDocumentDataSlicesSlice } from "../../.slicemachine/prismicio";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({
	page,
	navitems,
	posts,
	testimonials,
}: PageProps) {
	console.log(navitems);
	return (
		<>
			<main className="flex flex-col gap-16">
				{page.data.slices.map(
					(slice: HomepageDocumentDataSlicesSlice, key: number) => {
						switch (slice.slice_type) {
							case "nav":
								return <Nav />;
								break;
							case "header":
								return (
									<Header image={slice.primary.logo} key={slice.slice_type} />
								);
								break;
							case "hero":
								return (
									<Hero
										title={slice.primary.title}
										description={slice.primary.subtitle}
										cardBody={slice.primary.card_body}
										cardCta={slice.primary.card_cta}
										key={slice.slice_type}
									/>
								);
								break;
							case "blog":
								return (
									<Blog
										title={slice.primary.title}
										subtitle={slice.primary.subtitle}
										body={slice.primary.body}
										postsData={posts}
										key={slice.slice_type}
									/>
								);
								break;
							case "testimonials":
								return (
									<Customers
										title={slice.primary.title}
										testimonialsData={testimonials}
										key={slice.slice_type}
									/>
								);
								break;
							case "map":
								return <p>map</p>;
								break;
							case "footer":
								return (
									<Footer
										image={slice.primary.logo}
										right={slice.primary.right}
										legal={slice.primary.legal}
										madeby={slice.primary.made_by}
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
			</main>
		</>
	);
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
	const client = createClient({ previewData });

	// Query page
	const page = await client.getSingle("homepage");
	const posts = await client.getAllByType("post", {
		graphQuery: `
	{
		post {
			image
			icon
			title
			body
			list
			cta {
				...on cta {
					text
					url
					type
				}
			}
		}
	}
	`,
	});
	const navitems = await client.getAllByType("navitem", {
		graphQuery: `
		{
			navitem {
				title
				subitem {
					content {
						...on post {
							icon
							title
							body
						}
						...on testimonial {
							user_name
							user_image
						}
					}
				}
			}
		}
		`,
	});
	const testimonials = await client.getAllByType("testimonial");

	return {
		props: {
			page,
			navitems,
			posts,
			testimonials,
		},
	};
}
