<template>
    <div>
        <a-modal :visible="visible" @cancel="cancelClick" @ok="cancelClick" title="测试provide-inject">
            <p>---------------------inject--------------------------------</p>
            <p>-----------data----------------</p>
            <p>for:{{ demo }}</p>
            <p>-----------met----------------</p>
            <p>computedData:{{ computedData }}</p>
            <a-button @click="clickdo">点击</a-button>
        </a-modal>
    </div>
</template>
<script>
export default {
    name: 'provideInject',
    // inject: ["for"],
    inject: {
        for: {
            default: () => ({}),
        },
    },
    data() {
        return {
            demo: this.for.canshu,
        };
    },
    computed: {
        computedData() {
            return this.for.canshu;
        },
        visible() {
            return this.for.visible;
        },
    },
    methods: {
        cancelClick() {
            this.for.cancelClick();
        },
        clickdo() {
            this.for.clickDo();
        },
    },
};
</script>
<style scoped>
</style>