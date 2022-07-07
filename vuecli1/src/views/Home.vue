<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <a-button type="primary">Ant Design Vue</a-button>
        <a-icon style="font-size:80px;color: #8be27e;" type="team" />
        <span class="icon-54xiaoxi-1 iconfont" style="font-size:80px; color: #ea9518;"></span>
        <icon class="icon" style="font-size:80px; color: #ea9518;" type="icon-54xiaoxi-1" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld,
    },
};
</script>
