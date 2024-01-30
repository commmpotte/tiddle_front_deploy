'use client';
import { Button } from '../Button/Button';
import { PathBackProps } from './PathBack.props';
import styles from './PathBack.module.scss';
import { useRouter } from 'next/navigation';
import TextMain from '../TextMain/TextMain';

export function PathBack({ children, url, ...props }: PathBackProps) {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};
	return (
		<div className={styles.title} {...props}>
			<Button className={styles.back} onClick={handleBack}>
				<img src={url} alt="" />
			</Button>
			<TextMain type="title">{children}</TextMain>
		</div>
	);
}
