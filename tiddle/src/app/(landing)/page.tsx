import { landingHelp } from '@/helps/landing.help';
import { Card } from './_components/Card/Card';
import styles from './page.module.scss';
import { Title } from './_components/Title/Title';
import { Button } from '@/components/Button/Button';

export default function LandingPage() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.headerWrapper}>
				<img src="/landing/header.png" alt="" />
				<div className={styles.headerText}>
					{landingHelp.header.map((head) => (
						<div key={head}>{head}</div>
					))}
				</div>
			</div>
			<div className={styles.titleWrapper}>
				<div className={styles.title}>
					<div>What is it</div>
					<Title
						className={styles.titleText}
						description={landingHelp.title.description}
						animateText={landingHelp.title.animateText}
						textLink={landingHelp.title.textLink}
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
		</div>
	);
}
