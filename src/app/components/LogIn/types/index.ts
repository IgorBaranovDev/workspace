import { Creads } from '../../../services/types';

export interface ILogin {
    user: string;
    logIn: (creds: Creads) => {};
    signUp: (creds: Creads) => {};
  };
