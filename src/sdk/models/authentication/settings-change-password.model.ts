export class SettingsChangePasswordModel {
    public old_password: string | null = null;
    public new_password: string | null = null;

    constructor(data?: Partial<SettingsChangePasswordModel>) {
        Object.assign(this, data);
    }
}
