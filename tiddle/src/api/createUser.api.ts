import { pathAPI } from '@/helps/pathAPI.help';
import { isApiError } from '@/types/interfaces/error.interface';
import { ILogin } from '@/types/interfaces/login.interface';

export async function createUser(dataCreateUser: ILogin) {
	try {
		console.log(process.env.NEXT_PUBLIC_DJANGO_HOST + pathAPI.auth.login);
		const data = await fetch(
			process.env.NEXT_PUBLIC_DJANGO_HOST + pathAPI.auth.createUser,
			{
				method: 'POST',
				body: JSON.stringify(dataCreateUser),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const response: ILogin = await data.json();
		if (!data.ok) {
			throw new Error(data.statusText);
		}
		return response;
	} catch (error) {
		if (isApiError(error)) {
			throw new Error(`${error.message}`);
		}
		throw error;
	}
}
