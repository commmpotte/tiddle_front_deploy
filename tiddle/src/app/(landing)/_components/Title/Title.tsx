'use client';
import { TitleProps } from './Title.props';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Title.module.scss';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

export function Title({
	description,
	textLink,
	animateText,
	className,
	...props
}: TitleProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % animateText.length);
		}, 2000);

		return () => clearInterval(interval);
	}, [animateText]);

	const textVariants = {
		hidden: {
			opacity: 0,
			y: -1
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: 'easeOut'
			}
		}
	};
	return (
		<>
			<AnimatePresence>
				<h1 className={classNames(styles.Htag, className)} {...props}>
					<motion.div className={styles.textContainer}>
						{animateText.map((item, index) => (
							<motion.span
								key={index}
								variants={textVariants}
								initial="hidden"
								animate={activeIndex === index ? 'visible' : 'hidden'}
								exit="hidden"
								style={{ position: 'absolute' }}
							>
								{item}
							</motion.span>
						))}
						<br />
					</motion.div>
					<span>
						Evelate your love
						<br /> everyday with&nbsp;
					</span>
					<span className={styles.link}>{textLink}</span>
				</h1>
			</AnimatePresence>
		</>
	);
}
