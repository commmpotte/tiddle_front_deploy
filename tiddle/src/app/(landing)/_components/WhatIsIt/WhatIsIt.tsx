import { WhatIsItProps } from './WhatIsIt.props';
import styles from './WhatIsIt.module.scss';
import { Button } from '@/components/Button/Button';
import { Title } from '../Title/Title';
import { Tag } from '../Tag/Tag';
import Image from 'next/image';
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
					<Image
						width={37}
						height={37}
						draggable={false}
						src="/landing/standard.png"
						alt=""
						className={styles.fire}
					/>
					<Button className={styles.button}>Try now</Button>
				</div>
			</div>
			<div className={styles.phones}>
				<Image
					width={900}
					height={775}
					src="/landing/phones.png"
					alt="Iphone phone on the title"
					className={styles.imgPhones}
					draggable={false}
				/>
			</div>
		</div>
	);
}
