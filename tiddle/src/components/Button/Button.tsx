'use client';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import classNames from 'classnames';
export function Button({
	children,
	status = 'active',
	className,
	...props
}: ButtonProps) {
	return (
		<button
			className={classNames(styles.button, className, {
				[styles.active]: status === 'active',
				[styles.disabled]: status === 'disabled'
			})}
			{...props}
		>
			{children}
		</button>
	);
}
