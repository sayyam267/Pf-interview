export class SignupModel {
    // public username: string | null = null;
    public email: string | null = null;
    public password: string | null = null;
    public confirmPassword: string | null = null;
    public name: string | null = null;

    constructor(data?: Partial<SignupModel>) {
        Object.assign(this, data);
    }
}
