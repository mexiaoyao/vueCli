<template>
    <div>
        -------------------{{popInit}}-----{{newPop}}--------
        <a-button @click="clickDo">点击</a-button>
    </div>
</template>
<script>
export default {
    name: 'popPage',
    data() {
        return {
            popInit: [0, 1, 2, 3],
            newPop: null,
        };
    },
    methods: {
        //js中的pop函数是用来删除数组中的最后一个元素的，将返回被删除元素的值。
        clickDo() {
            this.newPop = this.popInit.pop();
        },
    },
};
</script>
<style scoped>
</style>