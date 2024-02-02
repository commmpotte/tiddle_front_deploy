// import { pathAPI } from '@/helps/pathAPI.help';
// import { isApiError } from '@/types/interfaces/error.interface';

// export async function editProfile(dataUpdateUser) {
// 	try {
// 		console.log(process.env.NEXT_PUBLIC_DJANGO_HOST + pathAPI.auth.login);
// 		const data = await fetch(
// 			process.env.NEXT_PUBLIC_DJANGO_HOST +
// 				pathAPI.app.profile.edit +
// 				`/${dataUpdateUser.id}`,
// 			{
// 				method: 'POST',
// 				body: JSON.stringify(dataUpdateUser),
// 				headers: {
// 					'Content-Type': 'application/json'
// 				}
// 			}
// 		);
// 		const response = await data.json();

// 		if (!data.ok) {
// 			throw new Error(data.statusText);
// 		}
// 		return response;
// 	} catch (error) {
// 		if (isApiError(error)) {
// 			throw new Error(`${error.message}`);
// 		}
// 		throw error;
// 	}
// }
