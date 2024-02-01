import { pathAPI } from '@/helps/pathAPI.help';
import { ILogin } from '@/types/interfaces/login.interface';

export async function createUser(data: ILogin) {
	try {
		const response = await fetch(
			process.env.DJANGO_HOST + pathAPI.auth.createUser,
			{
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		if (response.status !== 200) {
			throw new Error(response.statusText);
		}
	} catch (error) {
		if (isApiError(error)) {
			throw new Error(`${error.message}`);
		}
		throw error;
	}
}
