'use client';
import { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.scss';
import classNames from 'classnames';

export const Input = forwardRef(
	(
		{ error, label, type, placeholder, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<div className={styles.wrapper}>
				<label className={styles.label} htmlFor={type}>
					{label}
				</label>
				<input
					type={type}
					ref={ref}
					placeholder={placeholder}
					{...props}
					className={classNames(styles.input, {
						[styles.error]: error
					})}
				/>
				{error && <span>{error.message}</span>}
			</div>
		);
	}
);
