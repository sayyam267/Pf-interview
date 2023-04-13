import {ShowableRoute} from '@/globals';
import Vue from 'vue';
import {RouteConfig} from 'vue-router';
import {helpers} from './helpers';

declare module 'vue/types/vue' {
    // Declare helper augmentation for Vue
    interface Vue {
        $helpers: {
            upperFirst(text: string | null): string;
            formatFileSize(size: number): string;
            excerptText(str: string, limit?: number): string;
            isValidDateFormat(dateString: string | null): boolean;
            isValidDate(dateString: string): string | boolean;
            uuidv4(): string;
            youtubeVideoUniqueCode(url: string): string;
            isJSON(str: string): boolean;
            titleize(slug: string): string;
            toCurrency(num: string | number | null): string;
            toCurrencyWithoutDecimal(num: string | number | null): string;
            trimFileExtension(file: string | null): string;
            trunc(text: string, length: number): string;
            toPercentage(num: string | number | null): string;
            formatDate(date: string | null, dateFormat: string): string;
            standardFormatDateTime(date: string | null): string;
            getShowableRoutes(path: string): Array<ShowableRoute>;
            resolveRoute(name: string, routes: Array<RouteConfig>): RouteConfig | undefined;
            strTrueFalse(value: string | null): boolean;
            numberWithCommas(x: number): string;
            toTitleCase(phrase: string): string;
            isImageUrl(url: string): boolean;
            isVideoUrl(url: string): boolean;
            getTimeAgo(date: string|null): string;
        };
    }
}

const plugin = {
    install() {
        Vue.prototype.$helpers = helpers;
    }
};

Vue.use(plugin);
