import { ForwardedRef, forwardRef } from 'react';
import styles from './IconBtn.module.scss';
import { IconBtnProps } from './IconBtn.page';
import classNames from 'classnames';
export const IconBtn = forwardRef(
	({ icon, className, ...props }: IconBtnProps, ref: ForwardedRef<HTMLInputElement>) => {
		return (
			<>
				<input
					type="radio"
					className={styles.button}
					id={icon}
					ref={ref}
					value={icon}
					{...props}
				/>
				<label className={classNames(styles.gender, className)} htmlFor={icon}>
					<img src={`/components/${icon}.svg`} alt="" />
					{icon[0].toUpperCase() + icon.slice(1).toLowerCase()}
				</label>
			</>
		);
	}
);
