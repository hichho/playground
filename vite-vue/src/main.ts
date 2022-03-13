import {createApp} from 'vue';
import App from './App.vue';
import router from '@/router';
import {setGlobalOptions} from 'vue-request';

const app = createApp(App);
app.use(router);
//option about request
setGlobalOptions({

});

app.mount('#app');
