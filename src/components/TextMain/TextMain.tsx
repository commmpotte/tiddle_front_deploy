import { TextMainProps } from './TextMain.props';
import styles from './TextMain.module.scss';
import classNames from 'classnames';

export default function TextMain({
	children,
	type,
	className,
	...props
}: TextMainProps) {
	return (
		<p
			className={classNames(className, {
				[styles.title]: type === 'title',
				[styles.text]: type === 'text'
			})}
			{...props}
		>
			{children}
		</p>
	);
}
