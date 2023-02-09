<template>
    <div>
        <router-link to="/home">home</router-link>
        <span>|</span>
        <router-link to="/about">about</router-link>
        <span>|</span>
        <router-link to="/index">index</router-link>
        <span>|</span>
        <router-link to="/filedId">filedId</router-link>
        <span>|</span>
        <router-link to="/computedUrl">computedUrl</router-link>
        <span>|</span>
        <router-link to="/provideInject">provideInject</router-link>
        <span>|</span>
        <router-link to="/popPage">popPage</router-link>
        <span>|</span>
        <router-link to="/objectKeys">objectKeys</router-link>
        <span>|</span>
        <router-link to="/reduceMet">reduceMet</router-link>
        <span>|</span>
        <router-link to="/contenteditable">contenteditable</router-link>
        <span>|</span>
    </div>
</template>
<script>
export default {
    name: 'getMenu',
};
</script>
<style scoped>
span {
    padding: 0px 5px;
}
</style>