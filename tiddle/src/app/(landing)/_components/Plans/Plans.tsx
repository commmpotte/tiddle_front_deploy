import { PlanProps } from './Plans.props';
import styles from './Plans.module.scss';
import { Tag } from '../Tag/Tag';
import { Card } from '../Card/Card';
export function Plans({ cards, tag, ...props }: PlanProps) {
	return (
		<div className={styles.wrapper} {...props} id="fourth-section">
			<Tag>{tag}</Tag>
			<div className={styles.cardsWrapper}>
				{cards.map((card) => (
					<Card
						key={card.plan}
						secondaryText={card.secondaryText}
						type={card.plan}
						active={card.active}
						advantages={card.advantages}
						price={card.price}
						extend={card.extend}
					/>
				))}
			</div>
		</div>
	);
}
