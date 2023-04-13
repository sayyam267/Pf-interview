declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module 'vue2-dropzone';
declare module 'vuetify/lib/services/goto';
declare module 'vue-the-mask';
declare module 'vue2-editor';
declare function ml_webform_4625155(...args: any): any;

interface Window {
    SalesIQChatCode: () => void;
    DashboardChatWidget: () => void;
    EmbedSocialFeedbackButton: () => void;
    recaptchLoadCallback: () => void;
}

declare module 'v-money';

declare module '*.svg' {
    import Vue, {VueConstructor} from 'vue';
    const content: VueConstructor<Vue>;
    export default content;
}
declare module '*.svg?inline' {
    import Vue, {VueConstructor} from 'vue';
    const content: VueConstructor<Vue>;
    export default content;
}
