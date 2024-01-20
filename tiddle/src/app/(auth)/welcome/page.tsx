'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import WelcomePage from './_components/WelcomePage/WelcomePage';

export default function Welcome() {
	const router = useRouter();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.matchMedia('(min-width: 900px)').matches) {
				router.push('/login');
			} else {
				setIsLoaded(true);
			}
		};
		if (localStorage.getItem('welcome') === 'done') {
			router.push('/login');
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	if (!isLoaded) {
		return null;
	}
	return (
		<>
			<WelcomePage />
		</>
	);
}
