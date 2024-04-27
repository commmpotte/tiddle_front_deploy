import { Htag } from '@/components/Htag/Htag';
import Link from 'next/link';
import styles from './AuthPage.module.scss';
import { AuthPageProps } from './AuthPage.props';
import { paths } from '@/helps/path.help';

export function AuthPage({
	children,
	tag,
	type,
	url,
	...props
}: AuthPageProps) {
	return (
		<div className={styles.mobileWrapper} {...props}>
			{url && (
				<img
					src={url}
					alt="Mobile background"
					className={styles.screenBackground}
				/>
			)}

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
				<Htag tag="h1">{tag}</Htag>
				{children}
				{type === 'login' && (
					<div>
						<span>Don’t have an account? </span>
						<Link href={paths.auth.signup} className={styles.link}>
							Sing up
						</Link>
					</div>
				)}
				{type === 'signup' && (
					<div>
						<span>Already with us? </span>
						<Link href={paths.auth.login} className={styles.link}>
							Log in
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
