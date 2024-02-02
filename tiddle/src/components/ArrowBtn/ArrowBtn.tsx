'use client';
import classNames from 'classnames';
import { ArrowBtnProps } from './ArrowBtn.props';
import styles from './ArrowBtn.module.scss';
export function ArrowBtn({ arrow, className, ...props }: ArrowBtnProps) {
	return (
		<button className={classNames(styles.button, className)} {...props}>
			<img src={`/icons/${arrow}.svg`} alt="" />
		</button>
	);
}
