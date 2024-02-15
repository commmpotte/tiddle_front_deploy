'use client';
import styles from './Faq.module.scss';
import { FaqProps } from './Faq.props';

import { FaqCard } from '../FaqCard/FaqCard';
import { useReducedMotion } from 'framer-motion';
import { Tag } from '../Tag/Tag';
export function Faq({ cards, ...props }: FaqProps) {
	const shouldReduceMotion = useReducedMotion();
	return (
		<div className={styles.wrapper} id="fifth-section">
			<Tag>FAQ</Tag>
			<div className={styles.faqWrapper} {...props} role="list">
				{cards.map((card, index) => (
					<FaqCard
						key={index}
						layout={shouldReduceMotion ? false : true}
						role="listitem"
						title={card.title}
						description={card.description}
					/>
				))}
			</div>
		</div>
	);
}
