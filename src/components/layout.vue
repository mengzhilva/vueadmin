<template>
  <div class="app_wapper">
  <el-container style=" border: 1px solid #eee">
            
        <el-header class="el-headerasa" style="height: 48px">
          <el-link type="primary" class="toptitle" >后台</el-link>

            <el-dropdown class="topusername" :hide-on-click="false">
               <el-image
      style="width: 24px; height: 24px"
      src="http://admin.xmanaso.cn//static/admin/dist/img/user2-160x160.jpg"></el-image>
              <span class="el-dropdown-link">
         abc<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item >
          <el-button @click="outSystem" size="mini" plain type="primary">退出</el-button></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

        </el-header>
  <el-container>

  <el-aside  width="collapse" style="top:50px;background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1-0']"
    
          :collapse="isCollapse">
      
          <!-- 菜单组件 -->
          <side-Meuns :routes="getRoutes"></side-Meuns>
          <div class="box_bgd" @click="isC">
            <!-- 点击展开收起导航和切换对应图标 -->
            <i class="el-icon-s-fold" v-show="block"></i>
            <i class="el-icon-s-unfold" v-show="toggle"></i>
          </div>
    </el-menu>
  </el-aside>
        <div style="
                position: fixed;

                bottom: 35px;
                right: 25px;
                width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgb(0 0 0 / 12%);
    cursor: pointer;
    position: fixed;
    z-index: 5;
            "
            v-if="btnFlag"
            @click="backTop"
            >
            <i class="el-icon-caret-top" style="font-size:24px;cursor: pointer;"></i>    </div>

   
     <el-main  class="zhumain" id="myBtn" ref="zhumain" :style="mainstyle" >

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
       btnFlag: false,
      loadingmainbody:false,
      userRole: 'Topest',
      isCollapse: false, //导航栏默认为展开
      toggle: false, //第二个图标默认隐藏
      block: true, //默认显示第一个图标
    }
  },
  methods: {
    outSystem() { //退出系统
      localStorage.setItem("userRole", 'unload')
      // 跳转到登录页的时候顺便刷新
      window.location.href = window.location.origin + window.location.pathname
    },
     isC() {
      this.isCollapse = !this.isCollapse;
      this.toggle = !this.toggle;
      this.block = !this.block;
      console.log(this.$refs.zhumain)
      if(this.isCollapse){
       this.mainstyle = 'left:55px'
      }else{
       this.mainstyle = 'left:160px'
      }

    },
  },
  mounted() {
    // console.log("菜单的展开跟路由有关系，查看elementui--el-menu  的default-active 属性")
    // console.log(this.$route.path)
  }
}
</script>