<template>
    <div>
        ----------{{data}}--------------
        <a-button @click="clickDo">点击</a-button>
    </div>
</template>
<script>
export default {
    name: 'reduceMet',
    data() {
        return {
            data: [1, '2', true, undefined, null],
        };
    },
    methods: {
        /**
         * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
         * 参数
            参数 	描述
            function(total,currentValue, index,arr) 	必需。用于执行每个数组元素的函数。
            函数参数:
            参数 	描述
            total 	必需。初始值, 或者计算结束后的返回值。
            currentValue 	必需。当前元素
            currentIndex 	可选。当前元素的索引
            arr 	可选。当前元素所属的数组对象。
            initialValue 	可选。传递给函数的初始值
         * reducer 逐个遍历数组元素，每一步都将当前元素的值与上一步的计算结果相加（上一步的计算结果是当前元素之前所有元素的总和）——直到没有更多的元素被相加。
         * **/
        clickDo() {
            let ll = this.data.reduce((sum, item, index, arr) => {
                console.log('-------------------------------------');
                console.log('sum:', sum);
                console.log('item:', item);
                console.log('index:', index);
                console.log('arr:', arr);
                // return的值会被当成下一次循环的sum
                return sum + item;
            }, 0);
        },
    },
};
</script>
<style scoped>
</style>