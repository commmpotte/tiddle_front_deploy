import { pathAPI } from '@/helps/pathAPI.help';
import { isApiError } from '@/types/interfaces/error.interface';
import { JwtToken } from '@/types/interfaces/jwt.interface';
import { ILogin } from '@/types/interfaces/login.interface';

export async function AuthApi<T>(dataLogin: ILogin): Promise<T> {
	try {
		const data = await fetch(process.env.DJANGO_HOST + pathAPI.auth.login, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(dataLogin)
		});
		const response: JwtToken = await data.json();
		return response;
	} catch (error) {
		if (isApiError(error)) {
			throw new Error(`${error.message}`);
		}
		throw error;
	}
}
