import { getSession } from 'next-auth/client';
import React from 'react';

const profile = ({ session }) => {
	return (
		<div>
			<h1>User Profile</h1>
		</div>
	);
};

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req });

	console.log(session);

	return {
		props: { session },
	};
}

export default profile;
