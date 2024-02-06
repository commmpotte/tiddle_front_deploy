import { landingHelp } from '@/helps/landing.help';
import { Card } from './_components/Card/Card';
import styles from './page.module.scss'

export default function LandingPage() {
	return (
		<div className={styles.cardsWrapper}>
			{landingHelp.card.map((card) => (
				<Card
					key={card.plan}
					secondaryText={card.secondaryText}
					type={card.plan}
					active={card.active}
					advantages={card.advantages}
					price={card.price}
					extend={card.extend}
				></Card>
			))}
		</div>
	);
}
