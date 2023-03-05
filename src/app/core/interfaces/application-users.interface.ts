import { USER_TYPES } from "../enums/user-types.enum";

export interface IApplicationUsers {
    id: string;
    userName: string;
    firstName: string;
    fatherName: string;
    grandFatherName: string;
    lastName: string;
    mobileNumber: string;
    email: string;
    title: string;
    departmentId: string;
    userRoles:IUserRole[]
}
export interface IProduct {
  id: string;
  code: string;
  englishDescription: string;
  arabicDescription: string;
  isActive: boolean;
}
export interface IUserRole {
    roleId: USER_TYPES
}
