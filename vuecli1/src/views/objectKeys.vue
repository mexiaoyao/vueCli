<template>
    <div>
        ------------------------
        <a-button @click="clickDo">点击</a-button>
    </div>
</template>
<script>
export default {
    name: 'objectKeys',
    data() {
        return {
            data: { a: 1, b: 2, c: 9, d: 4, e: 5 },
        };
    },
    methods: {
        /**
         * Object.keys（）的详解和用法
            在实际开发中，我们有时需要知道对象的所有属性;
            ES5 引入了Object.keys方法，成员是参数对象自身的（不含继承的）所有可遍历（ enumerable ）属性的键名。
         * **/
        clickDo() {
            console.log(Object.keys(this.data)); //["a", "b", "c", "d", "e"]
            let ss = Object.keys(this.data).map((key, item) => {
                console.log(key, this.data[key]); //key=>属性名    data[key]=>属性值
                console.log('-------' + key);
                return key;
            });
            console.log(ss);
        },
    },
};
</script>
<style scoped>
</style>