<template>
  <div class="app_wapper">
  <el-container style=" border: 1px solid #eee">
            
        <el-header class="el-headerasa" style="height: 48px">
          <el-link type="primary" class="toptitle" >ASM投放后台</el-link>
          <el-button class="topindexuser" @click="login" type="primary">登录</el-button>
          <el-button class="topindexuser" @click="zhuche" type="primary">注册</el-button>
            

        </el-header>
  <el-container>
     <el-main>

      <router-view />
 </el-main>
  </el-container>
</el-container>
</div>
</template>
<script>
// 左侧菜单组件
import sideMeuns from '@/components/sideMeuns'
import { permissionRouter } from '@/router'
export default {
  computed: {
    getRoutes() {
      return global.antRouter
    }
  },
  components: {
    sideMeuns
  },
  data() {
    return {
      userRole: 'Topest',
    }
  },
  methods: {
    outSystem() { //退出系统
      localStorage.setItem("userRole", 'unload')
      // 跳转到登录页的时候顺便刷新
      window.location.href = window.location.origin + window.location.pathname
    },
    login() { 
      this.$router.push({
        path: '/login'
      })
    },
    zhuche() { 
      this.$router.push({
        path: '/zhuche'
      })
    },

  },
  mounted() {
    // console.log("菜单的展开跟路由有关系，查看elementui--el-menu  的default-active 属性")
    // console.log(this.$route.path)
  }
}
</script>