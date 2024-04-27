import { ErrorMessageMenu } from './error.interface';

export interface JwtToken {
	refresh: string;
	access: string;
	error?: ErrorMessageMenu;
}
