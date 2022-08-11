<template>
  <div class="menuleft">
          <el-menu-item index="1-0" class="el-menuasa" @click="goto('user')"><i class="el-icon-edit"  title="用户管理"></i>用户管理</el-menu-item>



  </div>
</template>

      <script>
import '@/styles/index.css'
export default {
  name: 'sideMeuns',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      meuns: ''
    }
  },
  methods: {
    goto(tos) {
      this.$router.push({
        path: '/'+tos
      })
    },
  },
  mounted() {
    this.meuns = this.routes
  }
}
</script>