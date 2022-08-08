<template>
    <a-breadcrumb :separator="separator">
        <a-breadcrumb-item>当前位置：</a-breadcrumb-item>
        <template v-for="(item,index) in $route.matched">
            <a-breadcrumb-item :key="item.name" v-if="index >0">{{ item.name }}</a-breadcrumb-item>
            <a-breadcrumb-separator :key="item.name" v-if="index >0">></a-breadcrumb-separator>
        </template>
    </a-breadcrumb>
</template>
<script>
export default {
    name: 'breadcrumb',
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