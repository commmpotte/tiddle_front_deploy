'use client';
import { CodeInput } from '@/components/CodeInput/CodeInput';
import { GenderBtn } from '@/components/GenderBtn/GenderBtn';

export default function Edit() {
	const handleCodeSubmit = async (code: string) => {
		const payload = new FormData();
		payload.append('code', code);
		console.log(code);
	};
	return (
		<>
			<GenderBtn gender="male" />
			<GenderBtn gender="female" />
			<CodeInput
				callback={handleCodeSubmit}
			/>
		</>
	);
}
