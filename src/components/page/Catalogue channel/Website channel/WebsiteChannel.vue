<template>
    <div>

        <div class="crumbs">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item><i class="el-icon-menu"></i>类目频道</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/websiteChannel' }">网站频道</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <el-row :gutter="24" type="flex" justify="space-between">
          <el-col :span="10">
              <el-row :gutter="24" type="flex" justify="space-between">
                <el-col :span="8">
                    <el-select v-model="choosePlatformValue01" @change= "filterMethod"    placeholder="请选择平台">
                      <el-option
                        v-for="item in platformValue01"
                        :key="item.value"
                        :label="item.label"
                        :value="item.label">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                  <router-link to="/addChannel">
                    <el-button type="primary">添加频道</el-button>  
                  </router-link> 
                </el-col>
                <el-col :span="5">
                  <router-link to="/addChannelRule">
                    <el-button type="primary">添加频道规则</el-button>  
                  </router-link>                
                </el-col>
                <el-col :span="5">
                  <router-link to="/channelSorting">
                    <el-button type="primary">频道首页排序</el-button>      
                  </router-link>              
                </el-col>
             </el-row>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
                          
              <el-row :gutter="24" type="flex" justify="end">
                <h6>备注：填写“西语/阿语名称”，可搜索对应的频道结果 </h6>
                <el-col :span="7">
                    <el-select v-model="choosePlatformValue02"  placeholder="请选择平台">
                      <el-option
                        v-for="item in platformValue02"
                        :key="item.value"
                        :label="item.label"
                        :value="item.label">
                      </el-option>
                    </el-select>
                </el-col>

                <el-col :span="7">
                   <el-select v-model="chooseChannelName"   placeholder="请选择频道">
                      <el-option
                        v-for="item in ChannelNameValue"
                         :key="item.value"
                        :label="item.label"
                        :value="item.label">
                      </el-option>
                    </el-select>
                </el-col>

                <el-col :span="8">
                  <el-input
                    placeholder="请输入查询内容"
                    v-model="searchInput"
                    clearable>
                  </el-input>                  
                </el-col>
                <el-col :span="3">
                  <el-button type="primary" @click="serching">搜索</el-button>                  
                </el-col>

                <el-col :span="3">
                  <el-button type="primary" @click="reset">重置</el-button>                  
                </el-col>

             </el-row>

            </div>
          </el-col>
        </el-row>

        <!-- 表格列表 -->

        <el-table :data="tableData" border style="width: 100%" ref="multipleTable">

            <el-table-column prop="al.id" label="编码" sortable width="150">
            </el-table-column>
            <el-table-column  prop="al.name" label="名称" width="180">
            </el-table-column>
            <el-table-column  label="西语名字(ES)"  width="160">
            </el-table-column>
            
            <el-table-column prop="al.pic" label="阿语名字(AR)" width="160">
            </el-table-column>
            <el-table-column  label="跳转类型"  width="120">
            </el-table-column>

            <el-table-column prop="al.picUrl" label="跳转详情" width="540">
            </el-table-column>
            
            <el-table-column label="操作" width="230" >
                <template scope="scope">
                    <router-link :to="`/editChannel?id=`+scope.row.al.id">
                      <el-button size="small"
                             type="success">修改</el-button>
                    </router-link>
                    <el-button size="small"
                            type="warning" >复制</el-button>
                    <el-button size="small" type="danger"
                            @click="productDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <p>*  增加，删除频道，请重新编辑所有排序规则信息</p>
        <el-dialog
             top ="30vh"
            title="信息"
            :visible.sync="dialogVisible2"
            width="30%"
            >
             <span>确定删除该频道么？</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible2 = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible2 = false;ensureDelete()">确 定</el-button>
            </span>
        </el-dialog>

    </div>   
</template>


<script>

import {ipUrl,ipUrlMusic} from "../../../../assets/js/Config.js"

import axios from 'axios'

  export default {
    data() {
      return {
         platformValue01: [{
            value: '选项1',
            label: 'iOS平台'
          }, {
            value: '选项2',
            label: 'Android平台'
          }, {
            value: '选项3',
            label: 'Web平台'
          }, {
            value: '选项4',
            label: 'PC平台'
          }],
          platformValue02: [{
            value: '选项1',
            label: 'iOS平台'
          }, {
            value: '选项2',
            label: 'Android平台'
          }, {
            value: '选项3',
            label: 'Web平台'
          }, {
            value: '选项4',
            label: 'PC平台'
          }],
          ChannelNameValue: [{
            value: '选项1',
            label: '频道名称'
          }, {
            value: '选项2',
            label: '频道编码'
          }],
          //选择平台01
          choosePlatformValue01: 'iOS平台',

          //搜索关键字
          searchInput:"",
          //选择平台02
          choosePlatformValue02: 'iOS平台',
          //选择频道名称or编码
          chooseChannelName:"频道名称",
          //表格数据
          tableData: [],
          //控制删除商品弹窗显隐
          dialogVisible2: false,
          //获取当前删除商品id
          getDeleteProducteId:"",
        }
    },
    mounted(){
      this.getData()
    },
    methods: {
      //选中平台后，传数值，请求数据,渲染不同表格
     filterMethod(){
        console.log(this.choosePlatformValue01)
     },
     //搜索，获取关键字，返回数据
     serching(){
       var serchKeyList ={
          searchInput:this.searchInput,
          choosePlatformValue02:this.choosePlatformValue02,
          chooseChannelName:this.chooseChannelName,
       }
       console.log(serchKeyList)
     },
     reset(){
       this.$router.go(0)
     },
      //商品列表
      getData(){
          var api  = ipUrlMusic("top/list?idx=4");
              
              axios.get(api)
              .then( (response)=> {
                  // console.log(response.data.playlist.tracks)
                  this.tableData = response.data.playlist.tracks
              })
              .catch(function (error) {
                  console.log(error);
          });
      },   
      //删除窗口显隐
      productDelete(date){
          this.dialogVisible2 = true
          this.getDeleteProducteId =date.al.id
         
      },
      //确定删除该条数据，请求接口
      ensureDelete(){

        console.log(this.getDeleteProducteId)
      }
    }
  };
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }


</style>

