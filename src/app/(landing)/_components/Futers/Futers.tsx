'use client';
import { FutersProps } from './Futers.props';
import styles from './Futers.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MapFunction from '../MapFunction/MapFunction';
import { Tag } from '../Tag/Tag';

export function Futers({ futers, ...props }: FutersProps) {
	const [futersIndex, setFuters] = useState<number>(0);
	const variantsFuters = {
		hidden: { opacity: 0, height: 0, y: 0, x: -1000 },
		visible: { opacity: 1, height: 'auto', y: 0, x: 0 }
	};
	return (
		<div className={styles.tests} id="third-section" {...props}>
			<Tag className={styles.tag}>How does it work</Tag>
			<div className={styles.quiz}>
				{futers.map((feature, index) => (
					<motion.div
						key={index}
						variants={variantsFuters}
						animate={futersIndex === index ? 'visible' : 'hidden'}
						initial={index === 0 ? 'visible' : 'hidden'}
						transition={{
							type: 'spring',
							duration: 0.2,
							damping: 20,
							stiffness: 70
						}}
					>
						<MapFunction
							title={feature.title}
							description={feature.description}
							page={index + 1}
							totalPage={futers.length}
							className={styles.quiz}
							setDown={() => {
								if (futersIndex > 0) {
									setFuters(futersIndex - 1);
								} else {
									setFuters(futers.length - 1);
								}
							}}
							setNext={() => {
								if (futersIndex >= futers.length - 1) {
									setFuters(0);
								} else {
									setFuters(futersIndex + 1);
								}
							}}
						/>
					</motion.div>
				))}
			</div>
			<div className={styles.iphone}>
				<Image
					priority={false}
					width={754}
					height={934}
					src="/landing/iphone1.png"
					alt="An example of how the feature works"
					draggable={false}
				/>
			</div>
		</div>
	);
}
