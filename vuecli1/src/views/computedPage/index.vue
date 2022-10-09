<template>
    <div>
        <a-modal :visible="visible" @cancel="cancelClick" @ok="cancelClick" title="测试data和computed">
            <p>---------------------以下为页面来源变化 data不变化--------------------------------</p>
            <p>props1:{{ num0 }}</p>
            <p>data:{{ data1 }}</p>
            <p>computed:{{ computed1 }}</p>
            <p>---------------------以下为页面页面有数据变化即自动更新--------------------------------</p>
            <p>data-now1():{{ now1() }}</p>
            <p>computed-now2:{{ now2 }}</p>
            <p>met-now3():{{ now3() }}</p>
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
    /**
     * 再回到第一张图，这里 data 里声明函数的话，其实就和 methods 一模一样了，
     * 根据官网的描述，计算属性是基于它们的响应式依赖进行缓存的。这句话比较抽象，
     * 意思就是只要计算属性依赖的那个数据不变，计算属性就不会重新计算，
     * 而 methods 是只要页面有任何数据变化导致数据的更新，
     * methods 就会重新计算。官网没有给出实例，这里给出一个简短的例子。
     * **/
    data() {
        return {
            id: 123,
            data1: this.num1,
            now1() {
                return Date.now();
            },
        };
    },
    computed: {
        computed1() {
            return this.num2;
        },
        now2() {
            return Date.now();
        },
    },
    methods: {
        now3() {
            return Date.now();
        },
        cancelClick() {
            this.$emit('cancel');
        },
        clickdo() {
            this.num0 += 1;
            this.num1 += 1;
            this.num2 += 1;
        },
    },
};
</script>
<style scoped>
</style>