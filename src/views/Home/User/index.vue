<template>
  <div>
    <div class="topshowtitle">用户管理</div>
    <div class="searchmain">
      <div class="searchmaininfo">
        <el-input class="adssearchmain"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input2" clearable>
        </el-input>

        <el-date-picker
        v-model="value2"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions">
        </el-date-picker>
        <el-button>重置</el-button>
        <el-button type="primary">查询</el-button>
      </div>


    </div>

   <vxe-table
          :align="allAlign"
          :data="tableData">
          <vxe-table-column field="username" title="账号"></vxe-table-column>
          <vxe-table-column field="telephone" title="电话"></vxe-table-column>
          <vxe-table-column field="updatetime" title="最近登录时间"></vxe-table-column>
        </vxe-table>

  </div>
</template>

<script>
import { ref } from 'vue'

 export default {
          data () {
            return {
              pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: '',
      input2: '',
      value: '',
              options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
              allAlign: null,
              tableData: []
            }
          },
            methods: {
              adduser() {
                this.$router.push({
                  path: '/adduser'
                })
              }
            },
            mounted() {
                let _this = this;
                this.$axios({
                      method: 'post',
                      url: '/api/users/lists',
                      data: {}
                    }).then(res => {
                      if(res.data.code==0){
                            _this.tableData = res.data.data.list
                        }else{

                        this.$message({
                          message: res.data.msg,
                          type: 'warning'
                        });
                    }
                    }).catch(error => {
                     // alert('账号或密码错误');
                      console.log(error);
                }); 
            }
        }
</script>