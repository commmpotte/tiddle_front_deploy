import { AuthPage } from '../_components/AuthPage/AuthPage';
import { LoginForm } from './_components/LoginForm/LoginForm';
import styles from './page.module.scss';

export default function Login() {
	return (
		<main className={styles.wrapperMain}>
			<img
				src="auth/backend.png"
				alt="Превью проекта"
				className={styles.leftImg}
			/>
			<AuthPage type="login" tag="Authorization">
				<LoginForm />
			</AuthPage>
		</main>
	);
}
