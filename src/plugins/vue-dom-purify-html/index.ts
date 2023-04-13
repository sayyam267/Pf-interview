import Vue from 'vue';
import VueDOMPurifyHTML from 'vue-dompurify-html';

Vue.use(VueDOMPurifyHTML, {
    default: {
        ADD_TAGS: ['iframe', 'pre'] // this one whitelists Youtube
    }
});
