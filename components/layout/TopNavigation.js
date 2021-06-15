import { useSession } from 'next-auth/client';
import CreateAccountBtn from '../button/CreateAccountBtn';

const TopNavigation = () => {
	const [loading, session] = useSession();

	return (
		<div>
			<header className='flex w-screen h-14 border-b-2 items-center relative'>
				<div className='absolute right-10'>
					{session ? (
						<CreateAccountBtn redirection={'/login'} cta={'Login'} />
					) : (
						<CreateAccountBtn
							redirection={'/create-account'}
							cta={'Create Account'}
						/>
					)}
				</div>
			</header>
		</div>
	);
};

export default TopNavigation;
