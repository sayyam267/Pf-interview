import Vue from 'vue';

import BaseFormComponent from './vuetify/Form/base-form';

import BaseTextField from './vuetify/TextField/base-text-field';

import BaseCard from './vuetify/Card/base-card.component';


import LoginComponent from '@/views/authentication/login/login.component';
import SignupComponent from '@/views/authentication/signup/signup.component';
import BaseDialog from './vuetify/Dialog/base-dialog';
import BaseBtn from './vuetify/Btn/base-btn';

// Vuetify Components
Vue.component('base-text-field', BaseTextField);
Vue.component('base-btn', BaseBtn);
Vue.component('base-form', BaseFormComponent);
Vue.component('base-card', BaseCard);
Vue.component('base-dialog', BaseDialog);



// Custom Components

Vue.component('login-component', LoginComponent);
Vue.component('signup-component', SignupComponent);
