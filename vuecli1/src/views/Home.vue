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
import { debug } from 'console';
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
        console.log('###############arraySome#########################');
        this.arraySome();
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
        console.log('#################flatMet#######################');
        this.flatMet();
        console.log('#################booleanMet#######################');
        this.booleanMet();
        console.log('#################assignMet#######################');
        this.assignMet();
        console.log('#################spliceMet#######################');
        this.spliceMet();
        console.log('#################pop()#######################');
        this.popMet();
    },
    methods: {
        spliceMet() {
            let arr = [1, { a: 5 }, 3, 4, 5, 6];
            //let ar1 = arr.splice(0, 1); //返回被删除的元素
            //debugger;
            //console.log('ar1:' + ar1);
            let ar2 = arr.splice(0); //arr从小标为1(包括1)的元素开始截取（达到复制功能）,此时arr只剩第一个元素，其他元素已经被删除
            console.log('ar2:' + ar2);
        },
        /**
         * Object.assign(target, ...sources);target: 目标对象sources: 源对象
         * Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
         *
         * ...sources会将所有属性的值赋值给目标对象，如有重复属性即会自动后面的覆盖前面的，源对象属性值不变
         * **/
        assignMet() {
            let a = { a: 1, b: 2 };
            let b = { c: 3, d: 4 };
            let c = { d: null };
            Object.assign(a, b, c);
            console.log('a:' + a);
            console.log('b:' + b);
            //console.log('c:' + c);
        },
        /**
         * every不满足条件时即返回false并只执行此次，不再继续执行
         * every()方法的定义与用法：
            every()方法用于检测数组中的所有元素是否都满足指定条件（该条件为一个函数）。
            every()方法会遍历数组的每一项，如果有有一项不满足条件，则表达式返回false,剩余的项将不会再执行检测；如果遍历完数组后，每一项都符合条，则返回true。

            //reverse()倒序

            **空数组返回true

            兼容性：不兼容IE6～8。
         * **/
        arrayEvery() {
            const parmes = [1, 3, 2, 4, 5];
            console.log(
                parmes.reverse().every((item, index, arr) => {
                    console.log('item=>' + item + ' index=》' + index + ' arr=>' + arr);
                    return item > 3;
                })
            );
            console.log(parmes);
        },

        /**
         *不会对空数组进行检测，不会改变数组 只要有一个满足条件就会返回true
         空数组返回false

         兼容性：不兼容IE6～8。
         * **/
        arraySome() {
            const parmes = [1, 3, 2, 4, 5];
            console.log(
                parmes.some((item, index, arr) => {
                    console.log('item=>' + item + ' index=》' + index + ' arr=>' + arr);
                    return item > 3;
                })
            );
            console.log(parmes);
        },

        /**
         * 会遍历所有参数
         * 遍历中必须加都return 否则返回结果中不满足条件的会返回undefinde
         *兼容性：不兼容IE6～8。
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
         * 兼容性：不兼容IE6～8。
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
         * 兼容性：不兼容IE6～8。
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

        /**
         *flat 将多维数组拉平 成一维数组
         * **/
        flatMet() {
            let arr = [1, 2, 3, [3, 4, 5, [6, 7], 8], 9];
            console.log('flat:' + arr.flat());
        },

        /**
         * 其它数据类型转为 Boolean为true的有
            在js中只有“0/NaN/null/空字符串/undefined”这五个值转换为布尔类型的false，其余都是true。
            ² undefined（未定义，找不到值时出现）
            ² null（代表空值）
            ² 0——数字0（字符串"0"布尔值为true）
            ² NaN（无法计算结果时出现，表示"非数值"）
            ² ""（双引号）或''（单引号）空字符串（中间有空格时也是true）
            字符串"false"布尔值为true（所有字符串都为真）。
            **/
        booleanMet() {
            console.log('0:' + Boolean(0));
            console.log('NaN:' + Boolean(NaN));
            console.log('null:' + Boolean(null));
            console.log('undefined:' + Boolean(undefined));
            console.log('' + Boolean(''));
            console.log(' ' + Boolean(' '));
            console.log('false' + Boolean(false));
            console.log('false' + Boolean('false'));

            const a = 0;
            const b = 1;
            console.log(a && 'hello');
            console.log(b && 'hello');
            console.log(a || 'hello');
            console.log(b || 'hello');

            const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
            let str0 = paragraph.replace(
                /[`:_.~!@#$%^&*()\+=<>?"{}|,\/;'\\[\]·~！@#￥%……&*（）——\+={}|《》？：“”【】、；‘’，。、]/g,
                ''
            );
            let arr1 = str0.split(' ');

            const mapArr = new Map(); //创建一个Map结构数据
            arr1.map((item) => {
                //遍历数组
                if (mapArr.has(item)) {
                    //如果Map数据中存在当前项，给当前项值（即个数）+1
                    let current = mapArr.get(item);
                    mapArr.set(item, (current += 1));
                } else {
                    //如果不存在，则添加该项并将它的个数设置为1
                    mapArr.set(item, 1);
                }
            });

            //将map结构数据转换成数组对象，每一项也是数组的形式包裹的key和value
            const mapEntries = [...mapArr.entries()];
            mapEntries.sort((pre, nxt) => {
                return pre[1] < nxt[1] ? 1 : -1;
            }); //给mapEntries 排序
            let target = mapEntries.map((item) => {
                //每个数组中是对象，对象的键值是单词，键值是，单词出现的频率
                let obj = new Object();
                let key = item[0];
                let value = item[1];
                obj[key] = value;
                return obj;
                //返回单词的顺序，从上到下
                //return item[0];
            });
            let target1 = target.splice(0, 5);
            console.log('target1', target1); //target [ 'ab', 'abc', 'a', 'bc' ]
        },

        /**
         * pop() 方法用于删除数组的最后一个元素并返回删除的元素。
            注意：此方法改变数组的长度！
            提示： 移除数组第一个元素，请使用 shift() 方法。

            延伸：unshift()
            unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
            注意： 该方法将改变数组的数目。
            提示: 将新项添加到数组末尾，请使用 push() 方法。

            push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
            注意： 新元素将添加在数组的末尾。
            注意： 此方法改变数组的长度。
            提示： 在数组起始位置添加元素请使用 unshift() 方法。

            concat() 方法用于连接两个或多个数组。array1.concat(array2, array3,..., arrayX)
            该方法不会改变现有的数组，而是返回一个新的数组。

            splice() 方法用于添加或删除数组中的元素。
            注意：这种方法会改变原始数组。
            数组中添加新元素：
            var fruits = ["Banana", "Orange", "Apple", "Mango"];
            fruits.splice(2,0,"Lemon","Kiwi");
            fruits 输出结果：Banana,Orange,Lemon,Kiwi,Apple,Mango

            实例
            在数组中读取元素：
            var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
            var citrus = fruits.slice(1,3);
            citrus 结果输出:
            Orange,Lemon
            尝试一下 »
            定义和用法
            slice() 方法可从已有的数组中返回选定的元素。
            slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
            注意： slice() 方法不会改变原始数组。


            reverse() 方法用于颠倒数组中元素的顺序。
            颠倒数组中元素的顺序：
            var fruits = ["Banana", "Orange", "Apple", "Mango"];
            fruits.reverse();
            fruits 结果输出：Mango,Apple,Orange,Banana

            定义和用法
            sort() 方法用于对数组的元素进行排序。
            排序顺序可以是字母或数字，并按升序或降序。
            默认排序顺序为按字母升序。
            注意：当数字是按字母顺序排列时"40"将排在"5"前面。
            使用数字排序，你必须通过一个函数作为参数来调用。
            函数指定数字是按照升序还是降序排列。
            这些说起来可能很难理解，你可以通过本页底部实例进一步了解它。
            注意： 这种方法会改变原始数组！。
            数字排序（数字和升序）：
            var points = [40,100,1,5,25,10];
            points.sort(function(a,b){
                return a-b；
            });
            fruits输出结果：
            1,5,10,25,40,100      

            数字排序（数字和降序）：
            var points = [40,100,1,5,25,10];
            points.sort(function(a,b){return b-a});
            fruits输出结果：
            100,40,25,10,5,1
            https://www.runoob.com/jsref/jsref-sort.html

            

            https://blog.csdn.net/babyxue/article/details/79884889


         * **/
        popMet(){
            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            let ss = fruits.pop();
            console.log('ss', ss); //显示Mango，即返回被删除的元素
        }
    },
};
</script>
