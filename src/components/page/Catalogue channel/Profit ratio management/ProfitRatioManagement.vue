<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>类目频道</el-breadcrumb-item>
                <el-breadcrumb-item>利润比管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>




        <el-row :gutter="24" type="flex" justify="space-between">
          <el-col :span="8">
              <el-row :gutter="24" type="flex" justify="space-between">
                <el-col :span="5">
                  <router-link to="/addBackstageCategory">
                    <el-button type="primary">服装仓</el-button>  
                  </router-link> 
                </el-col>
             </el-row>
          </el-col>

          <el-col :span="14">
            <div class="grid-content bg-purple">
                          
              <el-row :gutter="24" type="flex" justify="end">
                <el-col :span="7">
                    <div class="block">
                      <el-cascader
                        expand-trigger="hover"
                        :options="options"
                        v-model="selectedOptions2">
                      </el-cascader>
                    </div>
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


        <el-table :data="tableData" border style="width: 100%;margin-top:20px;" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column prop="id" label="类目" sortable width="300">
            </el-table-column>
            <el-table-column  label="出货价区间(人民币)"  width="150">
            </el-table-column>
            <el-table-column prop="al.picUrl" label="追加价(人民币)" sortable width="140">
            </el-table-column>
            <el-table-column  label="服装仓类目利润比" width="140">
            </el-table-column>
            <el-table-column  label="服装仓促销利润比"  width="150">
            </el-table-column>
            <el-table-column prop="score" label="服装促销结束时间" width="150">
            </el-table-column>
            <el-table-column prop="status" label="修改人"  width="120">
            </el-table-column>
            <el-table-column prop="sum" label="修改时间"  width="200">
            </el-table-column>
            <el-table-column label="操作" width="220">
                <template scope="scope">
                    <el-button size="small" @click="updatePrice(scope.$index, scope.row)">更新商品价格</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="pagination">
            <el-pagination
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
                background
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totality">
            </el-pagination>
        </div>
    </div>
</template>


<script>

import {ipUrl,ipUrlMusic} from "../../../../assets/js/Config.js"

  export default {
    data() {
      return {
        tableData: [],
        //页数
        page:1,
        //总条数
        totality:0,
        //每页显示条数
        pageSize:10,
        multipleSelection: [],
         options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            },{
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            },{
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            },{
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            },{
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            },{
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            },{
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            },{
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions2: []
      }
    },
    created(){
        this.getData();
    },

    computed: {
        data(){
            const self = this;
            return self.tableData.filter(function(d){
                let is_del = false;
                for (let i = 0; i < self.del_list.length; i++) {
                    if(d.name === self.del_list[i].name){
                        is_del = true;
                        break;
                    }
                }
                if(!is_del){
                    if(d.address.indexOf(self.select_cate) > -1 && 
                        (d.name.indexOf(self.select_word) > -1 ||
                        d.address.indexOf(self.select_word) > -1)
                    ){
                        return d;
                    }
                }
            })
        },
        
    },
        methods: {
          //搜索功能
          serching(){
            console.log(this.selectedOptions2)
          },

          // 分页
            handleSizeChange(val) {
                // 点击每页多少条执行
                this.pageSize = val;
                this.getData();
            },
            handleCurrentChange(val) {
                // 点击多少页执行
                // this.cur_page = val;
                this.page = val;
                this.getData();
            },
          //商品列表
          getData(){
              var api  = ipUrlMusic("top/list?idx=6");
                  
                  this.$axios.get(api).then( (res)=> {
                      this.tableData = res.data.playlist.tracks.slice((this.page-1)*this.pageSize,(this.page)*this.pageSize)
                      // console.log(this.tableData)
                      this.totality = res.data.playlist.tracks.length
                  })
                  .catch(function (error) {
                      console.log(error);
              });
          },
          //重置刷新
          reset(){
              this.$router.go(0)
          },

          //删除
          handleDelete(index, row) {
              //传id至后台，显示删除第几行
              console.log(row.id)                
              this.$message.error('删除第'+(index+1)+'行',row);
          },
          select(selection, row){
              console.log(11)
          
          },
          // 提交从子组件获取sku
          submitSKU(){
              console.log(this.$refs.cascader.chooseSkuNav)
            },
          //表格全选
          handleSelectionChange(val) {
              this.multipleSelection = val;
          },
          //更新商品价格操作
           updatePrice(index, row) {
              this.$confirm('更新该类及该类下的所有子类下的所有出货价区间产品销售价格?', '信息', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                //请求api，根据id更新价格，渲染数据
                console.log(row.id)
                this.$message({
                  
                  type: 'success',
                  message: '更新成功!'
                });
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消更新'
                });          
              });
            }

        }
  };
</script>~