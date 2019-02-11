
const routes =[

      //类目频道-后台类目--
      {
        path: '/backstageCategory',
        component: resolve => require(['../components/page/Catalogue channel/Backstage category/BackstageCategory.vue'], resolve)
      },
      //类目频道-后台类目-添加后台类目EditBackstageCategory.vue
      {
        path: '/addBackstageCategory',
        component: resolve => require(['../components/page/Catalogue channel/Backstage category/sections/AddBackstageCategory.vue'], resolve)
      },
      //类目频道-后台类目-修改后台类目
      {
        path: '/editBackstageCategory',
        component: resolve => require(['../components/page/Catalogue channel/Backstage category/sections/EditBackstageCategory.vue'], resolve)
      },


      //类目频道-频道排序
      {
        path: '/channelSorting',
        component: resolve => require(['../components/page/Catalogue channel/Channel sorting/ChannelSorting.vue'], resolve),
      },
      //类目频道-频道排序-修改编辑
      {
        path: '/channelSortingEdit',
        component: resolve => require(['../components/page/Catalogue channel/Channel sorting/sections/ChannelSortingEdit.vue'], resolve)
      },
      //类目频道-频道排序-添加规则
      {
        path: '/addChannelRule',
        component: resolve => require(['../components/page/Catalogue channel/Channel sorting/sections/AddChannelRule.vue'], resolve)
      },



      //类目频道-利润比分析
      {
        path: '/profitRatioManagement',
        component: resolve => require(['../components/page/Catalogue channel/Profit ratio management/ProfitRatioManagement.vue'], resolve)
      },
      //类目频道-分类页排序
      {
        path: '/sortingPageSorting',
        component: resolve => require(['../components/page/Catalogue channel/Sorting page sorting/SortingPageSorting.vue'], resolve)
      
      },


      //类目频道-网站频道
      {
        path: '/websiteChannel',
        component: resolve => require(['../components/page/Catalogue channel/Website channel/WebsiteChannel.vue'], resolve)
      },
      //类目频道-网站频道-添加频道
      {
        path: '/addChannel',
        component: resolve => require(['../components/page/Catalogue channel/Website channel/sections/AddChannel.vue'], resolve)
      },
      //类目频道-网站频道-修改频道
      {
        path: '/editChannel',
        component: resolve => require(['../components/page/Catalogue channel/Website channel/sections/EditChannel.vue'], resolve)
      }

]
export default routes