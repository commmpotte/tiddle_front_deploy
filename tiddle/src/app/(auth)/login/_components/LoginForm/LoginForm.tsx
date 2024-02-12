'use client';
import { Button } from '@/components/Button/Button';
import { Gbutton } from '@/components/Gbutton/Gbutton';
import { Input } from '@/components/Input/Input';
import Link from 'next/link';
import styles from './LoginForm.module.scss';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

type Inputs = {
	username: string;
	password: string;
};
export function LoginForm() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors }
	} = useForm<Inputs>();
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const onSubmit = async (data: Inputs) => {
		const result = await signIn('credentials', {
			username: data.username,
			password: data.password,
			redirect: false
		});
		if (result && !result.error) {
			const callback = searchParams.get('callbackUrl');
			router.push(callback ? callback : '/');
		} else if (result?.error) {
			toast.error(result?.error);
			setError('username', { type: 'error', message: result.error });
			setError('password', { type: 'error', message: result.error });
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
					}
				})}
				placeholder="********"
				label="Password"
				type="password"
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
	);
}
