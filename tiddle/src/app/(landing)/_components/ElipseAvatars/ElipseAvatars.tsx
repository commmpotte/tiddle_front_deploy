import { ElipseAvatarsProps } from './ElipseAvatars.props';
import styles from './ElipseAvatars.module.scss';
import { Slip } from '../Slip/Slip';
import { Tag } from '../Tag/Tag';
export function ElipseAvatars({ slips, tag, ...props }: ElipseAvatarsProps) {
	return (
		<div className={styles.avatars}>
			<Tag>{tag}</Tag>
			<div {...props} className={styles.wrapper}>
				<img src="/landing/elipseavatar.svg" className={styles.img} alt="" />
				{slips.map((slip, index) => (
					<Slip key={index} className={styles.slip}>
						{slip}
					</Slip>
				))}
			</div>
		</div>
	);
}
