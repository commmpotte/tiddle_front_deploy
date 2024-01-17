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
			<form>
				<Input placeholder="Email" label="Email" />
				<Input placeholder="Password" label="Password" />
				<div>
					<label>
						<input type="checkbox" />
						Remember me
					</label>
					<Link href="#">Forgot password?</Link>
				</div>
				<Gbutton />
				<Button>Login</Button>
			</form>
		</div>
	);
}
