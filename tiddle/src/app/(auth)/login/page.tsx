import { AuthPage } from './_components/AuthPage/AuthPage';
import styles from './page.module.scss';

export default function Login() {
	return (
		<main className={styles.wrapperMain}>
			<img src="auth/backend.png" alt="Превью проекта" className={styles.leftImg}/>
			<AuthPage />
		</main>
	);
}
