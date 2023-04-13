import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import {AuthenticationRoutes} from '@/views/authentication/routes/authentication.routes';

import goTo from 'vuetify/lib/services/goto';
import VueMeta from 'vue-meta';
import {UserRoutes} from '@/views/user/routes/user.routes';
import { UserService } from '@/sdk';

Vue.use(VueRouter);
Vue.use(VueMeta);

export const routes: Array<RouteConfig> = [...AuthenticationRoutes, ...UserRoutes];


const UserSrv = new UserService();
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo: any = 0;

        if (to.hash) {
            scrollTo = to.hash;
        } else if (savedPosition) {
            scrollTo = savedPosition.y;
        }

        return goTo(scrollTo);
    },
    routes
});

router.beforeEach((to, from, next) => {
    // Get current user from cookie.
    // new ApiAuth().SessionValue && !!new ApiAuth().SessionValue!.UserId;

    const isNonAuthRoute = ['Login', 'Signup'].includes(to.name!);
    const parentRouteNames = routes.map(route => {
        return route.name;
    });
    const childRoutes: any = [];

    function findingRouteNames(routes: Array<RouteConfig>) {
        routes.forEach(route => {
            if ('children' in route) {
                findingRouteNames(route.children!);
            } else {
                childRoutes.push(route.name);
            }
        });
    }
    findingRouteNames(routes);
    if (!UserSrv.isLoggedIn && isNonAuthRoute) {
        next();
    } else if (!UserSrv.isLoggedIn && isNonAuthRoute) {
               next({name: 'Login', query: {...to.query, redirect_reason: 'UNAUTHORIZIED'}});
           } else if (!UserSrv.isLoggedIn && !isNonAuthRoute) {
                      next({name: 'Login', query: {redirect_reason: 'UNAUTHORIZIED'}});
                  } else {
                      next();
                  }

    setTimeout(() => {
        const main = document.getElementsByTagName('main');
        if (main && main[0]) {
            main[0].scrollTo(0, 0);
        }
    }, 100);
});

export default router;
