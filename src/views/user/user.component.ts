import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import AppBarComponent from '../../components/core/AppBar/app-bar.component';

@Component({
    components: {
        AppBarComponent
    }
})
export default class UserComponent extends VueWrapper {}
