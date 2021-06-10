import Link from 'next/link';

const CreateAccountBtn = ({ redirection }) => {
	return (
		<button className='px-6 py-1 bg-pink-800'>
			<Link href={redirection}>
				<a className='text-white'>Create Account</a>
			</Link>
		</button>
	);
};

export default CreateAccountBtn;
