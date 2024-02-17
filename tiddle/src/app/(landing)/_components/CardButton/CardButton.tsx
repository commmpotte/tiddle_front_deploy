'use client';
import classNames from 'classnames';
import styles from './CardButton.module.scss';
import { CardButtonProps } from './CardButton.props';
import Image from 'next/image';
export function CardButton({ arrow, className, ...props }: CardButtonProps) {
	return (
		<button className={classNames(styles.button, className)} {...props}>
			<Image
				width={24}
				height={24}
				src={`/landing/${arrow}.svg`}
				alt={`${arrow}`}
				draggable={false}
				priority={false}
				unoptimized
			/>
		</button>
	);
}
