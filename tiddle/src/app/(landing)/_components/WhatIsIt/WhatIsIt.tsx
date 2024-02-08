import { WhatIsItProps } from './WhatIsIt.props';
import styles from './WhatIsIt.module.scss';
import { Button } from '@/components/Button/Button';
import { Title } from '../Title/Title';
export function WhatIsIt({
	description,
	animateText,
	textLink,
	...props
}: WhatIsItProps) {
	return (
		<div className={styles.titleWrapper} {...props}>
			<div className={styles.title}>
				<div>What is it</div>
				<Title
					className={styles.titleText}
					description={description}
					animateText={animateText}
					textLink={textLink}
				/>
				<div className={styles.btn}>
					<img src="/landing/standard.png" alt="" className={styles.fire} />
					<Button>Try now</Button>
				</div>
			</div>
			<div className={styles.phones}>
				<img src="/landing/phones.png" alt="" className={styles.imgPhones} />
			</div>
		</div>
	);
}
