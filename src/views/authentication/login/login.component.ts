import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import {LoginModel, UserService} from '@/sdk';

@Component
export default class LoginComponent extends VueWrapper {
    public loginData = new LoginModel();
    public UserSrv = new UserService();
    public show = false;
    public mounted() {
        this.UserSrv.getUsers();
    }
    Login() {
        
        const user = this.UserSrv.Users.find(u => u.email == this.loginData.email);
        if (user) {
            if (user.password == this.loginData.password) {
                this.AlertSrv.show('success', 'Login successful');
                this.UserSrv.isLoggedIn=true;
                window.localStorage.setItem('isLoggedIn', 'true');
                this.$router.push({name:'Dashboard'});
            } else {
                this.AlertSrv.show('error', 'Wrong Password');
            }
        } else {
            this.AlertSrv.show('error', 'No User Found');
        }
    }
}
