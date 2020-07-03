import Vue from 'vue';
import Router from 'vue-router';
// import PageNotFound from '@/pages/errors';
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: '/',
            component: resolve => { require(['@/pages/layout'], resolve) },
            redirect: '/home',
            children: [
                { path: '/home', name: 'home', component: resolve => { require(['@/pages/home'], resolve) } },
                { path: '/InfoList', name: 'InfoList', component: resolve => { require(['@/pages/InfoList'], resolve) } },
                { path: '/InfoDetails', name: 'InfoDetails', component: resolve => { require(['@/pages/InfoDetails'], resolve) } },
                { path: '/recommend', name: 'recommend', component: resolve => { require(['@/pages/tuijian'], resolve) } },
                { path: '/recommendDetails', name: 'recommendDetails', component: resolve => { require(['@/pages/tuijian/tjDateils'], resolve) } },
                { path: '/Information', name: 'Information', component: resolve => { require(['@/pages/Information'], resolve) } },
            ]
        },
        
        // { path: '/errors', name: 'errors', component: PageNotFound },
        // { path: '/', name: '/', component: resolve => { require(['@/pages/page-login'], resolve) } },
        // { path: '/login', name: 'login', component: resolve => { require(['@/pages/page-login'], resolve) } },
        // {
        //   path: '/index', component: resolve => { require(['@/pages/page-index'], resolve) },
        //   children: [
        //     { path: '/', component: resolve => { require(['@/pages/page-home'], resolve) }},
        //     { path: 'advert', component: resolve => { require(['@/pages/page-advert'], resolve)}},
        //     { path: 'advertDetail', component: resolve => { require(['@/pages/page-advert/details'], resolve)}},//广告详情
        //     { path: 'guided', component: resolve => { require(['@/pages/page-guided'], resolve)}},//引导页
        //     // 文章管理
        //     {path: 'articleList', component: resolve => { require(['@/pages/page-article/list'], resolve) }},
        //     {path: 'articleDetail', component: resolve => { require(['@/pages/page-article/detail'], resolve) }},
        //     // 头条管理
        //     {path: 'headlineList', component: resolve => { require(['@/pages/page-headline'], resolve) }},
        //     // 栏目管理
        //     {path: 'columnList', component: resolve => { require(['@/pages/page-column'], resolve) }},
        //     // banner管理
        //     {path: 'bannerList', component: resolve => { require(['@/pages/page-banner'], resolve) }}
        //   ]
        // }
    ],
    linkExactActiveClass: 'link-exact-active',
    linkActiveClass: 'link-active',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});