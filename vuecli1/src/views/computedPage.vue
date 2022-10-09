<template>
    <div>
        <a-button @click="clickDo">点击</a-button>
        <data-computed :num0="num0" :num1="num1" :num2="num2" :visible="visible" @cancel="visible=false" />
    </div>
</template>
<script>
import DataComputed from './computedPage/index.vue';
export default {
    name: 'computedPage',
    components: { DataComputed },
    data() {
        return {
            id: 123,
            visible: false,
            num0: 0,
            num1: 0,
            num2: 0,
        };
    },
    methods: {
        /**
         * <br />##################arrMap######################
        <h2>num1是data中的变量，其初始值为：{{num1}}</h2>
        <h2>点击按钮后，data中的num1变化为：{{num1}}</h2>
        <h2>点击按钮后，computed中的c_num1变化为：{{c_num}}</h2>
        <button @click="outerNumChange">给num1+10</button>
        <hr />
        <h1>1.data定义的属性不会因为它的赋值变量的变化而变化</h1>
        <h1>2.computed定义的属性会随它的赋值变量的变化而变化</h1>

        * 第二个例子
        父组件改变 props，子组件如果直接使用 props，会触发子组件更新
        2. 父组件改变 props，子组件如果将 props 放进 data 中 再使用，不会触发子组件更新
        3. 父组件改变 props，子组件如果将 props 放进 computed 中再使用，会触发子组件更新
         * **/
        clickDo() {
            this.visible = true;
            this.num0 += 1;
            this.num1 += 1;
            this.num2 += 1;
        },
    },
};
</script>
<style scoped>
</style>