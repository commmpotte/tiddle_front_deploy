import { TableProps } from './Table.props';
import styles from './Table.module.scss';
import { Tag } from '../Tag/Tag';
export function Table({ column, tag, ...props }: TableProps) {
	return (
		<div className={styles.wrapper} id="second-section">
			<Tag>{tag}</Tag>
			<div {...props} className={styles.wrapperTable}>
				{column.map((item, index) => (
					<div key={index} className={styles.column}>
						<span className={styles.index}>{index + 1}</span>
						<div className={styles.text}>
							<span className={styles.title}>{item.title}</span>
							<span className={styles.description}>{item.description}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
