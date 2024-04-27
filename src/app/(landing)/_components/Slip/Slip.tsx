import { SlipProps } from './Slip.props';
import styles from './Slip.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';
export function Slip({ children, className }: SlipProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.2 }}
			whileTap={{
				scale: 0.8
			}}
			className={classNames(className, styles.slip)}
		>
			{children}
		</motion.div>
	);
}
