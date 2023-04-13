export class LoginModel {
    public email: string | null = null;
    public password: string | null = null;

    constructor(data?: Partial<LoginModel>) {
        Object.assign(this, data);
    }
}


