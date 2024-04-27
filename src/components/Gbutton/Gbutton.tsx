import styles from './Gbutton.module.scss';
export function Gbutton() {
	return (
		<button className={styles.gbutton}>
			<img src="/auth/gbutton.svg" alt="Google auth" />
		</button>
	);
}
