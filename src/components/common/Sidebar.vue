<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: '5',
                        title: '类目频道',
                        subs: [
                            {
                                index: 'backstageCategory',
                                title: '后台类目'
                            },
                            {
                                index: 'websiteChannel',
                                title: '网站频道'
                            },
                            {
                                index: 'channelSorting',
                                title: '频道排序'
                            },
                            {
                                index: 'profitRatioManagement',
                                title: '利润比管理'
                            },
                            {
                                index: 'sortingPageSorting',
                                title: '分类页排序'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'producte_list',
                        title: '商品管理',
                        subs: [
                            {
                                index: 'producte_list',
                                title: '商品列表'
                            },
                            {
                                index: 'unchecked_list',
                                title: '未审核商品列表'
                            },
                            {
                                index: 'tort_commodity_management',
                                title: '侵权商品管理'
                            },
                            {
                                index: 'top_management',
                                title: '置顶管理'
                            },
                            {
                                index: 'commodity_recovery_station',
                                title: '商品回收站'
                            },
                            {
                                index: 'date_feed',
                                title: 'DateFeed'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '订单',
                        subs: [
                            {
                                index: 'baseform',
                                title: '基本表单'
                            },
                            {
                                index: 'vueeditor',
                                title: '编辑器'
                            },
                            {
                                index: 'markdown',
                                title: 'markdown'
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                     {
                        icon: 'el-icon-date',
                        index: 'orderList',
                        title: '订单管理',
                        subs: [
                            {
                                index: 'orderList',
                                title: '订单列表'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: '4',
                        title: '渠道',
                        subs: [
                            {
                                index: 'baseform',
                                title: '基本表单'
                            },
                            {
                                index: 'vueeditor',
                                title: '编辑器'
                            },
                            {
                                index: 'markdown',
                                title: 'markdown'
                            },
                            {
                                index: 'basecharts',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'drag',
                        title: '财务'
                    },
                    {
                        icon: 'el-icon-view',
                        index: 'jur',
                        title: '权限'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'sys',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'system_menu_list',
                                title: '后台菜单列表'
                            },
                            {
                                index: 'system_menu_add',
                                title: '后台菜单添加'
                            },
                            {
                                index: 'department_list',
                                title: '部门列表'
                            },                            
                            {
                                index: 'department_add',
                                title: '部门增加'
                            },
                            {
                                index: 'managers_list',
                                title: '管理员列表'
                            },
                            {
                                index: 'managers_add',
                                title: '管理员增加'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
