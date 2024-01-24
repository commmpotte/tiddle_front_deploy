'use client';
import {
	ChangeEvent,
	KeyboardEvent,
	RefObject,
	useEffect,
	useRef,
	useState
} from 'react';
import styles from './CodeInput.module.scss';
export function CodeInput({ callback }: { callback: (code: string) => void }) {
	const [code, setCode] = useState<string>('');
	const inputRefs: RefObject<HTMLInputElement>[] = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null)
	];

	useEffect(() => {
		if (code.length === 5) {
			if (typeof callback === 'function') callback(code);
		}
	}, [code]);

	function handleInput(e: ChangeEvent<HTMLInputElement>, index: number) {
		const input = e.target as HTMLInputElement;
		const previousInput = inputRefs[index - 1];
		const nextInput = inputRefs[index + 1];

		const newCode = code.split('');
		if (/^[a-z]+$/.test(input.value)) {
			const uc = input.value.toUpperCase();
			newCode[index] = uc;

			//	inputRefs[index].current.value = uc;
		} else {
			newCode[index] = input.value;
		}
		setCode(newCode.join(''));
		input.select();
		if (input.value === '') {
			if (previousInput && previousInput.current) {
				previousInput.current.focus();
			}
		} else if (nextInput && nextInput.current) {
			nextInput.current.select();
		}
	}

	function handleFocus(e: { target: { select: () => void } }) {
		e.target.select();
	}

	function handleKeyDown(e: KeyboardEvent<HTMLInputElement>, index: number) {
		const input = e.target as HTMLInputElement;
		const previousInput = inputRefs[index - 1];

		if ((e.key === '8' || e.key === '46') && input.value === '') {
			e.preventDefault();
			setCode(
				(prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1)
			);
			if (previousInput.current) {
				previousInput.current.focus();
			}
		}
	}

	const handlePaste = (e) => {
		const pastedCode = e.clipboardData.getData('text');
		if (pastedCode.length === 6) {
			setCode(pastedCode);
			inputRefs.forEach((inputRef, index) => {
				if (inputRef.current) inputRef.current.value = pastedCode.charAt(index);
			});
		}
	};

	return (
		<div className={styles.wrapper}>
			{[0, 1, 2, 3, 4].map((index) => (
				<input
					className={styles.input}
					key={index}
					type="text"
					maxLength={1}
					onChange={(e) => handleInput(e, index)}
					ref={inputRefs[index]}
					autoFocus={index === 0}
					onFocus={handleFocus}
					onKeyDown={(e) => handleKeyDown(e, index)}
					onPaste={handlePaste}
				/>
			))}
		</div>
	);
}
