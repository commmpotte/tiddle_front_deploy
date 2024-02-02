import Link from 'next/link';
import { SkipProps } from './Skip.props';
import styles from './Skip.module.scss';
import classNames from 'classnames';

export function Skip({ children, href, className, ...props }: SkipProps) {
	return (
		<Link href={href} className={classNames(styles.link, className)} {...props}>
			{children}
		</Link>
	);
}
