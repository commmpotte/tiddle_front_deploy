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
	const [widthX, setX] = useState(0);
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
			setX(x < RIGHTS_OFFSET ? x : RIGHTS_OFFSET);
		}
	};

	const handleTouchEnd = (event: any, info: PanInfo) => {
		if (info.offset.x >= RIGHTS_OFFSET * 0.6) {
			setX(RIGHTS_OFFSET);
			onConfirm();
		} else {
			setX(0);
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
				className={styles.toggle}
				initial={{ x: 0 }}
				transition={{ ease: 'linear', duration: 0.2 }}
				exit={{ x: RIGHTS_OFFSET }}
				animate={{ x: widthX }}
				onPan={handleTouchStart}
				onPanEnd={handleTouchEnd}
				style={{
					touchAction: 'none'
				}}
				whileHover={{ height: '62px' }}
			>
				<motion.div>{label}</motion.div>
				<motion.span>
					<img src="/icons/caret.svg" alt="" />
				</motion.span>
			</motion.div>
		</motion.div>
	);
}
