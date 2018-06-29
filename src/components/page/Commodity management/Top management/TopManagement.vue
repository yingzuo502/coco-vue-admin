<template>
      <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-menu"></i>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item >置顶管理</el-breadcrumb-item>
        </el-breadcrumb>

        <el-row :gutter="24" style="margin-top:15px;">
          <el-col :span="16">
            <el-row :gutter="24">
              <el-col :span="4"><div class="grid-content bg-purple">                    
                    <router-link to="/addTopManagement">
                        <el-button type="primary">添加置顶商品</el-button>
                    </router-link></div></el-col>
              <el-col :span="5"><div class="grid-content bg-purple">
                  <el-select v-model="platformValue" placeholder="请选择">
                    <el-option
                      v-for="item in platform"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                <el-select v-model="topTypeValue" placeholder="置顶类型">
                    <el-option
                      v-for="item in topType"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div></el-col>
            </el-row>
          </el-col>
        </el-row>

        <el-row :gutter="24" style="margin-top:15px;">
          <el-col :span="16">
            <el-row :gutter="24">                   
              <el-col :span="3"><div class="grid-content bg-purple">
                  <el-select v-model="searchTypeValue" placeholder="请选择">
                    <el-option
                      v-for="item in searchType"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">
                <el-input v-model="contentInput" placeholder="请输入内容"></el-input>
                </div></el-col>
              
              <el-col :span="3"><div class="grid-content bg-purple">
                 <el-checkbox v-model="showTheSame" style="line-height: 40px;">显示同款产品</el-checkbox>
                </div></el-col>
                              
              <el-col :span="2"><div class="grid-content bg-purple">
                <el-button type="primary" @click="searching">搜索</el-button>
                </div></el-col>
              <el-col :span="2"><div class="grid-content bg-purple">
                <el-button type="primary" @click="reset">重置</el-button>
                </div></el-col>                
            </el-row>
          </el-col>
        </el-row>

        <el-table
            :data="tableData"
            style="width: 100%;margin-top:15px;">
            <el-table-column
              label="编码"
              width="110">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="平台"
              width="110">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="商品图片"
              width="160">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="置顶sku编码"
              width="140">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="置顶类型"
              width="110">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="置顶页面"
              width="130">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.sum }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="置顶到子分类"
              width="140">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="开始时间"
              width="130">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.status }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="结束时间"
              width="130">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="状态"
              width="110">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.sum }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="排序"
              width="110">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.status }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <!-- 分页 -->
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
        //页数
        page:1,
        //总条数
        totality:0,
        //每页显示条数
        pageSize:10,
        //选择平台
        platform: [{
            value: 'IOS',
            label: 'IOS'
          }, {
            value: 'Android',
            label: 'Android'
          }, {
            value: 'Wap',
            label: 'Wap'
          }, {
            value: 'PC',
            label: 'PC'
          }, {
            value: 'ALL',
            label: 'ALL'
          }],
          platformValue: 'Wap',

          //置顶类型
          topType: [{
            value: '分类页',
            label: '分类页'
          }, {
            value: '频道页',
            label: '频道页'
          }, {
            value: '店铺页',
            label: '店铺页'
          }, {
            value: '搜索页',
            label: '搜索页'
          }],
          topTypeValue: '',

          //搜索类型
          searchType: [{
            value: '产品编码',
            label: '产品编码'
          }, {
            value: '店铺编码',
            label: '店铺编码'
          }, {
            value: '搜索词',
            label: '搜索词'
          }],
          searchTypeValue: '产品编码',

          //搜索内容
          contentInput:"",

          //显示同款商品
          showTheSame:"",

          //表格数据
          tableData: [],

        }
    },
    mounted(){
        this.getData()
    },
    methods: {
      //搜索
      searching(){
        this.getData();
        var searchCriteria ={
          platform:this.platformValue,
          topTypeValue:this.topTypeValue,
          searchTypeValue:this.searchTypeValue,
          contentInput:this.contentInput,
          showTheSame:this.showTheSame
        }
        console.log(searchCriteria)
      },
      //重置
      reset(){
        this.$router.go(0)
      },
      //编辑
      handleEdit(index, row) {
        console.log(index, row);
      },
      //删除
      handleDelete(index, row) {
        console.log(index, row);
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
          var api  = ipUrlMusic("top/list?idx=3");
          this.$axios.get(api+"&page="+this.page).then((res) => {
              this.tableData = res.data.playlist.tracks.slice((this.page-1)*this.pageSize,(this.page)*this.pageSize)
              // console.log(this.tableData)
              this.totality = res.data.playlist.tracks.length           
          })
      },
    }
  };
</script>