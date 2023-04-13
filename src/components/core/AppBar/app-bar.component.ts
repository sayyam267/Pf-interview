
import { CoreService } from '@/services/core.service';
import Component from 'vue-class-component';
import VueWrapper from '../Vue/vue.wrapper';
import { UserService } from '@/sdk';

@Component
export default class AppBarComponent extends VueWrapper {
    public UserSrv = new UserService();
    logout(){
        this.UserSrv.isLoggedIn = false;
        window.localStorage.setItem('isLoggedIn','false');
        this.$router.push({name:'Login'})
    }
}
