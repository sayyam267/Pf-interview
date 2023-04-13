import {ServiceClass} from '@/decorators';
import { AlertService } from '../shared/alert.service';
import {LoaderService} from '../shared/loader.service';
import { LoginModel, PostModel, UserModel } from '@/sdk/models';

@ServiceClass()
export class UserService {
    public Users = Array<UserModel>();
    public LoaderSrv = new LoaderService();
    public standards = [];
    public courseId: any = null;
    public currentUser = new UserModel();
    public isLoggedIn = false;

    getUsers() {
        if (window.localStorage.getItem('isLoggedIn') != null) {
            this.isLoggedIn = window.localStorage.getItem('isLoggedIn') as unknown as boolean;
        }else{
            this.isLoggedIn = false;
            window.localStorage.setItem('isLoggedIn','false');
        }
            if (window.localStorage.getItem('data') != null) {
                this.Users = JSON.parse(window.localStorage.getItem('data')!);
            } 
            
        console.log(this.isLoggedIn);
    }

   

    AddPost(data:PostModel){
        console.log(data);
        data.id= 1 + this.currentUser.posts?.length! ?? 0 ;
        if(this.currentUser.posts?.length){
            this.currentUser.posts = [...this.currentUser.posts!, data];
            console.log(this.currentUser.posts)
        }
        else{
            this.currentUser.posts.push(data);
            console.log(this.currentUser.posts);
        }
        
        // console.log(this.currentUser.posts)
        this.update();
    }

    DeletePost(id:number){
        const newPosts = this.currentUser?.posts?.filter(p => p.id != id);
        this.currentUser.posts = newPosts!;
        this.update();
    }

    EditPost(data:PostModel){
         const d = this.currentUser.posts?.map(p => {
             if (p.id == this.currentUser.email) {
                 p.caption = data.caption;
                 p.image = data.image;
             }
             return data;
         });
         this.currentUser.posts = d!;
         this.update();
    }


    update(){
         const d = this.Users.map(data => {
             if (data.email == this.currentUser.email) {
                 data.posts = this.currentUser.posts;
             }
             return data;
         });
         console.log(d,"data");
         window.localStorage.setItem('data', JSON.stringify(d));
         this.Users = JSON.parse(window.localStorage.getItem('data')!);
    }

    


   

   

   
}