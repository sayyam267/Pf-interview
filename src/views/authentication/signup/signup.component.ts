import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import {SignupModel, UserModel, UserService} from '@/sdk';

@Component
export default class SignupComponent extends VueWrapper {
    // Properties
    public signupData = new UserModel();
    public UserSrv = new UserService();
    public error: boolean = false;
    public errorMessage: string = '';
    public showConfirm = false;
    public show = false;

    signup() {
        this.UserSrv.Users.push(this.signupData);
        window.localStorage.setItem('data', JSON.stringify(this.UserSrv.Users));
        this.AlertSrv.show('success','Signup Success');
        this.$router.push({name:'Login'});
    }
}
