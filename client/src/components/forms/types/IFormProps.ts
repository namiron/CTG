export interface IFormProps<T> {
  onFinish: (value: T) => void;
  btnText: string;
  title: string;
  error?: string | undefined;
  employee?: T;
}


export interface IEmployeeType {
  id?: string;
  firstName: string;
  lastName: string;
  age: string;
  address: string;
  userId: string;
}
