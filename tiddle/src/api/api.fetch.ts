class FetchClient {
	private API_URL = process.env.NEXT_PUBLIC_DJANGO_HOST as string;

	constructor(private defaultHeaders: Record<string, string> = {}) {}

	async get<T>(
		path: string,
		isAuth: boolean = false,
		headers?: Record<string, string>,
		token: string = ''
	): Promise<T> {
		return this.fetch<T>(path, 'GET', isAuth, undefined, headers, token);
	}

	async post<T>(
		path: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		body?: Record<string, any>,
		isAuth: boolean = false,
		headers?: Record<string, string>,
		token: string = ''
	): Promise<T> {
		return this.fetch<T>(path, 'POST', isAuth, body, headers, token);
	}

	async put<T>(
		path: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		body?: Record<string, any>,
		isAuth: boolean = false,
		headers?: Record<string, string>,
		token: string = ''
	): Promise<T> {
		return this.fetch<T>(path, 'PUT', isAuth, body, headers, token);
	}

	async delete<T>(
		path: string,
		isAuth: boolean = false,
		headers?: Record<string, string>,
		token: string = ''
	): Promise<T> {
		return this.fetch<T>(path, 'DELETE', isAuth, undefined, headers, token);
	}

	async patch<T>(
		path: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		body?: Record<string, any>,
		isAuth: boolean = false,
		headers?: Record<string, string>,
		token: string = ''
	): Promise<T> {
		return this.fetch<T>(path, 'PATCH', isAuth, body, headers, token);
	}

	private async fetch<T>(
		path: string,
		method: string,
		isAuth: boolean,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		body?: Record<string, any>,
		headers?: Record<string, string>,
		token?: string
	): Promise<T> {
		const url = `${this.API_URL}${path}`;

		const authorizationHeader: HeadersInit = isAuth
			? { Authorization: `Bearer ${token}` }
			: {};

		// eslint-disable-next-line no-useless-catch
		try {
			const response = await fetch(url, {
				method,
				headers: {
					'Content-Type': 'application/json',
					...this.defaultHeaders,
					...authorizationHeader,
					...headers
				},
				body: body ? JSON.stringify(body) : null
			});

			const data = await response.json();
			console.log(data);
			if (!response.ok) {
				throw new Error(data.error);
			}

			return data;
		} catch (error) {
			throw error;
		}
	}
}

export const $fetch = new FetchClient();
