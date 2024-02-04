'use client';
import { useState } from 'react';
import { Button } from '@/components/Button/Button';
import { SlideToConfirm } from '@/components/SlideToConfirm/SlideToConfirm';
import { AnimatePresence, motion } from 'framer-motion';

export default function ReadyPage() {
	const [reset, setReset] = useState(true);
	return (
		<motion.div>
			<AnimatePresence>
				{reset ? (
					<motion.div
						key="sliderBtn"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1, ease: 'easeIn' }}
					>
						<SlideToConfirm
							label="Connect"
							onConfirm={() => {
								setReset(!reset);
							}}
						/>
					</motion.div>
				) : (
					<motion.div
						key="Btn"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1, ease: 'easeOut' }}
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
	);
}
