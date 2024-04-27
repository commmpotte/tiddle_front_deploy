'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
	Contact,
	ElipseAvatars,
	Faq,
	Header,
	Plans,
	Table,
	Troubles,
	WhatIsIt
} from '../_components';
import styles from './LandingPage.module.scss';
import { LandingPageProps } from './LandingPage.props';
import { Futers } from '../_components/Futers/Futers';
import Parallax from '../_components/Parallax/Parallax';

export default function LandingPageClient({
	landingInformation
}: LandingPageProps) {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress);

	return (
		<>
			<motion.div className={styles.progressBar} style={{ scaleX }} />
			<motion.div
				// initial={{ x: -1000, opacity: 0 }}
				// animate={{ x: 0, opacity: 1 }}
				// exit={{ opacity: 0, x: 1000 }}
				// transition={{
				// 	type: 'spring',
				// 	duration: 0.2,
				// 	damping: 20,
				// 	stiffness: 100
				// }}
				className={styles.main}
			>
				<div className={styles.wrapper}>
					<Header texts={landingInformation.header}></Header>
					<Parallax>
						<WhatIsIt
							tag={landingInformation.title.tag}
							description={landingInformation.title.description}
							animateText={landingInformation.title.animateText}
							textLink={landingInformation.title.textLink}
						/>
					</Parallax>
					<Parallax>
						<Troubles
							tagH2={landingInformation.trobles.h2}
							tagH3={landingInformation.trobles.h3}
							secondaryH2={landingInformation.trobles.secondaryTextH2}
							secondaryH3={landingInformation.trobles.secondaryTextH3}
							slips={landingInformation.trobles.slips}
						/>
					</Parallax>
					<Parallax>
						<ElipseAvatars
							tag={landingInformation.whyTiddle.tag}
							slips={landingInformation.whyTiddle.text}
						/>
					</Parallax>
					<Table
						tag={landingInformation.table.tag}
						column={landingInformation.table.columns}
					/>
				</div>
				<div className={styles.hditWrapper}>
					<div className={styles.wrapper}>
						<Parallax>
							<Futers futers={landingInformation.features} />
						</Parallax>
					</div>
				</div>
				<div className={styles.wrapperBottom}>
					<Parallax>
						<Plans
							tag={landingInformation.plans.tag}
							cards={landingInformation.plans.card}
						/>
					</Parallax>
					<Faq cards={landingInformation.faq} />
					<Parallax>
						<Contact
							links={landingInformation.contact.links}
							social={landingInformation.contact.social}
						/>
					</Parallax>
				</div>
			</motion.div>
		</>
	);
}
