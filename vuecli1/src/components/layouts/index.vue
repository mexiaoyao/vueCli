<template>
    <a-layout style="height:100%">
        <a-layout-header>
            <router-link to="/home">Home</router-link>|
            <router-link to="/about">About</router-link>|
            <router-link to="/index">Index</router-link>|
            <router-link to="/filedId">filedId</router-link>
        </a-layout-header>
        <a-layout-content>
            <a-breadcrumb :separator="separator">
                <a-breadcrumb-item>当前位置：</a-breadcrumb-item>
                <template v-for="(item,index) in $route.matched">
                    <a-breadcrumb-item :key="item.name" v-if="index >0">{{ item.name }}</a-breadcrumb-item>
                    <a-breadcrumb-separator :key="item.name" v-if="index >0">></a-breadcrumb-separator>
                </template>
            </a-breadcrumb>
            <router-view />
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</template>
<script>
import { log } from 'console';
import { watch } from 'vue';
export default {
    name: 'layouts',
    data() {
        return {
            separator: '',
        };
    },
    watch: {
        $route: {
            handler(newValue, oldValue) {
                console.log(newValue.matched);
            },
            deep: true,
        },
    },
};
</script>
<style>
#components-layout-demo-basic .code-box-demo {
    text-align: center;
}
</style>