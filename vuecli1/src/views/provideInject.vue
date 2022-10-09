<template>
    <div>
        -------------------{{canshu}}-------------
        <a-button @click="clickDo">点击</a-button>
        <provide-inject />
    </div>
</template>
<script>
import provideInject from './provideInject/index.vue';
export default {
    name: 'provideInjectPage',
    components: { provideInject },
    provide() {
        return {
            for: this,
        };
    },
    data() {
        return {
            canshu: '这事父级参数',
            visible: false,
            fadata: this.for,
        };
    },
    methods: {
        clickDo() {
            this.visible = true;
        },
        cancelClick() {
            this.visible = false;
        },
    },
};
</script>
<style scoped>
</style>