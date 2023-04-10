import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "../../prismicio";
import { Testimonial } from "@/components";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ page, posts, testimonials }: PageProps) {
	console.log(page);
	return (
		<>
			<Testimonial testimonials={testimonials} />
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
