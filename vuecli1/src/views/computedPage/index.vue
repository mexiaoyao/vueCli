<template>
    <div>
        <a-modal :visible="visible" @cancel="cancelClick" @ok="cancelClick" title="测试data和computed">
            <p>props1:{{ num0 }}</p>
            <p>data:{{ data1 }}</p>
            <p>computed:{{ computed1 }}</p>
            <a-button @click="clickdo">点击</a-button>
        </a-modal>
    </div>
</template>
<script>
export default {
    name: 'computedPage',
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        num0: {
            type: Number,
            default: 0,
        },
        num1: {
            type: Number,
            default: 0,
        },
        num2: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            id: 123,
            data1: this.num1,
        };
    },
    computed: {
        computed1() {
            return this.num2;
        },
    },
    methods: {
        cancelClick() {
            this.$emit('cancel');
        },
        clickdo() {
            this.props1 += 1;
            this.num1 += 1;
            this.num2 += 1;
        },
    },
};
</script>
<style scoped>
</style>