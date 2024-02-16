import React from 'react';
import styles from './MapFunction.scss';
import { MapFunctionProps } from './MapFunction.props';

export default function MapFunction({
	title,
	description,
	page,
	totalPage,
	...props
}: MapFunctionProps) {
	return (
		<div {...props}>
			<span>{title}</span>
			<p>{description}</p>
			<div>
				arrowleft
				<span>
					{page}/{totalPage}
				</span>
				arrowright
			</div>
		</div>
	);
}
