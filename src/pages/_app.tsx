import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Content } from "@prismicio/client";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import Link from "next/link";
import { repositoryName } from "../../prismicio";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
			<PrismicPreview repositoryName={repositoryName}>
				<Component {...pageProps} />
			</PrismicPreview>
		</PrismicProvider>
	);
}
