export class PostModel {
    public id: number | null = null;
    public caption: string | null = null;
    public image: string | null = null;
    constructor(data?: Partial<PostModel>) {
        Object.assign(this, data);
    }
}
