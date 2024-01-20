'use client';
import { Button } from '@/components/Button/Button';
import styles from './WelcomePage.module.scss';
import { useState } from 'react';
import { welcomeInformation } from '@/helps/welcome.helps';
import { useRouter } from 'next/navigation';
import { AuthPage } from '@/app/(auth)/_components/AuthPage/AuthPage';

export default function WelcomePage() {
	const [screenPosition, setScreenPosition] = useState<number>(1);
	const router = useRouter();
	const handlerClick = () => {
		if (screenPosition <= 2) {
			setScreenPosition(() => screenPosition + 1);
		}
		if (screenPosition === 3) {
			router.push('/login');
		}
	};

	return (
		<main className={styles.wrapperMain}>
			{welcomeInformation &&
				welcomeInformation.map((info) => {
					if (info.position === screenPosition) {
						return (
							<AuthPage
								tag={info.title}
								type={info.type}
								url={info.url}
								key={info.position}
							>
								<div className={styles.welcomeScreen}>
									<span className={styles.description}>{info.description}</span>
									<div className={styles.slider}>
										{welcomeInformation.map((slider) =>
											slider.position === screenPosition ? (
												<img
													src="/welcome/current.svg"
													alt=""
													key={slider.position}
												/>
											) : (
												<img
													src="/welcome/next.svg"
													alt=""
													key={slider.position}
												/>
											)
										)}
									</div>
									<Button onClick={handlerClick}>{info.button}</Button>
								</div>
							</AuthPage>
						);
					}
				})}
		</main>
	);
}
