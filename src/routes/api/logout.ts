import { serialize } from 'cookie';

export async function post() {
	return {
		status: 200,
		headers: {
			'set-cookie': serialize('authToken', '', {
				path: '/',
				httpOnly: true,
				maxAge: 0
			})
		}
	};
}
