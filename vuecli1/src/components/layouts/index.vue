<template>
    <a-layout style="height:100%">
        <a-layout-header>
            <router-link to="/home">Home</router-link>|
            <router-link to="/about">About</router-link>|
            <router-link to="/index">Index</router-link>|
            <router-link to="/filedId/5/15">filedId</router-link>
        </a-layout-header>
        <a-layout-content>
            <a-breadcrumb :routes="routes">
                <a-breadcrumb-item>>当前位置：</a-breadcrumb-item>
                <a-breadcrumb-separator>:</a-breadcrumb-separator>
                <template #itemRender="{ route, params, routes, paths }">
                    <span v-if="routes.indexOf(route) === routes.length - 1">{{route.breadcrumbName}}</span>
                    <router-link :to="paths.join('/')" v-else>{{route.breadcrumbName}}</router-link>
                </template>
            </a-breadcrumb>
            <router-view />
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</template>
<script>
export default {
    name: 'layouts',
    data() {
        return {
            routes: [
                {
                    path: 'home',
                    breadcrumbName: 'home',
                },
                {
                    path: 'about',
                    breadcrumbName: 'about',
                },
                {
                    path: 'index',
                    breadcrumbName: 'index',
                },
            ],
        };
    },
};
</script>
<style>
#components-layout-demo-basic .code-box-demo {
    text-align: center;
}
</style>