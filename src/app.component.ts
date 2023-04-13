import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {Component} from 'vue-property-decorator';
import ConfirmComponent from './components/shared/Confirm/confirm.component';

@Component({
    components: {
        ConfirmComponent,
    }
})
export default class AppComponent extends VueWrapper {}
