<template>
    <a-menu mode="horizontal">
        <template v-for="(item,index) in menuList">
            <a-menu-item :key="'a'+index" v-if="!item.children">{{ item.meta.title.zh }}</a-menu-item>
            <sub-menu :key="'sub'+index" :menuInfo="item.children" v-else />
        </template>
    </a-menu>
</template>
<script>
import SubMenu from './subMenu';
export default {
    name: 'getMenu',
    components: { SubMenu },
    data() {
        return {
            menuList: [
                {
                    key: 'auditManage',
                    icon: 'icon-shenjirizhi',
                    path: '/audit/client',
                    meta: {
                        title: {
                            zh: '审计管理',
                            en: 'Audit Manage',
                        },
                    },
                },
                {
                    key: 'operations',
                    icon: 'icon-yunweiguanli1',
                    meta: {
                        title: {
                            zh: '运维管理',
                            en: 'Operations',
                        },
                    },
                    children: [
                        {
                            key: 'operations_serverStatus',
                            path: '/optconfig/status',
                            meta: {
                                title: {
                                    zh: '运行状态监控',
                                    en: 'Monitor Operations',
                                },
                            },
                        },
                        {
                            key: 'operations_upgradeManagement',
                            path: '/optconfig/upgrade',
                            meta: {
                                title: {
                                    zh: '升级管理',
                                    en: 'Server Update',
                                },
                            },
                        },
                    ],
                },
            ],
        };
    },
    watch: {},
};
</script>
<style>
</style>