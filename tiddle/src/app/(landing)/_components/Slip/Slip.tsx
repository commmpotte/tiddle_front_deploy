import { SlipProps } from './Slip.props';
import styles from './Slip.module.scss';
import classNames from 'classnames';
export function Slip({ children, className }: SlipProps) {
	return <div className={classNames(className, styles.slip)}>{children}</div>;
}
