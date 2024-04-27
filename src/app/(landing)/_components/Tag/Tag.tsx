'use client';
import { TagProps } from './Tag.props';
import styles from './Tag.module.scss';
import classNames from 'classnames';

export function Tag({ children, className, ...props }: TagProps) {
	return (
		<div className={classNames(styles.tag, className)} {...props}>
			{children}
		</div>
	);
}
