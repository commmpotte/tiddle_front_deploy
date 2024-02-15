import { WhatIsItProps } from './WhatIsIt.props';
import styles from './WhatIsIt.module.scss';
import { Button } from '@/components/Button/Button';
import { Title } from '../Title/Title';
import { Tag } from '../Tag/Tag';
export function WhatIsIt({
	description,
	animateText,
	textLink,
	tag,
	...props
}: WhatIsItProps) {
	return (
		<div className={styles.titleWrapper} {...props}>
			<div className={styles.title}>
				<Tag className={styles.tag}>{tag}</Tag>
				<Title
					className={styles.titleText}
					description={description}
					animateText={animateText}
					textLink={textLink}
				/>
				<div className={styles.btnWrapper}>
					<img src="/landing/standard.png" alt="" className={styles.fire} />
					<Button className={styles.button}>Try now</Button>
				</div>
			</div>
			<div className={styles.phones}>
				<img src="/landing/phones.png" alt="" className={styles.imgPhones} />
			</div>
		</div>
	);
}
