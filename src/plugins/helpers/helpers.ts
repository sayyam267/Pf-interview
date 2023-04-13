import {ShowableRoute} from '@/globals';
import router, {routes} from '@/router';
import {compareAsc, format, isValid, parseISO,formatDistanceToNowStrict } from 'date-fns';
import {RouteConfig} from 'vue-router';
import {RouteConfigMultipleViews, RouteConfigSingleView} from 'vue-router/types/router';

export const helpers = {
           /**
            * Makes first character uppercase.
            */
           upperFirst: (text: string | null): string => (!!text ? text.charAt(0).toUpperCase() + text.slice(1) : ''),

           /**
            * Format the file size.
            */
           formatFileSize: (size: number): string => {
               const i = ~~(Math.log2(size) / 10);
               return (size / Math.pow(1024, i)).toFixed(2) + ('KMGTPEZY'[i - 1] ?? '') + 'B';
           },

           /**
            * Format the file size.
            */
           excerptText: (str: string, limit = 30): string => (str.length > limit ? `${str.substr(0, limit - 1)}...` : str),

           /**
            * Verify string is date
            */
           isValidDateFormat: (dateString: string | null): boolean => {
               if (
                   dateString &&
                   (new RegExp(/^\d{2}-\d{2}-\d{4}$/).test(dateString) ||
                       new RegExp(/^\d{2}.\d{2}.\d{4}$/).test(dateString) ||
                       new RegExp(/^\d{2}\/\d{2}\/\d{4}$/).test(dateString) ||
                       new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(dateString))
               ) {
                   return true;
               } else {
                   return false;
               }
           },

           youtubeVideoUniqueCode: (url: string) => {
               return url.split('/').slice(-1);
           },

           /**
            * Verify date is valid
            */
           isValidDate: (dateString: string | null, min?: string, max?: string): string | boolean => {
               if (!dateString) return false;
               if (!helpers.isValidDateFormat(dateString)) return false;
               const splittedDate = dateString.split(dateString[2]);
               dateString = isNaN(+dateString[2]) ? `${splittedDate[2]}-${splittedDate[0]}-${splittedDate[1]}` : dateString;
               const date = parseISO(dateString);
               if (!isValid(date)) return false;
               const minCondition = !min || (!!min && compareAsc(parseISO(helpers.standardFormatDate(min)), date) !== 1);
               const maxCondition = !max || (!!max && compareAsc(date, parseISO(helpers.standardFormatDate(max))) !== 1);
               if (minCondition && maxCondition) {
                   return dateString;
               } else {
                   return false;
               }
           },

           /**
            * Verify url is of image
            */
           isImageUrl: (url: string): boolean => {
            return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
           },

           isVideoUrl: (url: string): boolean => {
               return /\.(mp4|ogg|webM|3gp)$/.test(url);
           },
           /**
            * Generates random UUID.
            */
           uuidv4: (): string =>
               'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                   const r = (Math.random() * 16) | 0;
                   return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
               }),

           /**
            * Validates JSON
            */
           isJSON: (str: string): boolean => {
               try {
                   return typeof JSON.parse(str) === 'object';
               } catch (e) {
                   return false;
               }
           },

           /**
            *
            */
           titleize: (slug: string): string =>
               slug
                   .replace(/-/g, '_')
                   .split('_')
                   .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
                   .join(' '),

           /**
            *
            */
           toCurrency: (num: string | number | null): string =>
               !!num ? `$${(Math.trunc(+num * 100) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}` : `$0.00`,

           toCurrencyWithoutDecimal: (num: string | number | null): string =>
               !!num ? `$${(Math.trunc(+num * 100) / 100).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '$&,')}` : `$0`,
           /**
            *
            */
           toPercentage: (num: string | number | null): string => (!!num ? `${(+num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}%` : '0.00%'),

           /**
            *
            */
           formatDate: (date: string | null, dateFormat = 'yyyy-MM-dd'): string => {
               if (!!date) {
                   try {
                       return format(parseISO(date), dateFormat);
                   } catch (error) {
                       return format(new Date(date), dateFormat);
                   }
               }
               return '';
           },

           getTimeAgo:(date:string):string =>{
            return formatDistanceToNowStrict(new Date(date), {
              addSuffix: true,
            });
           },
           trimFileExtension: (file: string): string => (!!file ? file.replace(/\.[^/.]+$/, '') : file),

           trunc: (text: string, length: number): string => (text.length > 25 ? text.slice(0, length) + '...' : text),
           /**
            *
            */
           standardFormatDate: (date: string | null): string => {
               return !!date && helpers.isValidDate(date) ? format(parseISO(date), 'yyyy-MM-dd') : '';
           },
           /**
            *
            */
           standardFormatDateTime: (date: string | null): string => {
               return !!date ? format(parseISO(date), 'yyyy-MM-dd hh:mmaaa') : '';
           },

           /**
            *
            */
           getShowableRoutes: (name: string): Array<ShowableRoute> => {
               const route = helpers.resolveRoute(name, routes);
               return (
                   route?.children
                       ?.filter(route => route?.meta?.showable !== false && !!route?.meta?.sequence)
                       .sort((route1, route2) => +route1.meta?.sequenceA - +route2.meta?.sequenceB)
                       .map(({name, meta}) => ({
                           Name: name,
                           Icon: meta?.icon,
                           Title: meta?.title,
                           Chip: meta?.chip,
                           Color: meta?.color,
                           ...(meta?.position ? {Position: +meta?.position} : {})
                       })) ?? []
               );
           },

           /**
            *
            */
           resolveRoute: (name: string, routes: Array<RouteConfig>): RouteConfig | undefined => {
               return routes.reduce((acc: RouteConfig | undefined, curr) => {
                   if (acc) return acc;
                   if (curr.name === name) return curr;
                   if (curr.children?.length) return helpers.resolveRoute(name, curr.children);
               }, undefined);
           },

           strTrueFalse: (value: string | null): boolean => {
               if (value === 'True') {
                   return true;
               }
               return false;
           },

           numberWithCommas: (x: number) => {
               return x != null ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : x;
           },

           toTitleCase: (phrase: string) => {
               return phrase
                   .toLowerCase()
                   .split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
           }
       };
