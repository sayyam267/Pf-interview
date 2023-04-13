import { PostModel } from "./post.model";

export class UserModel {
           public name: string | null = null;
           public email: string | null = null;
           public password: string | null = null;
           public confirmPassword: string | null = null;
           public posts: Array<PostModel> = [];
           constructor(data?: Partial<UserModel>) {
               Object.assign(this, data);
           }
       }
