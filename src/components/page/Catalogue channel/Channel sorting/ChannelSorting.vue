<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>类目频道</el-breadcrumb-item>
                <el-breadcrumb-item>频道排序</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <router-link to="/addChannelRule"><el-button type="primary">添加规则</el-button></router-link>
        


         <el-table :data="tableData" style="width: 100%;"  v-loading="loading2" element-loading-text="店小二拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)"> 
            <el-table-column label="平台类型" width="180">
              <template slot-scope="scope" >
                  <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>

            <el-table-column label="会员属性" width="180">
              <template slot-scope="scope">
                  <span>{{ scope.row.name }}</span>                 
              </template>
            </el-table-column>

            <el-table-column label="规则名称" width="180">
              <template slot-scope="scope">
                  <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>

            <el-table-column label="规则说明" width="180">
              <template slot-scope="scope">
                  <span>{{ scope.row.name }}</span>                 
              </template>
            </el-table-column>

            <el-table-column label="状态" width="180">
              <template slot-scope="scope">
                  <!-- 动态绑定icon方法,以及颜色 -->
                  <i :class="scope.row.icon" :style="`color:${scope.row.color}`"></i>                 
              </template>
            </el-table-column>

           <el-table-column label="操作">
              <template slot-scope="scope">
                <router-link :to="'/channelSortingEdit?id='+scope.row.date"><el-button
                  size="mini"                  
                  >编辑</el-button>
                </router-link>
                
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>

          </el-table>
    </div>
</template>


<script>

import axios from 'axios'

  export default {
    data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            icon: 'el-icon-success',
            color:"green"
          }, {
            date: '2016-05-04',
            name: '王小虎',
            icon: 'el-icon-success',
            color:"green"
          }, {
            date: '2016-05-01',
            name: '王小虎',
            icon: 'el-icon-error',
            color:"red"
          }, {
            date: '2016-05-03',
            name: '王小虎',
            icon: 'el-icon-success',
            color:"green"
          }],
           loading2: true
        }
        },
        mounted(){
          //加载等待效果
          setTimeout(()=>{
            this.loading2=false 
            },200)
           
        },
        methods: {
          //编辑跳转并传值(选择通过跳转传id过去重新请求获取数据)
          // handleEdit(index, row) {
          //   vueEvent.$emit("date11",row)
          //   console.log(row);
          // },
          handleDelete(index, row) {
            //删除
              this.$confirm('此操作将永久删除该条规则, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.$message({
                  type: 'success',
                  message: '删除成功!'                 
                });
                 console.log(index, row)
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });  
                 console.log(22)        
              });
           
        }
      }      
    };
</script>