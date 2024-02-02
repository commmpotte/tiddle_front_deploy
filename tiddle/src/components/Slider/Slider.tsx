'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import styles from './Slider.module.scss';
import {
	DetailedHTMLProps,
	Dispatch,
	HTMLAttributes,
	SetStateAction,
	useEffect,
	useState
} from 'react';
import classNames from 'classnames';
import { sliders } from '@/helps/sliders.help';

interface SliderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentId: Dispatch<SetStateAction<number>>;
}

export function Slider({ className, currentId, ...props }: SliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	useEffect(() => {
		currentId(() => currentIndex);
	}, [currentIndex]);
	return (
		<div className={classNames(styles['slider-wrapper'], className)} {...props}>
			<Carousel
				infiniteLoop={true}
				showIndicators={false}
				dynamicHeight={false}
				autoPlay={false}
				emulateTouch={true}
				showThumbs={false}
				autoFocus={true}
				centerMode={true}
				centerSlidePercentage={50}
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
						{currentIndex !== slid.id ? (
							<img src={'/slider/' + slid.url} alt={`Slide ${slid.id + 1}`} />
						) : (
							<img
								src={'/slider/' + slid.urlCurrent}
								alt={`Slide ${slid.id + 1}`}
							/>
						)}
					</div>
				))}
			</Carousel>
		</div>
	);
}
