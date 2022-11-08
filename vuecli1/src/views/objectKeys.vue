<template>
    <div>
        ------------------------
        <a-button @click="clickDo">objectKeys</a-button>
        <a-button @click="objectValues">objectValues</a-button>
        <a-button @click="objectEntries">objectEntries</a-button>
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

        /**
         * https://zhuanlan.zhihu.com/p/99342755 查看兼容性
         * Object.values()
         * Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（ enumerable ）属性的键值。
         *
         * 处理数组时：会将数组中的元素合并成数组作为返回值返回（然并卵--基本上用不到）。
         *
         * 处理字符串是：方法会将字符串拆分成单个字符并以数组的形式返回，其中，如果字符串中有空格，方法也会将其处理成空字符进行返回。（将字符转为数组储存）
         *
         * ***需要注意的是，如果属性名为数值的属性，是按照数值大小，从小到大遍历的，因此返回的顺序是 b、c、a。***
         * **/
        objectValues() {
            let obj1 = { 100: 'a', 2: 'b', 7: 'c' };
            console.log(Object.keys(obj1));
            let ss = Object.values(obj1);
            console.log(ss);
            console.log('-----------------values--对象--------------');
            let arr = ['a', 'b', 'c'];
            console.log(arr);
            let s1 = Object.values(arr);
            console.log(s1);
            console.log('-----------------values----数组------------');
            let arr1 = '[a, b, c]';
            console.log(arr1);
            let s2 = Object.values(arr1);
            console.log(s2);
            console.log('-----------------values----字符串------------');
        },
        /**
         * https://zhuanlan.zhihu.com/p/99342755 查看兼容性
         * Object.entries()
         * Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（ enumerable ）属性的键值对数组。
         * **/
        objectEntries() {
            let aa = { a: 1, b: 2, c: 9, d: 4, e: 5 };
            console.log(aa);
            let ss = Object.entries(aa);
            console.log(ss);
        },
    },
};
</script>
<style scoped>
</style>