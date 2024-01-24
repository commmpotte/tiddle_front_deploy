'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import styles from './Slider.module.scss';
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import classNames from 'classnames';
import { sliders } from '@/helps/sliders.help';

interface SliderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Slider({ className, ...props }: SliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<div className={classNames(styles['slider-wrapper'], className)} {...props}>
			<Carousel
				infiniteLoop={true}
				showIndicators={false}
				dynamicHeight={true}
				autoPlay={false}
				emulateTouch={true}
				showThumbs={false}
				autoFocus={true}
				centerMode={true}
				centerSlidePercentage={45}
				swipeable={true}
				showStatus={false}
				showArrows={false}
				useKeyboardArrows={true}
				className={styles['slider']}
				selectedItem={currentIndex}
				onChange={setCurrentIndex}
			>
				{sliders.map((slid) => (
					<div key={slid.id} className={styles.items}>
						<img
							src={'/slider/' + slid.url}
							alt={`Slide ${slid.id + 1}`}
							className={classNames({
								[styles.current]: currentIndex === slid.id
							})}
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
}
