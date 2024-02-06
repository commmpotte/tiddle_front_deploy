import { Button } from '@/components/Button/Button';
import { CardProps } from './Card.props';
import styles from './Card.module.scss';
import classNames from 'classnames';

export function Card({
	type,
	active,
	advantages,
	price,
	extend,
	secondaryText,
	...props
}: CardProps) {
	return (
		<div
			{...props}
			className={classNames(styles.wrapper, {
				[styles.active]: active
			})}
		>
			<img src={`/landing/${type}.png`} alt="" className={styles.imgType} />
			<div className={styles.textWrapper}>
				<h3 className={styles.title}>
					{type[0].toUpperCase() + type.slice(1).toLowerCase()}
				</h3>
				<ul className={styles.advantages}>
					{extend && (
						<li className={styles.extend}>
							<img src="/landing/plus.svg" alt="" />
							{extend}
						</li>
					)}
					{advantages.map((item) => (
						<li key={item} className={styles.itemAdv}>
							{item}
						</li>
					))}
				</ul>
			</div>
			<div className={styles.bottomCard}>
				<Button className={styles.btn}>{price}</Button>
				<span className={styles.bottomText}>{secondaryText}</span>
			</div>
		</div>
	);
}
