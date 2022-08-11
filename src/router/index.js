import Vue from 'vue'
import Router from 'vue-router'
const layout = () => import('@/components/layout')

Vue.use(Router)

const router = new Router({
  mode: 'history',  //去掉url中的#
  //mode:"hash",
  routes: [
    {path:"", redirect:"/index"},   //重新定向到home组件
    {path:"/index", component:()=>import("@/views/Index/")},
    {path:"/login", component:()=>import("@/views/Index/login")},  
  ]
})

// 固定的路由表
export const fixedRouter = [{
    path: '',
    component:()=>import("@/views/Index/login"),
    hidden: true
  },
  {
    path: '/index',
    component:()=>import("@/views/Index/login"),
    hidden: true
  },
    {path:"/login", component:()=>import("@/views/Index/login")},  

  {
    path: '/index',
    component: layout, //整体页面的布局(包含左侧菜单跟主内容区域)
    children: [{
      path: '',
      component:  ()=>import("@/views/Index/login"),
      meta: {
        title: '首页', //菜单名称
        roles: ['user', 'admin'], //当前菜单哪些角色可以看到
        icon: 'el-icon-info' //菜单左侧的icon图标
      }
    }]
  },
  {
    path: '*',
    component:()=>import("@/views/Index/login"),
    hidden: true
  },
]
// 需要权限判断展示的路由
export const permissionRouter = [
{
  path: "/home",
  component: layout,
  name: "Example",
  meta: {title: "",icon: "el-icon-success",roles: ['admin']},
  children: [{
      path: "",name: "Table",component: ()=>import("@/views/Home/index"),meta: {title: "",icon: "el-icon-goods",}
  },
    
  ]
},
{
  path: "/menu",
  component: layout,
  name: "menu",
  meta: {title: "菜单管理",icon: "el-icon-success",roles: ['admin']},
  children: [{
      path: "",name: "Table",component: ()=>import("@/views/Home/Menu/index"),meta: {title: "",icon: "el-icon-goods",}
  },
    {
      path: "/addmenu",name: "Table",component: ()=>import("@/views/Home/Menu/addmenu"),meta: {title: "",icon: "el-icon-goods",}
    },
  ]
},
{
  path: "/user",
  component: layout,
  name: "menu",
  meta: {title: "管理员管理",icon: "el-icon-success",roles: ['admin']},
  children: [{
      path: "",name: "Table",component: ()=>import("@/views/Home/User/index"),meta: {title: "",icon: "el-icon-goods",}
  },
    {
      path: "/adduser",name: "Table",component: ()=>import("@/views/Home/User/adduser"),meta: {title: "",icon: "el-icon-goods",}
    },
  ]
},
]


export default new Router({
  mode: 'history',  //去掉url中的#
  routes: fixedRouter

})
