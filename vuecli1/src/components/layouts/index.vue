<template>
    <a-layout>
        <a-layout-header>
            <router-link to="/home">Home</router-link>|
            <router-link to="/about">About</router-link>|
            <router-link to="/index">Index</router-link>
        </a-layout-header>
        <a-layout-content>
            <router-view />
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</template>
<style>
#components-layout-demo-basic .code-box-demo {
    text-align: center;
}
</style>