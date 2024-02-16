'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
	Contact,
	ElipseAvatars,
	Faq,
	Header,
	Plans,
	Table,
	Tag,
	Troubles,
	WhatIsIt
} from '../_components';
import styles from './LandingPage.module.scss';
import { LandingPageProps } from './LandingPage.props';
import MapFunction from '../_components/MapFunction/MapFunction';

export default function LandingPageClient({
	landingInformation
}: LandingPageProps) {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress);
	return (
		<>
			<motion.div className={styles.progressBar} style={{ scaleX }} />
			<div className={styles.main}>
				<div className={styles.wrapper}>
					<Header texts={landingInformation.header}></Header>
					<WhatIsIt
						tag={landingInformation.title.tag}
						description={landingInformation.title.description}
						animateText={landingInformation.title.animateText}
						textLink={landingInformation.title.textLink}
					/>
					<Troubles
						tagH2={landingInformation.trobles.h2}
						tagH3={landingInformation.trobles.h3}
						secondaryH2={landingInformation.trobles.secondaryTextH2}
						secondaryH3={landingInformation.trobles.secondaryTextH3}
						slips={landingInformation.trobles.slips}
					/>
					<ElipseAvatars
						tag={landingInformation.whyTiddle.tag}
						slips={landingInformation.whyTiddle.text}
					/>
					<Table
						tag={landingInformation.table.tag}
						column={landingInformation.table.columns}
					/>
				</div>
				<div className={styles.hditWrapper}>
					<div className={styles.wrapper}>
						<div className={styles.tests} id="third-section">
							<Tag className={styles.tag}>How does it work</Tag>
							<MapFunction
								title="AI conflict mediator"
								description="The conflict mediator acts as a neutral side to the quarrel, helping the partners to talk it out, restore dialogue and emotional connection, as well as identify the roots of the conflict and reconcile."
								page={1}
								totalPage={6}
								className={styles.quiz}
							/>
							{/* <img src="/landing/plug.png" alt="" className={styles.quiz} /> */}
							<div className={styles.iphone}>
								<img src="/landing/iphone1.png" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.wrapperBottom}>
					<Plans
						tag={landingInformation.plans.tag}
						cards={landingInformation.plans.card}
					/>
					<Faq cards={landingInformation.faq} />
					<Contact
						links={landingInformation.contact.links}
						social={landingInformation.contact.social}
					/>
				</div>
			</div>
		</>
	);
}
