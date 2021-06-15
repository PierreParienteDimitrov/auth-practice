import { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signIn } from 'next-auth/client';

const signin = () => {
	const email = useRef();
	const password = useRef();

	const router = useRouter();

	async function submitHandler(e) {
		e.preventDefault();

		const userEmail = email.current.value;
		const userPassword = password.current.value;

		const result = await signIn('credentials', {
			redirect: false,
			email: userEmail,
			password: userPassword,
		});

		if (!result.success) {
			// set some auth state
		}

		router.replace('/profile');
	}

	return (
		<div className='w-4/12 m-auto mt-16 flex justify-center'>
			{/* Form */}
			<form onSubmit={submitHandler} className='w-full flex flex-col'>
				{/* Title */}
				<div className='text-center'>
					<h3 className='mb-2'>Signin to your Account</h3>
					<div className='flex justify-center'>
						<p className='mr-2'>Don't have an account?</p>
						<Link href='/create-account'>
							<a>Create a free account</a>
						</Link>
					</div>
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
				</div>

				{/* Button */}
				<button className='w-full py-2 mt-6 rounded-sm bg-blue-300 text-md'>
					Signin
				</button>
			</form>
		</div>
	);
};

export default signin;
