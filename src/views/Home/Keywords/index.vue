<template>
  <div>
    <div class="topshowtitle">关键词管理</div>
   

<el-tabs type="border-card"
          :stretch="true">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 关键词</span>

     <div class="searchmains">
      <label>账户：</label>
       <el-select class="minisearch" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      <label>广告系列：</label>
       <el-select class="minisearch" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      <label>广告组：</label>
       <el-select class="minisearch" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      <label>Search Match：</label>
       <el-select class="minisearch" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      <label>匹配类型：</label>
       <el-select class="minisearch" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>
     <div class="searchmains">
      <label>流行度：</label>
      <el-input v-model="input" style="width:70px;" placeholder="最小值"></el-input> <span style="color:rgba(0, 0, 0, 0.25);"> - </span> <el-input v-model="input" style="width:70px;" placeholder="最大值"></el-input>
      <label>日期：</label>
       <el-date-picker  class="minisearchdate"
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
      <label>国家：</label>
       <el-select class="minisearch" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      <label>账户类型：</label>
       <el-select class="minisearch" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      <label>报价：</label>
      <el-input v-model="input" style="width:70px;" placeholder="最小值"></el-input> <span style="color:rgba(0, 0, 0, 0.25);"> - </span> <el-input v-model="input" style="width:70px;" placeholder="最大值"></el-input>
    </div>
     <div class="searchmains">
      <label>花费：</label>
      <el-input v-model="input" style="width:70px;" placeholder="最小值"></el-input> <span style="color:rgba(0, 0, 0, 0.25);"> - </span> <el-input v-model="input" style="width:70px;" placeholder="最大值"></el-input>
      <label>下载：</label>
      <el-input v-model="input" style="width:70px;" placeholder="最小值"></el-input> <span style="color:rgba(0, 0, 0, 0.25);"> - </span> <el-input v-model="input" style="width:70px;" placeholder="最大值"></el-input>
      <label>cpa：</label>
      <el-input v-model="input" style="width:70px;" placeholder="最小值"></el-input> <span style="color:rgba(0, 0, 0, 0.25);"> - </span> <el-input v-model="input" style="width:70px;" placeholder="最大值"></el-input>
      <label>cpt：</label>
      <el-input v-model="input" style="width:70px;" placeholder="最小值"></el-input> <span style="color:rgba(0, 0, 0, 0.25);"> - </span> <el-input v-model="input" style="width:70px;" placeholder="最大值"></el-input>
      <label>广告追踪：</label>
       <el-select class="minisearch" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>
     <div class="searchmain">
      <div class="searchmaininfo">
      <label>关键词：</label>
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
        <el-button style="margin-left:10px;">重置</el-button>
        <el-button type="primary">查询</el-button>
      </div>


    </div>

     <div class="searchmain" style="margin-top:10px;">

        <el-button type="primary" @click="adduser">+ 新建</el-button>

       <el-select class="minisearchedit" v-model="value" placeholder="状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-button icon="el-icon-document-copy"  class="minisearchedit">复制</el-button>
        <el-button icon="el-icon-document-copy"  class="minisearchedit">修改报价</el-button>
        <el-button icon="el-icon-document-copy"  class="minisearchedit">匹配类型</el-button>
        <el-button icon="el-icon-document-copy"  class="minisearchedit">导入表格</el-button>

        <el-button icon="el-icon-tickets"  class="minisearchedit" style="float:right;">报告</el-button>
        <el-button icon="el-icon-setting"  class="minisearchedit" style="float:right;">列设定</el-button>
    </div>

     <el-table
     class="keywordtable"
    :data="tableData"
    style="width: 100%"
    tooltip-effect="dark"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
  </el-table>

  </el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 搜索关键词</span>
    我的行程
  </el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 否定关键词</span>
    我的行程
  </el-tab-pane>
</el-tabs>

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
      input: '',
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
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
              ]
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

            }
        }
</script>