'use client';
import { Button } from '@/components/Button/Button';
import { Htag } from '@/components/Htag/Htag';
import { IconBtn } from '@/components/IconBtn/IconBtn';
import TextMain from '@/components/TextMain/TextMain';
import { paths } from '@/helps/path.help';
import Link from 'next/link';
import styles from './page.module.scss';
import { questionStatus } from '@/helps/questionStatus.help';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Skip } from '@/components/Skip/Skip';

type Inputs = {
	relationship: string;
	life: string;
	kids: string;
};
export default function StatusPage() {
	const [questionProgress, setQuestionProgress] = useState<number>(0);
	const [selectedQuestion, setSelectedQuestion] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>();
	const onSubmit = async (data: Inputs) => {
		if (questionProgress < 2) {
			setQuestionProgress(() => questionProgress + 1);
			setSelectedQuestion(false);
		} else {
			console.log(data);
		}
	};
	const handleClickItem = () => {
		setSelectedQuestion(true);
	};
	return (
		<div className={styles.wrapper}>
			<TextMain type="title">Quick survey</TextMain>
			<div className={styles.text}>
				<div className={styles.progress}>
					<img
						src={`/icons/circuleProgress${questionStatus[questionProgress].id}.svg`}
						alt=""
					/>
					{questionStatus[questionProgress].id}/3
				</div>
				<Htag tag="h2">{questionStatus[questionProgress].title}</Htag>
				<TextMain type="text">
					{questionStatus[questionProgress].description}
				</TextMain>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
				<div className={styles.form}>
					{questionStatus[questionProgress].checkbox.map((item) => (
						<IconBtn
							className={styles.item}
							key={item}
							icon={item}
							onClick={handleClickItem}
							{...register(questionStatus[questionProgress].checkStatus)}
						/>
					))}
				</div>
				<div className={styles.linkWrapper}>
					<Button
						status={selectedQuestion ? 'active' : 'disabled'}
						className={styles.Btn}
					>
						{questionStatus[questionProgress].btnName}
					</Button>
					<Skip href={paths.app.skip}>Skip for now</Skip>
				</div>
			</form>
		</div>
	);
}
