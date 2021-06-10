import Link from 'next/link';
import CreateAccountBtn from '../button/CreateAccountBtn';

const TopNavigation = () => {
	return (
		<div>
			<header className='flex w-screen h-14 border-b-2 items-center relative'>
				<div className='absolute right-10'>
					<CreateAccountBtn redirection={'/create-account'} />
				</div>
			</header>
		</div>
	);
};

export default TopNavigation;
