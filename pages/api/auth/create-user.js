import { connectToDatabase } from '../../../util/mongodb';
import { hashPassword } from '../../../util/bcrypt';

export default async function handler(req, res) {
	const { method } = req;

	if (!method === 'POST') {
		return;
	}

	const { inputName, inputEmail, inputPassword } = req.body;

	// Server Side Validation
	if (
		!inputName ||
		!inputEmail ||
		!inputEmail.includes('@') ||
		!inputPassword ||
		inputPassword.trim().length < 7
	) {
		res.status(422).json({ message: 'Invalid User Input', sucess: false });
		return;
	}

	const { db, client } = await connectToDatabase();

	// Add validation to verify if user does not already exists
	const existingUser = await db.collection('users').findOne({
		email: inputEmail,
	});

	if (existingUser) {
		res.status(422).json({ message: 'user already exists', sucess: false });
		client.close();
		return;
	}

	// Hash password
	const hashedPassword = await hashPassword(inputPassword);

	// Creating user in db
	const result = await db.collection('users').insertOne({
		name: inputName,
		email: inputEmail,
		password: hashedPassword,
	});

	res.json({ message: 'success', sucess: true });
}
