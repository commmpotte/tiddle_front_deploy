'use client';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import styles from './FaqCard.module.scss';
import { FaqCardProps } from './FaqCard.props';

export const FaqCard = motion(
	forwardRef(
		(
			{ title, description, ...props }: FaqCardProps,
			ref: ForwardedRef<HTMLDivElement>
		): JSX.Element => {
			const [active, setActive] = useState<boolean>(false);
			const reviewRef = useRef<HTMLDivElement>(null);

			const variants = {
				visible: {
					opacity: 1,
					height: 'auto',
					overflow: 'visible',
					marginTop: '40px'
				},
				hidden: {
					opacity: 0,
					height: 0,
					overflow: 'hidden',
					marginTop: '0'
				}
			};
			const variantsArrow = {
				top: { rotate: -180 },
				bottom: {
					rotate: 0
				}
			};

			useEffect(() => {
				if (active) {
					reviewRef.current?.scrollIntoView({
						behavior: 'smooth',
						block: 'center'
					});
					reviewRef.current?.focus();
				}
			}, [active]);

			const scrollToReview = () => {
				setActive(!active);
			};
			return (
				<div
					className={classNames(styles.faq, {
						[styles.active]: active
					})}
					ref={ref}
					{...props}
					onClick={scrollToReview}
				>
					<div className={styles.faqControl} ref={reviewRef}>
						<img
							src="/landing/question.svg"
							alt=""
							className={styles.question}
						/>
						<span className={styles.text}>{title}</span>
						<motion.img
							animate={active ? 'top' : 'bottom'}
							variants={variantsArrow}
							initial="hidden"
							src="/landing/arrowDown.svg"
							alt=""
							className={styles.arrow}
						/>
					</div>
					<motion.div
						className={styles.faqDescription}
						animate={active ? 'visible' : 'hidden'}
						variants={variants}
						initial="hidden"
						transition={{
							type: 'spring',
							duration: 0.2,
							damping: 8,
							stiffness: 100
						}}
					>
						{description}
					</motion.div>
				</div>
			);
		}
	)
);
