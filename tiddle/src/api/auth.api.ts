import { IauthData } from '@/interfaces/authdata.interface';
import { isApiError } from '@/interfaces/error.interface';
export async function AuthApi(dataLogin: IauthData) {
	try {
		const data = await fetch(process.env.API_URL + '/auth/local', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(dataLogin)
		});
		const response = await data.json();
		return response;
	} catch (error) {
		if (isApiError(error)) {
			throw new Error(
				`${error.message}`
			);
		}
		throw error;
	}
}
