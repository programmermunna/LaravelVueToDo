import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import ExampleComponent from './components/todo.vue';
app.component('todo', ExampleComponent);

app.mount('#app');
