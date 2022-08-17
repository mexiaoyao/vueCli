<template functional>
    <a-sub-menu>
        123
        <template v-for="item in props.menuInfo">
            <a-menu-item :key="'a-'+item.key" v-if="!item.children">{{ item.meta.title.zh }}</a-menu-item>
            <a-sub-menu :key="'sub-'+item.key" :title="item.meta.title.zh" v-else>
                <a-menu-item
                    :key="'subChil-'+index2"
                    v-for="(itemChil,index2) in item.children"
                >{{ itemChil.meta.title.zh }}</a-menu-item>
            </a-sub-menu>
        </template>
    </a-sub-menu>
</template>
<script>
export default {
    props: ['menuInfo'],
};
</script>