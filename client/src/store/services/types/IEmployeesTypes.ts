export interface IEmployeesTypes {
  id?: string;
  firstName: string;
  lastName: string;
  age: string;
  address: string;
  userId: string;
}

export interface IInitialState {
  employees: IEmployeesTypes[] | null;
}
