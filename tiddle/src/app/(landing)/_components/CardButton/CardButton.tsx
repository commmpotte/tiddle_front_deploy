'use client';
import classNames from 'classnames';
import styles from './CardButton.module.scss';
import { CardButtonProps } from './CardButton.props';
export function CardButton({ arrow, className, ...props }: CardButtonProps) {
	return (
		<button className={classNames(styles.button, className)} {...props}>
			<img src={`/landing/${arrow}.svg`} alt="" />
		</button>
	);
}
