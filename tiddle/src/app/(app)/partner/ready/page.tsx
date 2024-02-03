'use client';
import Swipezor from 'react-swipezor';
import styles from './page.module.scss';
import { useState } from 'react';
import { Button } from '@/components/Button/Button';

export default function ReadyPage() {
	const [reset, setReset] = useState(true);
	return (
		// <div className={styles.body}>
		// 	<a href="#">
		// 		<span>Button</span>
		// 		<span>Button</span>
		// 	</a>
		// </div>

		<>
			{reset ? (
				<Swipezor
					overlayText="Connect"
					mainText=""
					caretClassList={styles.swiperCaret}
					classList={styles.swiper}
					overlayClassList={styles.overlayWripper}
					caret={
						reset ? (
							<img src="/icons/caret.svg" alt="" className={styles.img} />
						) : (
							<></>
						)
					}
					onSwipeDone={() => {
						console.log('Done!');
						setReset(!reset);
					}}
				/>
			) : (
				<Button>Connect</Button>
			)}
		</>
	);
}
