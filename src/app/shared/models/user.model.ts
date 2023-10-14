export class User {
    _id: number;
    username?: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    token?: string;
}

export interface UserBody {
    email: string;
    password: string;
}