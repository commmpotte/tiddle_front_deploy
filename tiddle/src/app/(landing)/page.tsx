import { landingHelp } from '@/helps/landing.help';
import styles from './page.module.scss';
import { Header } from './_components/Header/Header';
import { WhatIsIt } from './_components/WhatIsIt/WhatIsIt';
import { Troubles } from './_components/Trobles/Troubles';
import { ElipseAvatars } from './_components/ElipseAvatars/ElipseAvatars';
import { Table } from './_components/Table/Table';
import { Plans } from './_components/Plans/Plans';
import { Tag } from './_components/Tag/Tag';
import { Faq } from './_components/Faq/Faq';
import { Contact } from './_components/Contact/Contact';

export default function LandingPage() {
	return (
		<div className={styles.main}>
			<div className={styles.wrapper}>
				<Header texts={landingHelp.header}></Header>
				<WhatIsIt
					tag={landingHelp.title.tag}
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
				<ElipseAvatars
					tag={landingHelp.whyTiddle.tag}
					slips={landingHelp.whyTiddle.text}
				/>
				<Table tag={landingHelp.table.tag} column={landingHelp.table.columns} />
			</div>
			<div className={styles.hditWrapper}>
				<div className={styles.wrapper}>
					<div className={styles.tests}>
						<Tag className={styles.tag}>How does it work</Tag>
						<img src="/landing/plug.png" alt="" className={styles.quiz} />
						<div className={styles.iphone}>
							<img src="/landing/iphone1.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.wrapperBottom}>
				<Plans tag={landingHelp.plans.tag} cards={landingHelp.plans.card} />
				<Faq cards={landingHelp.faq} />
				<Contact
					links={landingHelp.contact.links}
					social={landingHelp.contact.social}
				/>
			</div>
		</div>
	);
}
