<template>
      <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-menu"></i>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/top_management' }">置顶管理</el-breadcrumb-item>
            <el-breadcrumb-item >添加置顶商品</el-breadcrumb-item>
        </el-breadcrumb>
        
        <el-form :model="ruleForm" ref="ruleForm" label-width="150px" class="demo-ruleForm">
            <el-form-item label="*选择添加的平台：" prop="resource">
              <el-radio-group v-model="ruleForm.resource" >
                <el-radio label="ios"></el-radio>
                <el-radio label="android"></el-radio>
                <el-radio label="wap"></el-radio>
                <el-radio label="pc"></el-radio>
                <el-radio label="all"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="*置顶页面类型：" prop="region">
              <el-select v-model="ruleForm.region">
                <el-option label="分类页" value="分类页"></el-option>
                <el-option label="频道页" value="频道页"></el-option>
                <el-option label="店铺页" value="店铺页"></el-option>
                <el-option label="搜索页" value="搜索页"></el-option>
              </el-select>
              <el-select v-model="ruleForm.catalogue">
                <el-option label="顶级类目" value="顶级类目"></el-option>
                <el-option label="美妆" value="美妆"></el-option>
                <el-option label="男装" value="男装"></el-option>
                <el-option label="女装" value="女装"></el-option>
              </el-select>
            </el-form-item>
            
            <el-form-item label="*同步到子分类：" prop="synchronization">
              <el-radio-group v-model="ruleForm.synchronization">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="*置顶sku编码：" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>

            <el-form-item label="状态：" prop="state">
              <el-radio-group v-model="ruleForm.state">
                <el-radio label="开启"></el-radio>
                <el-radio label="关闭"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="活动时间">
                <v-timedate style="display:inline-block" ref ="timedate04"></v-timedate>
                • 备注：时间过期，恢复原来的排序。
            </el-form-item>

            <el-form-item label="排序">
                99 请在列表页修改 • 备注： 数字越小，排序越前。
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
      </div>
</template>


<script>

import {ipUrl,ipUrlMusic} from "../../../../../assets/js/Config.js"
import  TimeDate  from '../../Producte list/snippets/TimeDate.vue';


  export default {
    data() {
      return {      
          ruleForm: {
            //置顶页面类型01：
            region: '',
            //置顶页面类型01
            catalogue:"",
            //是否同步子分类
            synchronization:"",
            //添加平台
            resource: '',
            //置顶sku编码：
            desc: '',
            //状态
            state:""
          }
        }
    },
    components:{
      'v-timedate':TimeDate     
      },
    methods: {     
      //商品列表
      getData(){
          var api  = ipUrlMusic("top/list?idx=6");
          this.$axios.get(api+"&page="+this.page).then((res) => {
              this.tableData = res.data.playlist.tracks
              // console.log(this.tableData)
              this.totality = res.data.playlist.tracks.length
          })
      },
      submitForm(formName) {
       this.$refs[formName].validate((valid) => {
          if (valid) {
            var formPostValue ={
                topType:{
                    region:this.ruleForm.region,
                    catalogue:this.ruleForm.catalogue
                },
                synchronization:this.ruleForm.synchronization,
                resource:this.ruleForm.resource,
                desc:this.ruleForm.desc,
                state:this.ruleForm.state,
            }
            console.log(formPostValue)

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {        
        this.$refs[formName].resetFields();
      }
    
    }
  };
</script>