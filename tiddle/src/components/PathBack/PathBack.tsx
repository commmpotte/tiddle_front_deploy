'use client';
import { PathBackProps } from './PathBack.props';
import styles from './PathBack.module.scss';
import { useRouter } from 'next/navigation';
import TextMain from '../TextMain/TextMain';
import { ArrowBtn } from '../ArrowBtn/ArrowBtn';

export function PathBack({ children, ...props }: PathBackProps) {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};
	return (
		<div className={styles.title} {...props}>
			<ArrowBtn arrow="arrowLeft" onClick={handleBack} />
			<TextMain type="title">{children}</TextMain>
		</div>
	);
}
