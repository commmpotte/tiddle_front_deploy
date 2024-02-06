'use client';
import { useState } from 'react';
import { Button } from '@/components/Button/Button';
import { SlideToConfirm } from '@/components/SlideToConfirm/SlideToConfirm';
import { AnimatePresence, motion } from 'framer-motion';
import { PathBack } from '@/components/PathBack/PathBack';
import { Htag } from '@/components/Htag/Htag';
import TextMain from '@/components/TextMain/TextMain';
import styles from './Ready.module.scss';

export default function Ready() {
	const [ready, setReady] = useState<boolean>(true);
	const handleSlide = () => {
		setReady(!ready);
	};
	return (
		<AnimatePresence>
			<motion.div
				className={styles.wrapper}
				key="NoReady"
				initial={{ opacity: 0, x: 1000 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -1000 }}
				transition={{ duration: 0.5 }}
			>
				<PathBack>Your Partner</PathBack>
				{ready ? (
					<motion.div className={styles.avatarWrapper}>
						<div className={styles.avatar}>
							<img src="/slider/avatar1big.png" alt="" />
							Name
						</div>
						<div className={styles.textWrapper}>
							<Htag tag="h2">Your partner is ready to connect</Htag>
							<TextMain type="text">
								Start improving your relationships together right now
							</TextMain>
						</div>
					</motion.div>
				) : (
					<motion.div
						key="Ready"
						initial={{ opacity: 0, x: 1000 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -1000 }}
						transition={{ duration: 0.5 }}
						className={styles.avatarWrapper}
					>
						<div className={styles.avatarReady}>
							<img
								src="/components/backgroundReady.png"
								alt=""
								className={styles.avatarBg}
							/>
							<img src="/slider/avatar1.png" alt="" className={styles.avatar} />
							<img src="/slider/avatar2.png" alt="" className={styles.avatar} />
						</div>
						<div className={styles.textWrapper}>
							<Htag tag="h2">You are connected</Htag>
							<TextMain type="text">
								You and your partner can now start using the app together
							</TextMain>
						</div>
					</motion.div>
				)}
				<motion.div
					className={styles.btn}
					style={{
						position: 'relative'
					}}
				>
					{ready ? (
						<SlideToConfirm label="Connect" onConfirm={handleSlide} />
					) : (
						<motion.div
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5 }}
							key="Btn"
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0
							}}
						>
							<Button>Connect</Button>
						</motion.div>
					)}
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
