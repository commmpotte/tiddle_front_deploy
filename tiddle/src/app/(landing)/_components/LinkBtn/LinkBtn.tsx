'use client';
import { LinkBtnProps } from './LinkBtn.props';
import styles from './LinkBtn.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
export function LinkBtn({
	children = '',
	className,
	urls,
	social = false,
	design = false,
	...props
}: LinkBtnProps) {
	return (
		<Link
			href={urls}
			scroll={true}
			className={classNames(className, {
				[styles.social]: social,
				[styles.design]: design,
				[styles.button]: !social
			})}
			{...props}
		>
			{!social && children}
			{social && (
				<Image
					draggable={false}
					fill={true}
					unoptimized
					priority={false}
					src={`/landing/social/${children}.svg`}
					alt={`social ${children}`}
				/>
			)}
		</Link>
	);
}
