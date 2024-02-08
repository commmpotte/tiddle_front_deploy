import { landingHelp } from '@/helps/landing.help';
import { Card } from './_components/Card/Card';
import styles from './page.module.scss';
import { Header } from './_components/Header/Header';
import { WhatIsIt } from './_components/WhatIsIt/WhatIsIt';
import { Troubles } from './_components/Trobles/Troubles';
import { ElipseAvatars } from './_components/ElipseAvatars/ElipseAvatars';

export default function LandingPage() {
	return (
		<div className={styles.wrapper}>
			<Header texts={landingHelp.header}></Header>
			<WhatIsIt
				description={landingHelp.title.description}
				animateText={landingHelp.title.animateText}
				textLink={landingHelp.title.textLink}
			/>
			<Troubles
				tagH2={landingHelp.trobles.h2}
				tagH3={landingHelp.trobles.h3}
				secondaryH2={landingHelp.trobles.secondaryTextH2}
				secondaryH3={landingHelp.trobles.secondaryTextH3}
				slips={landingHelp.trobles.slips}
			/>
			<ElipseAvatars slips={landingHelp.whyTiddle} />
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
