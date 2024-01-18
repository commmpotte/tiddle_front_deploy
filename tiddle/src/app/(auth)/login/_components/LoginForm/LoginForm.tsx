'use client';
import { Button } from '@/components/Button/Button';
import { Gbutton } from '@/components/Gbutton/Gbutton';
import { Htag } from '@/components/Htag/Htag';
import { Input } from '@/components/Input/Input';
import Link from 'next/link';
import styles from './LoginForm.module.scss';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Inputs = {
	identifier: string;
	password: string;
};
export function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>();
	const router = useRouter();
	const onSubmit = async (data: Inputs) => {
		const result = await signIn('credentials', data);
		if (result && !result.error) {
			router.push('/');
		} else {
			console.log(result);
		}
	};
	return (
		<div className={styles.wrapper}>
			<img src="auth/MobileLogo.png" alt="Mobile logo tiddle" className={styles.mobileLogo} />
			<img src="auth/mainLogo.svg" alt="MainMenu" className={styles.mainLogo} />
			<Htag tag="h1">Authorization</Htag>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Input
					{...register('identifier', {
						required: {
							value: true,
							message: 'Enter your email address'
						}
					})}
					placeholder="example@example.com"
					label="Email"
					error={errors.identifier}
				/>
				<Input
					{...register('password', {
						required: {
							value: true,
							message: 'Enter your email address'
						}
					})}
					placeholder="********"
					label="Password"
					error={errors.password}
				/>
				<div className={styles.wrapperRemember}>
					<label className={styles.remember}>
						<input type="checkbox" />
						Remember me
					</label>
					<Link href="#" className={styles.link}>
						Forgot password?
					</Link>
				</div>
				<Gbutton />
				<Button>Login</Button>
			</form>
			<div>
				<span>Don’t have an account? </span>
				<Link href="#" className={styles.link}>
					Sing up
				</Link>
			</div>
		</div>
	);
}
