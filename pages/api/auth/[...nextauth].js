import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from '../../../util/bcrypt';
import { connectToDatabase } from '../../../util/mongodb';

export default NextAuth({
	session: {
		jwt: true,
	},
	// Configure one or more authentication providers
	providers: [
		Providers.Credentials({
			async authorize(credentials) {
				const { db, client } = await connectToDatabase();

				const user = await db.collection('users').findOne({
					email: credentials.email,
				});

				if (!user) {
					client.close();
					throw new Error('No user found!');
				}

				const isValid = await verifyPassword(credentials.password, user.password);

				if (!isValid) {
					client.close();
					throw new Error('Could not log you in');
				}

				client.close();

				return { email: user.email };
			},
		}),
		// ...add more providers here
	],

	// A database is optional, but required to persist accounts in a database
	database: process.env.MONGODB_URI,
});
