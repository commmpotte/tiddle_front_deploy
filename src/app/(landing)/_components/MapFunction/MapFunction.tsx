import React from 'react';
import styles from './MapFunction.module.scss';
import { MapFunctionProps } from './MapFunction.props';
import classNames from 'classnames';
import { CardButton } from '../CardButton/CardButton';

export default function MapFunction({
	title,
	description,
	page,
	totalPage,
	className,
	setNext,
	setDown,
	...props
}: MapFunctionProps) {
	return (
		<div className={classNames(className, styles.wrapper)} {...props}>
			<div className={styles.textWrapper}>
				<span className={styles.title}>{title}</span>
				<span className={styles.description}>{description}</span>
			</div>
			<div className={styles.wrapperBtn}>
				<CardButton arrow="arrowLeft" onClick={setDown} />
				<span className={styles.numbers}>
					{page}/{totalPage}
				</span>
				<CardButton arrow="arrowRight" onClick={setNext} />
			</div>
		</div>
	);
}
