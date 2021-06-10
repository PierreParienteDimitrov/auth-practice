import Head from 'next/head';
import { connectToDatabase } from '../util/mongodb';

export default function Home({ isConnected }) {
	return (
		<div className='container'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>This is the home page</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const { client } = await connectToDatabase();

	// console.log(client);

	const isConnected = await client.isConnected();

	console.log(isConnected);

	return {
		props: { isConnected },
	};
}
