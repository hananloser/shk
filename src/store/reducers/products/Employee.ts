
export const EMPLOYEE_LOADING = 'EMPLOYEE_LOADING'
export const EMPLOYEE_SUCCESS = 'EMPLOYEE_SUCCESS'
export const EMPLOYEE_FAIl = 'EMPLOYEE_SUCCESS'

export interface Employee {
    name: string,
    phone_number: string,
}


export interface EmployeeLoadig {
    type: typeof EMPLOYEE_LOADING
}

export interface EmployeeSucess {
    type: typeof EMPLOYEE_SUCCESS,
    payload: Employee[]
}

export interface EmployeeFail {
    type: typeof EMPLOYEE_FAIl,
    message: string | Object
}

export type EmployeeTypeAction =
    | EmployeeLoadig
    | EmployeeSucess
    | EmployeeFail


