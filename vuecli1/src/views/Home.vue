<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <a-button type="primary">Ant Design Vue</a-button>
        <a-icon style="font-size:80px;color: #8be27e;" type="team" />########################
        <icon-font style="color:#FF0000;font-size:58px;" type="icon-qunzuduoren" />
        {{restData}}
        ###
        {{username}}
        <a-button @click="bandClick">配置</a-button>
        <a-button @click="resetClick">重置</a-button>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import moment from 'moment';
import axios from 'axios';
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
    computed: {
        username() {
            // 我们很快就会看到 `params` 是什么
            return this.$route.name;
        },
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
        console.log('#################useMoment#######################');
        this.useMoment();
        console.log('#################useAxios#######################');
        this.useAxios();
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
         * 读 费哦特
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
         * 格式	含义	举例	备注
            yyyy	年	2021	同YYYY
            M	月	1	不补0
            MM	月	01	 
            d	日	2	不补0
            dd	日	02	 
            dddd	星期	星期二	 
            H	小时	3	24小时制；不补0
            HH	小时	18	24小时制
            h	小时	3	12小时制，须和 A 或 a 使用；不补0
            hh	小时	03	12小时制，须和 A 或 a 使用
            m	分钟	4	不补0
            mm	分钟	04	 
            s	秒	5	不补0
            ss	秒	05	 
            A	AM/PM	AM	仅 format 可用，大写
            a	am/pm	am	仅 format 可用，小写

            let time = new Date();  //获取当前时间  Tue May 11 2021 18:42:51 GMT+0800 (中国标准时间)
            let year = time.getFullYear();  //获取年 2021
            let month = time.getMonth() + 1;  //获取月  5
            let day = time.getDate();    //获取天  11
            let h = time.getHours();   //获取小时  18
            let m = time.getMinutes();  //获取分钟  42
            let s = time.getSeconds();    //获取秒  51
            let weekDay = time.getDay();  //获取星期  2

            moment.locale(); // zh-cn
            moment().format('LT'); // 18:42
            moment().format('LTS'); // 18:42:31
            moment().format('L'); // 2021/05/11
            moment().format('l'); // 2021/5/11
            moment().format('LL'); // 2021年5月11日
            moment().format('ll'); // 2021年5月11日
            moment().format('LLL'); // 2021年5月11日下午6点42分
            moment().format('lll'); // 2021年5月11日 18:42
            moment().format('LLLL'); // 2021年5月11日星期二下午6点42分
            moment().format('llll'); // 2021年5月11日星期二 18:42
         * **/
        useMoment() {
            //读 meng te 第四声
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

        /**
         * axios mock
         * **/
        useAxios() {
            axios
                .post('/list')
                .then((res) => {
                    const rest = res;
                    console.log('rest:' + rest);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
