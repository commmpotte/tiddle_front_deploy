import { AuthPage } from '../_components/AuthPage/AuthPage';
import { SignUpForm } from './_components/SignUpForm/SignUpForm';
import styles from './page.module.scss';

export default function SignUp() {
	return (
		<main className={styles.wrapperMain}>
			<img
				src="auth/backend.png"
				alt="Превью проекта"
				className={styles.leftImg}
			/>
			<AuthPage type="signup" tag="Sing up">
				<SignUpForm />
			</AuthPage>
		</main>
	);
}
