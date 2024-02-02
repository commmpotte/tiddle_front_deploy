import { ErrorMessageMenu } from './error.interface';

export interface ILogin {
	username: string;
	password: string;
	error?: ErrorMessageMenu;
}
