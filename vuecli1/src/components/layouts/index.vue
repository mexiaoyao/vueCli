<template>
    <a-layout style="height:100%">
        <a-layout-header>
            <router-link to="/home">Home</router-link>|
            <router-link to="/about">About</router-link>|
            <router-link to="/index">Index</router-link>|
            <router-link to="/filedId">filedId</router-link>
        </a-layout-header>
        <a-layout-content>
            <Breadcrumb />
            <router-view />
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</template>
<script>
import Breadcrumb from './breadcrumb';
export default {
    name: 'layouts',
    components: { Breadcrumb },
    data() {
        return {};
    },
    watch: {},
};
</script>
<style>
</style>