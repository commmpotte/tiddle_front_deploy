'use client';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import classNames from 'classnames';
export function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button className={classNames(styles.button, className)} {...props}>
			{children}
		</button>
	);
}
