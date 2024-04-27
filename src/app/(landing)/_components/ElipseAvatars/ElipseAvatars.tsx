import { ElipseAvatarsProps } from './ElipseAvatars.props';
import styles from './ElipseAvatars.module.scss';
import { Slip } from '../Slip/Slip';
import { Tag } from '../Tag/Tag';
import Image from 'next/image';
export function ElipseAvatars({ slips, tag, ...props }: ElipseAvatarsProps) {
	return (
		<div className={styles.avatars} id="first-section">
			<Tag>{tag}</Tag>
			<div {...props} className={styles.wrapper}>
				<Image
					priority={false}
					fill={true}
					src="/landing/elipseavatar.svg"
					className={styles.img}
					alt="avatars background"
					draggable={false}
				/>
				{slips.map((slip, index) => (
					<Slip key={index} className={styles.slip}>
						{slip}
					</Slip>
				))}
			</div>
		</div>
	);
}
