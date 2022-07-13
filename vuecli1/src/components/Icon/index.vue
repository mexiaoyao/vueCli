<template>
    <span :class="'icon-' + name" :style="{fontSize:size+'px',color:color}" class="iconfont"></span>
    <!-- <iconAliyun :class="'icon-' + name" :style="{fontSize:size+'px',color:color}" class="iconfont" /> -->
</template>
<script>
import { Icon } from 'ant-design-vue';
// const iconAliyun = Icon.createFromIconfontCN({
//     scriptUrl: '../public/iconfont/iconfont.js', // 在 iconfont.cn 上生成
// });
export default {
    name: 'icon-index',
    //components: [iconAliyun],
    props: {
        name: {
            type: String,
            default: 'tree-unchecked-selected',
        },
        size: {
            type: Number,
            default: 12,
        },
        color: {
            type: String,
            default: '#CCCCCC',
        },
    },
};
</script>
<style lang="less">
</style>