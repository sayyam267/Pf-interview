import VueWrapper from '@/components/core/Vue/vue.wrapper';
import {ConfirmService} from '@/sdk/services/shared/confirm.service';
import {Component} from 'vue-property-decorator';

@Component
export default class ConfirmComponent extends VueWrapper {
    // Services
    // public width = 400;
    private ConfirmService = new ConfirmService();

    public get width() {
        return this.CoreSrv.confirmCompWidth;
    }
}
