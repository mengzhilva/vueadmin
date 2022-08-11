<template>
  <div>
    <div class="topshowtitle">添加账号</div>


  <el-container class="addusermaindiv">
     <el-main>
		<div class="addusermain">
		<div class="topshowtitle topshowtitleaddu">添加账号</div>
			<div class="adduserform">
				<label>新建账户名称</label>
				<el-input v-model="input" class="adduserinput" placeholder="账户名称"></el-input>
				<label>选择一个应用</label>
				    <el-select
				    v-model="value"
				    filterable
				    remote
				    reserve-keyword
				    placeholder="请输入关键词"
				    :remote-method="remoteMethod"
				    :loading="loading" class="adduserinput">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>



			</div>

				  <div class="submitadd">

				  <el-button @click="prevstep">取消</el-button>
				  <el-button type="primary" @click="nextstep">下一步</el-button>
				  </div>

		</div>
 	</el-main>
  </el-container>


  </div>
</template>



<script>
import { ref } from 'vue'

 export default {
          data() {
      return {
      input: '',
        options: [],
        value: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"]
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: `value:${item}`, label: `label:${item}` };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      },

      prevstep(){
              history.go(-1)
      },
      nextstep(){
                this.$router.push({
                  path: '/addads'
                })
      }
    }
       }
</script>