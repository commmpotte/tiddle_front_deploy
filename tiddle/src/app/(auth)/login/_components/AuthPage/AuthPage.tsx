import { Htag } from '@/components/Htag/Htag';
import Link from 'next/link';
import styles from './AuthPage.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

export function AuthPage() {
	return (
		<div className={styles.mobileWrapper}>
			<img
				src="auth/MobileLogo.svg"
				alt="Mobile logo tiddle"
				className={styles.mobileLogo}
			/>
			<div className={styles.wrapper}>
				<img
					src="auth/mainLogo.svg"
					alt="MainMenu"
					className={styles.mainLogo}
				/>
				<Htag tag="h1">Authorization</Htag>
				<LoginForm />
				<div>
					<span>Don’t have an account? </span>
					<Link href="#" className={styles.link}>
						Sing up
					</Link>
				</div>
			</div>
		</div>
	);
}
