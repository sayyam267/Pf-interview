import VueWrapper from '@/components/core/Vue/vue.wrapper';
import { PostModel, UserService } from '@/sdk';
import {Component} from 'vue-property-decorator';
import PostCardComponent from '../PostCard/post-card.component';

@Component({
    components:{
        PostCardComponent
    }
})
export default class UserDashboardComponent extends VueWrapper {
     public $refs!: {
        video: any;
        canvas:any
    };
    public isEdit = false;
    public UserSrv = new UserService();
    public post = new PostModel();
    public stream:any= null
   public async takeImage(){
    this.$refs.video = document.querySelector("#video")!;
       this.$refs.canvas = document.querySelector("#canvas")!;
      this.stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	this.$refs.video.srcObject = this.stream;
     }

      captureImage(){
      this.$refs.canvas.getContext('2d')!.drawImage(this.$refs.video, 0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
 const image_data_url = this.$refs.canvas.toDataURL('image/jpeg');
 console.log(image_data_url);
 this.post.image = image_data_url;

     }

     createPost(){
        if(this.isEdit){
            this.edit()
        }
        else{
            const id = this.UserSrv.currentUser.posts?.length! + 1;
            this.post.id = id;
            console.log(this.post);
            this.UserSrv.AddPost(this.post);
            this.CoreSrv.CloseModal('post-dialog');
        }
        
     }

     edit(){
        this.UserSrv.EditPost(this.post);
        this.CoreSrv.CloseModal('post-dialog');
     }

     editPost(id:any){
        this.isEdit = true;
        this.post = this.UserSrv.currentUser.posts?.find(post => post.id == id)!;
        this.CoreSrv.OpenModal('post-dialog');
        
     }

     Delete(id:any){
        this.UserSrv.DeletePost(id);
     }
    }
