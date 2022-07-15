import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Spin } from 'ant-design-vue';
import { setGlobalOptions } from 'vue-request';

const app = createApp(App);
app.use(router);
app.use(Spin);
//option about request
setGlobalOptions({});

app.mount('#app');
