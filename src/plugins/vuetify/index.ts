import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

// primary: '#6455B0';
export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            light: {
                primary: '#6455B0',
                secondary: '#B8D6BF',
                accent: '#ffab00',
                error: '#fc424a',
                warning: '#ffc107',
                secondarygrey: '#2a2d3a',
                primarylight: '#6e57e8 ',
                muted: '#6c7293',
                btnprimary: '#0090e7',
                info: '#00bcd4',
                success: '#4caf50',
                body: '#e4e4e4',
                white: '#ffffff',
                link: '#8ea0bc',
                yellow: '#feb702',
                lightgrey: '#2a3038',
                darkgrey: '#191c24',
                darkblue: '#12151e',
                light_primary: '#00b3ff',
                light_secondary: '#04dd9d',
                light_accent: '#feb702',
                accent1: {
                    base: '#e1e1e1',
                    darken1: '#ffffff',
                    darken2: '#ffffff',
                    darken3: '#ffffff',
                    darken4: '#ffffff'
                }
            }
        }
    }
});
