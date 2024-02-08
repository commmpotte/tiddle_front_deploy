import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
export function Header({ texts, ...props }: HeaderProps) {
	return (
		<div className={styles.headerWrapper} {...props}>
			<img src="/landing/header.png" alt="" />
			<div className={styles.headerText}>
				{texts.map((head) => (
					<div key={head}>{head}</div>
				))}
			</div>
		</div>
	);
}
