'use client';
import { BtnLinkProps } from './BtnLink.props';
import styles from './Button.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
export function BtnLink({
	children,
	status = 'active',
	className,
	urls,
	...props
}: BtnLinkProps) {
	return (
		<Link
			href={urls}
			className={classNames(styles.button, className, {
				[styles.active]: status === 'active',
				[styles.disabled]: status === 'disabled'
			})}
			{...props}
		>
			{children}
		</Link>
	);
}
