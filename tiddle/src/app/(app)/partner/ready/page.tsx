'use client';
import { useState } from 'react';
import { Button } from '@/components/Button/Button';
import { SlideToConfirm } from '@/components/SlideToConfirm/SlideToConfirm';
import { AnimatePresence, motion } from 'framer-motion';
import { PathBack } from '@/components/PathBack/PathBack';
import { Htag } from '@/components/Htag/Htag';
import TextMain from '@/components/TextMain/TextMain';

export default function ReadyPage() {
	const [reset, setReset] = useState(true);
	return (
		<>
			<PathBack>Your Partner</PathBack>
			<div>
				<div>
					<img src="/slider/avatar1big.png" alt="" />
					Name
				</div>
				<Htag tag="h2">Your partner is ready to connect</Htag>
				<TextMain type="text">
					Start improving your relationships together right now{' '}
				</TextMain>
			</div>
			<motion.div
				style={{
					position: 'relative'
				}}
			>
				<AnimatePresence>
					{reset ? (
						<SlideToConfirm
							label="Connect"
							onConfirm={() => {
								setReset(!reset);
							}}
						/>
					) : (
						<motion.div
							initial={{ opacity: 0, x: 1000 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -1000 }}
							transition={{ duration: 0.5 }}
							key="Btn"
						//	initial={{ opacity: 0 }}
						//	animate={{ opacity: 1 }}
						//	exit={{ opacity: 0 }}
						//	transition={{ duration: 1, ease: 'easeOut' }}
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
				</AnimatePresence>
			</motion.div>
		</>
	);
}
