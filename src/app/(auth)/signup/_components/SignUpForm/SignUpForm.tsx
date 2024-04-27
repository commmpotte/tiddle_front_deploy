'use client';
import { Button } from '@/components/Button/Button';
import { Gbutton } from '@/components/Gbutton/Gbutton';
import { Input } from '@/components/Input/Input';
import styles from './SignUpForm.module.scss';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { createUser } from '@/api/createUser.api';
import toast from 'react-hot-toast';
import { paths } from '@/helps/path.help';

type Inputs = {
	username: string;
	password: string;
	repeatPassword: string;
};
export function SignUpForm() {
	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors }
	} = useForm<Inputs>();
	const router = useRouter();

	const onSubmit = async (data: Inputs) => {
		if (data.repeatPassword !== data.password) {
			setError('password', { message: "Passwords don't match" });
			setError('repeatPassword', { message: "Passwords don't match" });
			reset();
		} else {
			const dataNewUser = await createUser({
				username: data.username,
				password: data.password
			});
			console.log(dataNewUser);
			if (dataNewUser && !dataNewUser.error) {
				const result = await signIn('credentials', {
					username: data.username,
					password: data.password,
					redirect: false
				});

				if (result && !result.error) {
					router.push(paths.app.edit);
				} else if (result?.error) {
					toast.error(result?.error);
				}
			} else if (dataNewUser?.error) {
				toast.error(dataNewUser?.error.message);
			}
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Input
				{...register('username', {
					required: {
						value: true,
						message: 'Enter your email address'
					}
				})}
				placeholder="example@example.com"
				label="Email"
				error={errors.username}
			/>
			<Input
				{...register('password', {
					required: {
						value: true,
						message: 'Enter your password address'
					},
					minLength: 8
				})}
				type="password"
				placeholder="********"
				label="Password"
				error={errors.password}
			/>
			<Input
				{...register('repeatPassword', {
					required: {
						value: true,
						message: 'Enter your repeat password address'
					},
					minLength: 8
				})}
				type="password"
				placeholder="********"
				label="Repeat password"
				error={errors.password}
			/>
			<Gbutton />
			<Button>Sing up</Button>
		</form>
	);
}
