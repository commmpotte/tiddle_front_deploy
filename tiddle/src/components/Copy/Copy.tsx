import { CopyProps } from './Copy.props';
import styles from './Copy.module.scss';

export function Copy({ text, ...props }: CopyProps) {
	const handlerClick = () => {
		navigator.clipboard.writeText(text);
	};
	return (
		<div {...props} className={styles.wrapper}>
			{text}
			<button className={styles.btn} onClick={handlerClick}>
				<img src="/components/copy.svg" alt="" />
			</button>
		</div>
	);
}
