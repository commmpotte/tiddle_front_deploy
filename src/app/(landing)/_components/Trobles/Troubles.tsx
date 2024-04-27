import { TroublesProps } from './Troubles.props';
import styles from './Troubles.module.scss';
import classNames from 'classnames';
import { Slip } from '../Slip/Slip';
export function Troubles({
	tagH2,
	tagH3,
	secondaryH2,
	secondaryH3,
	slips,
	className
}: TroublesProps) {
	return (
		<div className={classNames(className, styles.wrapper)}>
			<div className={styles.titleWrapper}>
				<h2 className={styles.title}>{tagH2}</h2>
				<span className={styles.secondary}>{secondaryH2}</span>
			</div>
			<div className={styles.slipsWrapper}>
				{slips.map((slips, index) => (
					<Slip key={index}>{slips}</Slip>
				))}
			</div>
			<div className={styles.bottomTextWrapper}>
				<img src="/landing/imogi1.svg" alt="" />
				<h3 className={styles.titleH3}>{tagH3}</h3>
				<span className={styles.secondary}>{secondaryH3}</span>
			</div>
		</div>
	);
}
