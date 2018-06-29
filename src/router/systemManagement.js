
const routes =[

        //  系统管理-后台菜单列表
        {
          path: '/system_menu_list',
          component: resolve => require(['../components/page/System management/System Menu List/SystemMenuList.vue'], resolve)
        },
        //  系统管理-后台菜单列表-后台菜单修改
        {
          path: '/system_menu_edit',
          component: resolve => require(['../components/page/System management/System Menu List/sections/SystemMenuEdit.vue'], resolve)
        },

        //  系统管理-后台菜单添加
        {
          path: '/system_menu_add',
          component: resolve => require(['../components/page/System management/System Menu Add/SystemMenuAdd.vue'], resolve)
        },
        // 系统管理-部门增加
        {
          path: '/department_add',
          component: resolve => require(['../components/page/System management/Department Add/DepartmentAdd.vue'], resolve)
        },
        //  系统管理-部门列表
        {
          path: '/department_list',
          component: resolve => require(['../components/page/System management/Department List/DepartmentList.vue'], resolve)
        },
        //  系统管理-部门列表-部门修改
        {
          path: '/department_edit',
          component: resolve => require(['../components/page/System management/Department List/sections/DepartmentEdit.vue'], resolve)
        },
        //  系统管理-管理员增加
        {
          path: '/managers_add',
          component: resolve => require(['../components/page/System management/Managers Add/ManagersAdd.vue'], resolve)
        },               
        //  系统管理-管理员列表
        {
          path: '/managers_list',
          component: resolve => require(['../components/page/System management/Managers List/ManagersList.vue'], resolve)
        }


]
export default routes