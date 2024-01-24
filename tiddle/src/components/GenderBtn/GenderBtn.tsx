import styles from './GenderBtn.module.scss';
import { GenderBtnProps } from './GenderBtn.page';
export function GenderBtn({ gender, ...props }: GenderBtnProps) {
	return (
		<button className={styles.button} {...props}>
			{gender === 'male' ? (
				<div className={styles.gender}>
					<img src="/components/male.svg" alt="" />
					Male
				</div>
			) : (
				<div className={styles.gender}>
					<img src="/components/male.svg" alt="" />
					Female
				</div>
			)}
		</button>
	);
}
