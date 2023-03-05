export interface IRole {
    isActive: boolean;
    creationDate: Date;
    isDeleted: boolean;
    deletionDate: Date;
    id: number;
    name: string;
    nameAr: string;
    roleUsers: string[];
}

export interface IUserRole {
    isActive: boolean;
    creationDate: Date;
    isDeleted: boolean;
    deletionDate: Date;
    roleId: number;
    userId: string;
    role: IRole;
    user: string;
}
