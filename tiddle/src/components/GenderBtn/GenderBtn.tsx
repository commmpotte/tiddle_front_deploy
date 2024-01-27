import { ForwardedRef, forwardRef } from 'react';
import styles from './GenderBtn.module.scss';
import { GenderBtnProps } from './GenderBtn.page';
export const GenderBtn = forwardRef(
	(
		{ gender, ...props }: GenderBtnProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<>
				<input
					type="radio"
					className={styles.button}
					id={gender}
					ref={ref}
					value={gender}
					{...props}
				/>
				<label className={styles.gender} htmlFor={gender}>
					<img src={`/components/${gender}.svg`} alt="" />
					{gender}
				</label>
			</>
		);
	}
);
