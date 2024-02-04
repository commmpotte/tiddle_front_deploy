'use client';
import { PanInfo, motion, useAnimation } from 'framer-motion';
import styles from './SliderToConfirm.module.scss';
import { useEffect, useRef, useState } from 'react';

type Props = {
	label: string;
	onConfirm: () => void;
};
let RIGHTS_OFFSET = 0;
const START_POSITION = 110;
export function SlideToConfirm({ label, onConfirm }: Props) {
	const controls = useAnimation();
	const componentRef = useRef(null);

	useEffect(() => {
		if (componentRef.current) {
			RIGHTS_OFFSET = componentRef.current.offsetWidth - START_POSITION;
			console.log(RIGHTS_OFFSET);
		}
	}, []);

	const handleTouchStart = (event: any, info: PanInfo) => {
		const x = info.offset.x;
		if (x >= 0) {
			controls.set({ x: x < RIGHTS_OFFSET ? x : RIGHTS_OFFSET });
		}
	};

	const handleTouchEnd = (event: any, info: PanInfo) => {
		if (info.offset.x >= RIGHTS_OFFSET * 0.6) {
			controls.set({ x: RIGHTS_OFFSET });
			onConfirm();
		} else {
			controls.start({ x: 0 });
		}
	};
	return (
		<motion.div
			className={styles.slide}
			ref={componentRef}
			whileHover={{ height: '62px' }}
		>
			<span></span>

			<motion.div
				drag="x"
				dragConstraints={componentRef}
				className={styles.toggle}
				onPan={handleTouchStart}
				onPanEnd={handleTouchEnd}
				style={{
					touchAction: 'none'
				}}
				whileHover={{ height: '62px' }}
				animate={controls}
			>
				<motion.div>{label}</motion.div>
				<motion.span>
					<img src="/icons/caret.svg" alt="" />
				</motion.span>
			</motion.div>
		</motion.div>
	);
}
