
const routes =[
      //订单列表
      {        
          path: '/orderList',
          component: resolve => require(['../components/page/Order List/OrderList.vue'], resolve)      
      },
      //订单列表
        {        
            path: '/showInOrder',
            component: resolve => require(['../components/page/Order List/sections/ShowInOrder.vue'], resolve)      
        },
]

export default routes