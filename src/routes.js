// routes.js

import HomePage from './components/HomePage';
import TestPage from './components/TestPage';

const routes = [
    { path: '/', component: HomePage },
    { path: '/test', component: TestPage }
];

export default routes;