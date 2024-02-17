import { useState, useRef, useLayoutEffect, ReactNode } from 'react';
import {
	motion,
	useTransform,
	useSpring,
	useReducedMotion,
	useScroll
} from 'framer-motion';

type ParallaxProps = {
	children: ReactNode;
	offset?: number;
};

const Parallax = ({ children, offset = 50 }: ParallaxProps): JSX.Element => {
	const prefersReducedMotion = useReducedMotion();
	const [elementTop, setElementTop] = useState(0);
	const [clientHeight, setClientHeight] = useState(0);
	const ref = useRef(null);
	const { scrollY } = useScroll();
	const initial = elementTop - clientHeight;
	const final = elementTop + offset;
	const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
	const y = useSpring(yRange, { stiffness: 400, damping: 90 });

	useLayoutEffect(() => {
		const element = ref.current as HTMLElement | null;
		const onResize = () => {
			if (element) {
				setElementTop(element.getBoundingClientRect().top + window.scrollY);
			} else {
				setElementTop(window.scrollY);
			}
			setClientHeight(window.innerHeight);
		};
		onResize();
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, [ref]);

	if (prefersReducedMotion) {
		return <>{children}</>;
	}

	return (
		<motion.div ref={ref} style={{ y, width: '100%' }}>
			{children}
		</motion.div>
	);
};

export default Parallax;
