import { api } from "./api";
import { IEmployee } from "./types/IEmployeeTypes";

export const employeesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllEmployees: builder.query<IEmployee[], void>({
      query: () => ({
        url: `/employees`,
        method: "GET",
      }),
    }),
    getEmployee: builder.query<IEmployee, string>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "GET",
      }),
    }),
    editEmployee: builder.mutation<string, IEmployee>({
      query: (employee) => ({
        url: `/employees/edit/${employee.id}`,
        method: "PUT",
        body:employee
      }),
    }),
    removeEmployee: builder.mutation<string, string>({
      query: (id) => ({
        url: `/employees/remove/${id}`,
        method: "POST",
        body: { id },
      }),
    }),
    addEmployee: builder.mutation<IEmployee, IEmployee>({
      query: (employee) => ({
        url: `/employees/add`,
        method: "POST",
        body: employee,
      }),
    }),
  }),
});

export const {
  useAddEmployeeMutation,
  useEditEmployeeMutation,
  useGetAllEmployeesQuery,
  useRemoveEmployeeMutation,
  useGetEmployeeQuery,
} = employeesApi;

export const {
  endpoints: {
    getAllEmployees,
    getEmployee,
    editEmployee,
    removeEmployee,
    addEmployee,
  },
} = employeesApi;
