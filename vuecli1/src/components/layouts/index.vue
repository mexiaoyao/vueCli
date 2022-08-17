<template>
    <a-layout style="height:100%">
        <a-layout-header>
            <get-menu />
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
import GetMenu from './getMenu';
export default {
    name: 'layouts',
    components: { Breadcrumb, GetMenu },
    data() {
        return {};
    },
    watch: {},
};
</script>
<style>
</style>