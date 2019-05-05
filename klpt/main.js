import Vue from 'vue'
import App from './App'

import store from './store'

import GoodList from './components/goodlist/goodlist.vue';
Vue.component('good-list',GoodList);

import GoodFlex from './components/goodflex/goodflex.vue';
Vue.component('good-flex',GoodFlex);

import LoadMore from './components/uni-load-more/uni-load-more.vue';
Vue.component('load-more',LoadMore);

import EjectFrame from './components/elastic/elastic.vue';
Vue.component('eject-frame',EjectFrame);

import EjectFrames from './components/elastic2/elastic.vue';
Vue.component('eject-frames',EjectFrames);

import GuidePage from './components/guidance/guidance.vue';
Vue.component('guide-page',GuidePage);

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
