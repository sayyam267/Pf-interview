export class SessionModel {

           public token: string | null = null;
           public email: string | null = null;
           public id: number | null = null;
           public name: string | null = null;
           public type: string | null = null;
           public profile_pic: string | null = null;
          

           constructor(data?: Partial<SessionModel>) {
               Object.assign(this, data);
           }
       }

// export class UserModel {
//     public email: string | null = null;
//     public id: number | null = null;
//     public username: string | null = null;
//     public type: string | null = null;
//     public profile_pic: string | null = null;

//     constructor(data?: Partial<UserModel>) {
//         Object.assign(this, data);
//     }
// }