<template>
    <span :class="'icon-' + name" :style="{fontSize:size+'px',color:color}" class="iconfont"></span>
</template>
<script>
export default {
    name: 'icon-index',
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
@import '../../../public/iconfont/iconfont.css';
</style>