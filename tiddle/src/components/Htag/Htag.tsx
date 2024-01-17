import { HtagProps } from './Htag.props';
import styles from './Htag.module.scss';
import classNames from 'classnames';
export function Htag({ children, tag, type = 'text', ...props }: HtagProps) {
	const Tag = tag;
	return (
		<Tag className={classNames(styles[tag], styles[type])} {...props}>
			{children}
		</Tag>
	);
}
