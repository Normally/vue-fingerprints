import Vue from 'vue'
import App from 'components/App';

// Alternative global installation
// import {FingerprintsPlugin} from '../index.js';
// Vue.use(FingerprintsPlugin)

// Set up Vue
void new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
})
