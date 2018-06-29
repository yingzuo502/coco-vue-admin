<template lang="html">
  <div >
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-menu"></i>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>订单列表</el-breadcrumb-item>
        </el-breadcrumb>

        <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="formInline">
          <el-form-item>
              <el-radio v-model="formInline.radio" label="下单时间">下单时间</el-radio>
              <el-radio v-model="formInline.radio" label="付款时间">付款时间</el-radio>     
              <v-timedate style="display:inline-block" ref ="timedate"></v-timedate>         
          </el-form-item>
          <el-form-item label="订单状态">
            <el-select v-model="formInline.orderStatus">
              <el-option
                v-for="item in formInline.orderStatusList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="付款方式">
            <el-select v-model="formInline.payWay">
              <el-option
                v-for="item in formInline.payWayList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单来源">
            <el-select v-model="formInline.orderFrom">
              <el-option
                v-for="item in formInline.orderFromList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单站点">
            <el-select v-model="formInline.orderSite" placeholder ="请选择站点">
              <el-option
                v-for="item in formInline.orderSiteList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单仓库" >
            <el-select v-model="formInline.orderWarehouse" placeholder ="请选择仓库">
              <el-option label="服装仓" value="服装仓"></el-option>
              <el-option label="分销仓" value="分销仓"></el-option>
            </el-select>
          </el-form-item>

          <el-select v-model="formInline.searchCriteria">
            <el-option
                v-for="item in formInline.searchCriteriaList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>

          <el-form-item>
            <el-input v-model="formInline.serchValue" placeholder="请输入内容"></el-input>
          </el-form-item>
            <el-button type="primary" @click="serching">搜索</el-button>
            <el-button type="primary" @click="reset('formInline')">重置</el-button>
          </el-form-item>
        </el-form>

        <el-table
            :data="tableData"
            style="width: 100%;margin-top:15px;">
            <el-table-column type="selection" width="55"></el-table-column>            
            <el-table-column
              label="订单号"
              width="120">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="下单时间"
              width="120">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="商品金额$"
              width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="应付金额$"
              width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="订单来源"
              width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="订单状态"
              width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="付款时间"
              width="130">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.sum }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="支付方式"
              width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="会员ID"
              width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.status }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="收货人"
              width="130">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="国家"
              width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.sum }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="优惠券"
              width="110">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.status }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="积分"
              width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.status }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" fixed="right">
              <template slot-scope="scope">
                <router-link :to="`/showInOrder?id=`+scope.row.id">
                  <el-button type="primary">查看订单</el-button>
                </router-link>
              </template>
            </el-table-column>
          </el-table>

          <!-- 分页 -->
          <div class="pagination">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="cur_page"
                background
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totality">
            </el-pagination>
        </div>
  </div>
</template>

<script>

import {ipUrl,ipUrlMusic} from "../../../assets/js/Config.js";
import  TimeDate  from '../Commodity management/Producte list/snippets/TimeDate.vue';

   export default {
    data() {
      return {
        formInline: {
          //订单状态
          orderStatus: '全部订单',
          orderStatusList:[{
            value: '全部订单',
            label: '全部订单'
          },
          {
            value: '未付款',
            label: '未付款'
          },{
            value: '已付款',
            label: '已付款'
          },
          {
            value: '备货',
            label: '备货'
          },{
            value: '完全发货',
            label: '完全发货'
          },
          {
            value: '已收到货',
            label: '已收到货'
          },{
            value: '付款中',
            label: '付款中'
          },
          {
            value: '退款',
            label: '退款'
          },
          {
            value: '取消',
            label: '取消'
          },{
            value: '部分配货',
            label: '部分配货'
          },
          {
            value: '完全配货',
            label: '完全配货'
          },{
            value: '部分发货',
            label: '付款中'
          }],
          //付款方式
          payWay:"PayPal",
          payWayList:[{
            value: 'PayPal',
            label: 'PayPal'
          },{
            value: 'webcollect',
            label: 'webcollect'
          },{
            value: 'WorldPay',
            label: 'WorldPay'
          },{
            value: 'Pse',
            label: 'Pse'
          },{
            value: 'OXXO',
            label: 'OXXO'
          },{
            value: 'Instalments',
            label: 'Instalments'
          }],
          //订单来源
          orderFrom:"PC",
          orderFromList:[{
            value: 'PC',
            label: 'PC'
          },{
            value: 'IOS',
            label: 'IOS'
          },{
            value: 'ANDRIOD',
            label: 'ANDRIOD'
          },{
            value: 'WAP',
            label: 'WAP'
          }],
          //订单站点
          orderSite:"",
          orderSiteList:[{
              value: '英语',
              label: '英语'
            },{
              value: '葡语',
              label: '葡语'
            },{
              value: '西语',
              label: '西语'
            },{
              value: '阿拉伯语',
              label: '阿拉伯语'
            }],
          //订单仓库
          orderWarehouse:"",
          //搜索条件
          searchCriteria:"订单号",
          searchCriteriaList:[{
              value: '订单号',
              label: '订单号'
            },{
              value: '收货人',
              label: '收货人'
            },{
              value: '会员ID',
              label: '会员ID'
            },{
              value: '用户邮箱',
              label: '用户邮箱'
            },{
              value: '支付方式',
              label: '支付方式'
            },{
              value: '优惠券码',
              label: '优惠券码'
            },{
              value: 'APP Media Soure',
              label: 'APP Media Soure'
            },{
              value: 'APP Media Campaign',
              label: 'APP Media Campaign'
            },{
              value: 'is_retargeting',
              label: 'is_retargeting'
            }],
          serchValue: '',
          radio: '下单时间'
        }, 
        
         //分页参数
        cur_page:2,
        page:1,
        totality:0,        
        //表格数据
        tableData: [],
      }
    },
    mounted(){
      this.getData()
    },
    methods: {
      serching() {
        var serchingList ={
            formInline_radio:this.formInline.radio,
            formInline_timedate:this.$refs.timedate.fixedSaleDate,
            formInline_orderStatus:this.formInline.orderStatus,
            formInline_payWay:this.formInline.payWay,
            formInline_orderFrom:this.formInline.orderFrom,
            formInline_orderSite:this.formInline.orderSite,
            formInline_orderWarehouse:this.formInline.orderWarehouse,
            formInline_searchCriteria:this.formInline.searchCriteria,
            formInline_serchValue:this.formInline.serchValue
        }
        console.log(serchingList);
        
      },
      reset(formInline) {       
        this.$router.go(0)
      },
      //商品列表
      getData(){

          var api  = ipUrlMusic("top/list?idx=6");
          this.$axios.get(api+"&page="+this.page).then((res) => {
              this.tableData = res.data.playlist.tracks
              // console.log(this.tableData)
              this.totality = res.data.playlist.tracks.length
          })
      },
      handleCurrentChange(val) {
        // 点击多少页执行
        // this.cur_page = val;
        this.page = val;
        this.getData();
        console.log(`当前页: ${val}`);
        },
    },
    components:{
      'v-timedate':TimeDate     
    },
  }
</script>

<style scoped>
  .demo-form-inline{
    margin-top:15px;
  }
</style>


