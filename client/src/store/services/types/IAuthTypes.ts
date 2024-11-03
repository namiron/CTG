import { IUserGet } from "../../API/types/IAuthApiTypes";

export interface IInitialState {
  user: IUserGet | null;
  isAuthenticated:boolean;
}

