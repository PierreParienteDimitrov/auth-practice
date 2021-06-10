import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState, useRef } from 'react';

async function createUser(inputName, inputEmail, inputPassword) {
	const response = await fetch('/api/auth/create-user', {
		method: 'POST',
		body: JSON.stringify({ inputName, inputEmail, inputPassword }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	return data;
}

const CreateAccount = () => {
	const [passwordAlert, setPasswordAlert] = useState(false);
	const router = useRouter();

	const name = useRef();
	const email = useRef();
	const password = useRef();

	async function submitHandler(e) {
		e.preventDefault();

		// User Credentials
		const inputName = name.current.value;
		const inputEmail = email.current.value;
		const inputPassword = password.current.value;

		const result = await createUser(inputName, inputEmail, inputPassword);

		if (!result.sucess) {
			setPasswordAlert(true);
		}

		router.replace('/profile');

		return result;
	}

	return (
		<div className='w-4/12 m-auto mt-16 flex justify-center'>
			{/* Form */}
			<form onSubmit={submitHandler} className='w-full flex flex-col'>
				{/* Title */}
				<div className='text-center'>
					<h3 className='mb-2'>Create your Free Account</h3>
					<div className='flex justify-center'>
						<p className='mr-2'>Already have a Blue Cargo account? </p>
						<Link href='/signin'>
							<a>Sign In</a>
						</Link>
					</div>
				</div>

				{/* Full Name */}
				<div className='flex flex-col mt-10'>
					<label htmlFor='Name' className='mb-2'>
						Name *
					</label>
					<input
						type='text'
						placeholder='Your Full Name'
						name='email'
						required
						ref={name}
						className='w-full h-10 border rounded-md px-4'
					/>
				</div>

				{/* Work Email */}
				<div className='flex flex-col mt-6'>
					<label htmlFor='Name' className='mb-2'>
						Work email *
					</label>
					<input
						type='email'
						placeholder='you@company.com'
						name='email'
						required
						ref={email}
						className='w-full h-10 border rounded-md px-4'
					/>
				</div>

				{/* Password */}
				<div className='flex flex-col mt-6'>
					<label htmlFor='password' className='mb-2'>
						Create a password *
					</label>
					<input
						type='password'
						id='password'
						placeholder='Enter a strong password'
						required
						ref={password}
						className='w-full h-10 border rounded-md px-4'
					/>

					{passwordAlert && <p className='text-xs'>Enter a stronger password</p>}

					<button className='w-full py-2 mt-6 rounded-sm bg-blue-300 text-md'>
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateAccount;
