
const routes =[

      //  商品管理-商品列表
      {
          path: '/producte_list',
          component: resolve => require(['../components/page/Commodity management/Producte list/Producte_list.vue'], resolve)
      },
      //  商品管理-商品列表-编辑商品
      {
          path: '/editProducte',
          component: resolve => require(['../components/page/Commodity management/Producte list/sections/EditProducte.vue'], resolve)
      },


      // 商品管理-未审核商品列表
      {
          path: '/unchecked_list',
          component: resolve => require(['../components/page/Commodity management/Unchecked list of goods/UncheckedList.vue'], resolve)
      },

      //  商品管理-置顶管理页面
      {
          path: '/top_management',
          component: resolve => require(['../components/page/Commodity management/Top management/TopManagement.vue'], resolve)
      },
      //  商品管理-置顶管理页面-添加置顶商品
      {
          path: '/addTopManagement',
          component: resolve => require(['../components/page/Commodity management/Top management/sections/addTopManagement.vue'], resolve)
      },

      //  商品管理-商品回收站页面
      {
          path: '/commodity_recovery_station',
          component: resolve => require(['../components/page/Commodity management/Commodity recovery station/CommodityRecoveryStation.vue'], resolve)
      },
        //  商品管理-商品侵权管理页面
      {
          path: '/tort_commodity_management',
          component: resolve => require(['../components/page/Commodity management/Tort commodity management/TortCommodityManagement.vue'], resolve)
      },
      //  商品管理-DateFeed页面
      {
          path: '/date_feed',
          component: resolve => require(['../components/page/Commodity management/DateFeed/DateFeed.vue'], resolve)
      },

]
export default routes