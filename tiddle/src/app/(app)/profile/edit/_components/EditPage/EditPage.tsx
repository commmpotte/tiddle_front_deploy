import { Button } from '@/components/Button/Button';
import { IconBtn } from '@/components/IconBtn/IconBtn';
import { Input } from '@/components/Input/Input';
import { PathBack } from '@/components/PathBack/PathBack';
import { Slider } from '@/components/Slider/Slider';
import { editInformation } from '@/helps/text.help';
import { useState } from 'react';
import styles from './EditPage.module.scss';
import { useForm } from 'react-hook-form';

type Inputs = {
	name: string;
	gender: string;
};
export function EditPage() {
	const [currentId, setCurrentId] = useState<number>(0);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>();

	const onSubmit = async (data: Inputs) => {
		console.log(data);
		console.log(currentId);
	};
	return (
		<div className={styles.wrapper}>
			<PathBack url={editInformation.urlIcon}>{editInformation.title}</PathBack>
			<Slider currentId={setCurrentId} />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Input
					label={editInformation.nameLabel}
					{...register('name', {
						required: {
							value: true,
							message: 'Enter your name'
						}
					})}
					error={errors.name}
					placeholder={editInformation.namePlaceholder}
				></Input>
				<div className={styles.genderWrapper}>
					<label className={styles.gender}>{editInformation.genderLabel}</label>
					<div className={styles.maleAndFemale}>
						<IconBtn icon="male" {...register('gender')} />
						<IconBtn icon="female" {...register('gender')} />
					</div>
					<label className={styles.textDecoration}>
						<input type="radio" {...register('gender')} value={'other'} />
						Other
					</label>
					<label className={styles.textDecoration}>
						<input type="radio" {...register('gender')} value={'none'} />
						I’d rather do not answer
					</label>
				</div>
				<Button className={styles.nextBtn}>{editInformation.buttonText}</Button>
			</form>
		</div>
	);
}
