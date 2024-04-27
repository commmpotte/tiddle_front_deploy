'use client';
import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import Image from 'next/image';
export function Header({ texts, ...props }: HeaderProps) {
	return (
		<div className={styles.headerWrapper} {...props}>
			<Image
				src="/landing/header.png"
				alt="Header"
				fill
				priority={true}
				draggable={false}
				unoptimized
			/>
			<div className={styles.headerText}>
				{texts.map((head) => (
					<div key={head}>{head}</div>
				))}
			</div>
		</div>
	);
}
