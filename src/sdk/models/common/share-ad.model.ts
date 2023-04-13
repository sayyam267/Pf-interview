export class ShareAdModel {
    public Id?: string | null = null;
    public Name: string | null = null;
    public FriendEmail: string | null = null;

    constructor(data?: Partial<ShareAdModel>) {
        Object.assign(this, data);
    }
}
