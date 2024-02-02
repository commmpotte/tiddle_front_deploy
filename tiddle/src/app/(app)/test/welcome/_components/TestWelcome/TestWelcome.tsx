'use client';
import { Button } from '@/components/Button/Button';
import { Htag } from '@/components/Htag/Htag';
import { PathBack } from '@/components/PathBack/PathBack';
import TextMain from '@/components/TextMain/TextMain';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import styles from './TestWelcome.module.scss';
import classNames from 'classnames';
import { dialogText } from '@/helps/dialog.help';
import { welcomeQuestionText } from '@/helps/welcome.helps';
import { ArrowBtn } from '@/components/ArrowBtn/ArrowBtn';

export default function TestWelcome() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={styles.main}>
			<div
				className={classNames(styles.wrapper, {
					[styles.open]: isOpen
				})}
			>
				<PathBack>Attachment Style Test</PathBack>
				<div className={styles.mainWrapper}>
					<img
						src="/welcome/linkSymbol.png"
						alt=""
						className={styles.linkSymbol}
					/>
					<div>
						<Htag tag="h2">{welcomeQuestionText.title}</Htag>
						<TextMain type="text">{welcomeQuestionText.text}</TextMain>
					</div>
					<button onClick={() => setIsOpen(true)} className={styles.btnDialog}>
						Why do I need it?
					</button>
				</div>
				<Button>Start</Button>
			</div>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className={styles.dialogWrapper}
			>
				<Dialog.Panel className={styles.dialogPanel}>
					<ArrowBtn
						onClick={() => setIsOpen(false)}
						className={styles.closeBtn}
						arrow="close"
					/>
					{dialogText.map((item) => (
						<div key={item.id}>
							<TextMain type="title" className={styles.iconsText}>
								<img src="/icons/faceMonocle.svg" alt="" />
								{item.title}
							</TextMain>
							<TextMain type="text" className={styles.text}>
								{item.text}
							</TextMain>
						</div>
					))}
				</Dialog.Panel>
			</Dialog>
		</div>
	);
}
