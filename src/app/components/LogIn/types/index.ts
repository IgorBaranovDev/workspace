import { Creds } from '../../../services/types';

export interface ILogin {
    user: string;
    logIn: (creds: Creds) => {};
    signUp: (creds: Creds) => {};
  };
