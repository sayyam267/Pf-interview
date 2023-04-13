import {RouteConfig} from 'vue-router';
import LoginComponent from '../login/login.component';
import LoginSignupLayoutComponent from '../loginsignup/login-signup-layout.component';
import SignupComponent from '../signup/signup.component';

export const AuthenticationRoutes: Array<RouteConfig> = [
           {
               path: '/',
               name: 'LoginSignupLayout',
               redirect: '/login',
               component: LoginSignupLayoutComponent,
               children: [
                   {
                       path: '/login',
                       name: 'Login',
                       component: LoginComponent,
                       meta: {
                           img: 'Login'
                       }
                   },
                   {
                       path: '/sign-up',
                       name: 'Signup',
                       component: SignupComponent,
                       meta: {
                           img: 'Signup'
                       }
                   },
                   
               ]
           }
       ];
