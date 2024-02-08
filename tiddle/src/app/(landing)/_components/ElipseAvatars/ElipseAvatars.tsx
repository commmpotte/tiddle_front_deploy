import { ElipseAvatarsProps } from './ElipseAvatars.props';
import styles from './ElipseAvatars.module.scss';
import { Slip } from '../Slip/Slip';
export function ElipseAvatars({ slips, ...props }: ElipseAvatarsProps) {
	return (
		<div {...props} className={styles.wrapper}>
			<img src="/landing/elipseavatar.svg" className={styles.img} alt="" />
			{slips.map((slip, index) => (
				<Slip key={index} className={styles.slip}>
					{slip}
				</Slip>
			))}
		</div>
	);
}
