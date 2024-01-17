import { Button } from '@/components/Button/Button';
import { Gbutton } from '@/components/Gbutton/Gbutton';
import { Htag } from '@/components/Htag/Htag';
import { Input } from '@/components/Input/Input';
import Link from 'next/link';
import styles from './LoginForm.module.scss';

export function LoginForm() {
	return (
		<div className={styles.wrapper}>
			<img src="auth/MobileLogo.png" alt="Mobile logo tiddle" />
			<Htag tag="h1">Authorization</Htag>
			<form className={styles.form}>
				<Input placeholder="example@example.com" label="Email" />
				<Input placeholder="********" label="Password" />
				<div className={styles.wrapperRemember}>
					<label className={styles.remember}>
						<input type="checkbox" />
						Remember me
					</label>
					<Link href="#" className={styles.link}>
						Forgot password?
					</Link>
				</div>
				<Gbutton />
				<Button>Login</Button>
			</form>
			<div>
				<span>Don’t have an account? </span>
				<Link href="#" className={styles.link}>
				Sing up
				</Link>
			</div>
		</div>
	);
}
