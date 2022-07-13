<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <a-button type="primary">Ant Design Vue</a-button>
        <a-icon style="font-size:80px;color: #8be27e;" type="team" />########################
        <my-icon color="red" name="xiaoxi" size="80" />
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
