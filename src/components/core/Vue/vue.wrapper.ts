import ThemeWrapper from '../Theme/theme.wrapper';
import {Subscription} from 'rxjs';
import {CoreService} from '@/services/core.service';
import {AlertService, ComponentService, ConfirmService, LoaderService} from '@/sdk';
import {SdkConfig} from '@/sdk/sdk.config';
import {LibrariesService} from '@/services/libraries.service';
import {FilterModel} from '@/sdk/models/common/filter.model';
import {AppVersion} from '@/app.config';

export default abstract class VueWrapper extends ThemeWrapper {
    public readonly True: string = 'True';
    public readonly False: string = 'False';
    // Properties
    private Subscriptions: Array<Subscription> = [];

    // Getters and Setters
    set AddSubscription$(subscription: Subscription) {
        this.Subscriptions.push(subscription);
    }

    // Services
    protected CoreSrv = new CoreService();
    protected ConfirmSrv = new ConfirmService();
    protected AlertSrv = new AlertService();
    protected ComponentSrv = new ComponentService();
    protected LoaderSrv = new LoaderService();
    protected LibrariesServie = new LibrariesService();
    protected FilterModel = new FilterModel();

   

  

   

 
}
