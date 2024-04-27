import { $fetch } from '@/api/api.fetch';
import { pathAPI } from '@/helps/pathAPI.help';
import { ILogin } from '@/types/interfaces/login.interface';

export async function createUser(dataCreateUser: ILogin) {
	try {
		const data = await $fetch.post<ILogin>(
			pathAPI.auth.createUser,
			dataCreateUser
		);
		return data;
	} catch (e) {
		return Promise.reject({
			message: 'Register error, not valid data!'
		});
	}
}
