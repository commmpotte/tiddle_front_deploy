'use client';
import { Button } from '@/components/Button/Button';
import { CodeInput } from '@/components/CodeInput/CodeInput';
import { Copy } from '@/components/Copy/Copy';
import { codeInformation } from '@/helps/text.help';
import { paths } from '@/helps/path.help';
import Link from 'next/link';
import styles from './CodePartner.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { PathBack } from '@/components/PathBack/PathBack';

export default function CodePartner() {
	const [disableBtn, setDisableBtn] = useState<boolean>(false);
	const router = useRouter();
	const handleCodeSubmit = async (code: string) => {
		const payload = new FormData();
		payload.append('code', code);
		if (code.length === 5) {
			setDisableBtn(true);
		} else setDisableBtn(false);
		console.log(code);
	};
	const handleNext = () => {
		router.push('/profile/edit');
	};
	return (
		<div className={styles.wrapper}>
			<PathBack url={codeInformation.urlIcon}>{codeInformation.title}</PathBack>
			<div className={styles.code}>
				<div className={styles.description}>{codeInformation.description}</div>
				<Copy text={'AWEAWQ'} />
			</div>
			<img src={codeInformation.backgroundUrl} alt="" />
			<div className={styles.code}>
				{codeInformation.alternativeCode}
				<CodeInput callback={handleCodeSubmit} />
			</div>
			<div className={styles.btnWrapper}>
				<Button
					className={classNames(styles.nextBtn, {
						[styles.enabled]: disableBtn
					})}
					onClick={handleNext}
				>
					{codeInformation.buttonText}
				</Button>
				<Link href={paths.app.skip} className={styles.link}>
					Skip for now
				</Link>
			</div>
		</div>
	);
}
