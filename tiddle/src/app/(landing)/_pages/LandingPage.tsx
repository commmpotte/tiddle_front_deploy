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
import { useState } from 'react';

export default function LandingPageClient({
	landingInformation
}: LandingPageProps) {
	const [futers, setFuters] = useState<number>(0);
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress);
	const variantsFuters = {
		hidden: { opacity: 0, height: 0 },
		visible: { opacity: 1, height: 'auto' }
	};
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
							<div className={styles.quiz}>
								{landingInformation.features.map((feature, index) => (
									<motion.div
										key={index}
										variants={variantsFuters}
										animate={futers === index ? 'visible' : 'hidden'}
										initial={index === 0 ? 'visible' : 'hidden'}
										// transition={{
										// 	type: 'spring',
										// 	duration: 0.2,
										// 	damping: 8,
										// 	stiffness: 100
										// }}
									>
										<MapFunction
											title={feature.title}
											description={feature.description}
											page={index + 1}
											totalPage={landingInformation.features.length}
											className={styles.quiz}
											setDown={() => {
												if (futers > 0) {
													setFuters(futers - 1);
												} else {
													setFuters(landingInformation.features.length - 1);
												}
											}}
											setNext={() => {
												if (futers >= landingInformation.features.length - 1) {
													setFuters(0);
												} else {
													setFuters(futers + 1);
												}
											}}
										/>
									</motion.div>
								))}
							</div>
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
