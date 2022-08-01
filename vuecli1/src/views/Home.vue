<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <a-button type="primary">Ant Design Vue</a-button>
        <a-icon style="font-size:80px;color: #8be27e;" type="team" />########################
        <icon-font style="color:#686868;font-size:58px;" type="icon-qunzuduoren" />
        {{restData}}
        <a-button @click="bandClick">配置</a-button>
        <a-button @click="resetClick">重置</a-button>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import moment from 'moment';
export default {
    name: 'home',
    components: {
        HelloWorld,
    },
    data() {
        return {
            restData: 123,
        };
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
        console.log('#################useDiff#######################');
        this.useDiff();
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

        /**
         * 将对象的值恢复到初始状态
         * 例如restData初始值是123，后来经过多次变化，经过此次处理后，会恢复为123
         * **/
        resetClick() {
            this.restData = this.$options.data.call(this).restData;
        },
        bandClick() {
            this.restData = 456;
        },
        /**
         * diff()使用方法
         * **/
        useDiff() {
            //npm install moment --save
            //import moment from 'moment'
            //Vue.prototype.$moment = moment; 在main中实现全局
            console.log(moment.locale('zh-cn')); //zh-cn中文 en英文
            console.log(moment().format('YYYY-MM-DD HH:mm:ss dddd a')); //dddd 周几 a下午上午

            console.log(moment('20221031', 'YYYYMMDD').fromNow());

            console.log(moment().startOf('day').format('YYYY-MM-DD HH:mm:ss dddd a'));

            console.log(moment().endOf('day').format('YYYY-MM-DD HH:mm:ss dddd a'));

            console.log(moment().startOf('hour').fromNow());

            console.log(moment().startOf('day').fromNow());

            console.log(moment().subtract(10, 'days').calendar());

            console.log(moment().subtract(3, 'days').calendar());

            console.log(moment().add(10, 'days').calendar());

            console.log(moment().add(3, 'days').calendar());

            var a = moment([2022, 12, 19]);
            var b = moment([2022, 12, 25]);
            //let cha1 = a.diff(b); // 86400000
            // debugger;
            // console.log(cha1);
        },
    },
};
</script>
