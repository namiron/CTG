import { IEmployee } from "./IEmployeeTypes";

export interface IUserGet {
  id?: string;
  email: string;
  password: string;
  googleId?: string | undefined;
  name: string;
  token?: string | undefined;
  employees?: IEmployee[];
  accessToken?:string | undefined;
  refreshToken?:string | undefined;
}

export interface IGoogleUserGet {
  data:{
  id?: string;
  email: string;
  password: string;
  googleId?: string | undefined;
  name: string;
  token?: string | undefined;
  employees?: IEmployee[];
  refreshToken?:string | undefined;
  }

}


export interface IUserSent {
  email: string;
  password: string;
  name?: string;
}
