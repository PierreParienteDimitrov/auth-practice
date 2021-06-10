import TopNavigation from './TopNavigation';

const Layout = ({ children }) => {
	return (
		<div>
			<TopNavigation />
			{children}
		</div>
	);
};

export default Layout;
