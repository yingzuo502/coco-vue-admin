<template>
  <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-menu"></i>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/orderList' }">订单列表</el-breadcrumb-item>
            <el-breadcrumb-item>查看订单</el-breadcrumb-item>
        </el-breadcrumb>

        <el-form :label-position="labelPosition" style="margin-top:15px" label-width="220px">
 
                <el-form-item label="订单号">
                  <el-input :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="订单ID">
                  <el-input :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="订单状态">
                  <el-input :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="商品信息">
                      <el-table
                        :span-method="arraySpanMethod"
                        :data="tableData"
                        :summary-method="getSummaries"
                        show-summary
                        style="width: 100%">
                        <el-table-column
                          label="商品图片"
                          width="180">
                                <template slot-scope="scope">
                                  <img src ="//www.baidu.com/img/bd_logo1.png" style="width:70px;height:70px;"/>
                                </template>
                        </el-table-column>
                        <el-table-column
                          label="商品名称"
                          width="380">
                        </el-table-column>
                        <el-table-column
                          label="商品编号">
                        </el-table-column>
                        <el-table-column
                          label="价格"
                          width="80">
                        </el-table-column>
                        <el-table-column
                          label="数量"
                          width="80">
                        </el-table-column>
                        <el-table-column
                          label="库存">
                        </el-table-column>
                        <el-table-column
                          label="加入购物车时间"
                          width="180">
                        </el-table-column>
                        <el-table-column
                          label="小计">
                        </el-table-column>
                      </el-table>


                </el-form-item>

                <el-form-item label="收货人">
                    <el-input :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="*详细地址">
                  <el-input :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="城市">
                  <el-input  :disabled="true"></el-input>
                 </el-form-item>
                <el-form-item label="省/州">
                  <el-input :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="国家">
                  <el-input :disabled="true"></el-input>
                 </el-form-item>

                <el-form-item label="邮编">
                  <el-input :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="电话">
                  <el-input :disabled="true"></el-input>
                 </el-form-item>
                <el-form-item label="邮箱">
                  <el-input :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="运输方式">
                  <el-input :disabled="true"></el-input>
                 </el-form-item>

                <el-form-item label="支付方式">
                  <el-input :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="客户留言">
                  <el-input :disabled="true"></el-input>     
                </el-form-item>

                <el-form-item label="下单时间">
                  <el-input :disabled="true"></el-input> 
                </el-form-item>

                <el-form-item label="订单站点">
                  <el-input :disabled="true"></el-input> 
                </el-form-item>

                <el-form-item label="APP Media Soure">
                  <el-input :disabled="true"></el-input>
                 </el-form-item>

                <el-form-item label="APP Media Campaign">
                  <el-input :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="Retargeting APP Media Source">
                  <el-input  :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="Retargeting Campagin">
                  <el-input  :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="is_retargeting">
                  <el-input  :disabled="true"></el-input> 
                </el-form-item>

                <el-form-item label="订单来源">
                  <el-input :disabled="true"></el-input> 
                </el-form-item>


            </el-form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        //设置表单左对齐
        labelPosition: 'left',
        tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }]        
      }
      
    },
    methods:{
          arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            console.log(rowIndex)
              if (rowIndex  === 0) {
                  if (columnIndex === 0) {
                    return [1, 2];
                  } 
                  else if (columnIndex === 1) {
                    return [0, 0];
                  }
                }
          },

           getSummaries(param) {
             
            const { columns, data } = param;
            const sums = [];
            const sums2 = [];
            columns.forEach((column, index) => {
              if (index === 6) {
                sums[index] = '商品总价';
                return;
              }
              else if(index > 6){
                  const values = data.map(item => Number(item[column.property]));
                  if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                      const value = Number(curr);
                      if (!isNaN(value)) {
                        return prev + curr;
                      } else {
                        return prev;
                      }
                    }, 0);
                    sums[index] += ' USD';
                  } else {
                    sums[index] = 'N/A';
                  }
              }
              
            });

            return sums
          }
    }
    
  }
</script>
