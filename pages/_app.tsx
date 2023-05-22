import { useRouter } from "next/router";
import Head from "next/head";
import "@styles/globals.css";
import type { AppProps } from "next/app";

import Container from "@Container/Container";
import Navbar from "@Navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<>
				<Navbar />
				{router.pathname !== "/" ? (
					<Container>
						<Component {...pageProps} />
					</Container>
				) : (
					<Component {...pageProps} />
				)}
			</>
		</>
	);
}
