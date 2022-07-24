<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <a-button type="primary">Ant Design Vue</a-button>
        <a-icon style="font-size:80px;color: #8be27e;" type="team" />########################
        <icon-font style="color:#686868;font-size:58px;" type="icon-qunzuduoren" />
    </div>
</template>

<script>
import { Icon } from 'ant-design-vue';
import iconUrl from '@/assets/iconfont/iconfont.js';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: iconUrl,
});
import HelloWorld from '@/components/HelloWorld.vue';
//import { IconFont } from '@/core/IconFont';

export default {
    name: 'home',
    components: {
        HelloWorld,
        IconFont,
    },
    created() {
        console.log('###############arrayEvery#########################');
        this.arrayEvery();
        console.log('##################arrMap######################');
        this.arrMap();
        console.log('##################arrFilter######################');
        this.arrFilter();
        console.log('##################arrayIndexOf######################');
        this.arrayIndexOf();
        console.log('#################arrayFind#######################');
        this.arrayFind();
    },
    methods: {
        /**
         * every不满足条件时即返回false并只执行此次，不再继续执行
         * **/
        arrayEvery() {
            const parmes = [1, 2, 3, 4, 5];
            console.log(
                parmes.every((item, index, arr) => {
                    console.log('item=>' + item + ' index=》' + index + ' arr=>' + arr);
                    return item > 3;
                })
            );
            console.log(parmes);
        },
        /**
         * 会遍历所有参数
         * 遍历中必须加都return 否则返回结果中不满足条件的会返回undefinde
         *
         * **/
        arrMap() {
            const arrMap = [1, 2, 3, 4, 5];
            let arrMap1 = arrMap.map((item) => {
                let parmes = item * 2;
                console.log('item=》' + parmes);
                return parmes;
            });
            console.log(arrMap1);
            console.log(arrMap);
        },
        /**
         * 返回满足条件的变量组成新数组
         * 遍历全部
         * **/
        arrFilter() {
            const arrFilter = [1, 2, 3, 4, 5, 6];
            let arrFilter1 = arrFilter.filter((item, index, arr) => {
                console.log('item:' + item + 'index:' + index + 'arr:' + arr);
                return item > 3;
            });
            console.log('arrFilter1:' + arrFilter1);
        },
        /**
         * 返回满足条件的变量下标
         * **/
        arrayIndexOf() {
            const arrayIndexOf = [1, 2, 3, 4, 5, 6];
            let num = arrayIndexOf.indexOf(3, 0); // 等同array.indexOf(3)
            console.log('num:' + num);
        },
        /**
         * 返回第一个满足条件的变量
         * **/
        arrayFind() {
            const arrFind = [1, 2, 3, 4, 5];
            let ret = arrFind.find((item) => {
                return item > 3;
            });
            console.log('ret:' + ret);
        },
    },
};
</script>
