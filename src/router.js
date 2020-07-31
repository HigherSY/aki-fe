import Vue from 'vue'
import VueRouter from 'vue-router'
import Songs from './pages/Songs.vue'
import Token from './pages/auth/Token.vue'
import TokenExpired from './pages/auth/TokenExpired.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/songs',
        component: Songs
    },
    {
        path: '/auth/expired',
        component: TokenExpired
    },
    {
        path: '/auth/:token',
        component: Token
    }
];

const router = new VueRouter({
    routes
});

export default router;
