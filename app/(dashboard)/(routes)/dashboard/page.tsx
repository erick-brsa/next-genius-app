import { UserButton } from '@clerk/nextjs';

export const metadata = {
	title: 'Dashboard | Genius'
};

const DashboardPage = () => {
	return (
		<div>
			<p>Dashboard Page (Protected)</p>
			<UserButton afterSignOutUrl="/" />
		</div>
	);
};

export default DashboardPage;
