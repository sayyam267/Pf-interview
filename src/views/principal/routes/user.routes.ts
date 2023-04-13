import {RouteConfig} from 'vue-router';
import UserComponent from '../user.component';
import PrincipalComponent from '../user.component';
import UserDashboardComponent from './../dashboard/user-dashboard.component';

export const UserRoutes: Array<RouteConfig> = [
           {
               path: '/user',
               name: 'User',
               redirect: 'user/dashboard',
               component: UserComponent,
               children: [
                   {
                       path: 'dashboard',
                       name: 'Dashboard',
                       component: UserDashboardComponent,
                       meta: {
                           showable: true,
                           icon: 'view-dashboard-outline',
                           color: 'primary',
                           sequence: 1,
                           title: 'Dashboard'
                       }
                   }
               ]
           }
       ];
