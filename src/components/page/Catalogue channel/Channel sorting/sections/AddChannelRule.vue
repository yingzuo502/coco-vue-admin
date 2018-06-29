<template>
    <div>

        <div class="crumbs">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item><i class="el-icon-menu"></i>类目频道</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/channelSorting' }">频道排序</el-breadcrumb-item>
              <el-breadcrumb-item>添加频道排序</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <el-form :label-position="labelPosition" label-width="160px" :model="formLabelAlign">
            
            <el-form-item label="平台类型">
               <el-select v-model="formLabelAlign.formLabelAlignTypeValue" clearable placeholder="请选择">
                <el-option
                  v-for="item in formLabelAlign.type"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="排序规则名称">
              <el-input v-model="formLabelAlign.ruleInputName"></el-input>
            </el-form-item>

            <el-form-item label="会员性别属性">
                  <el-radio-group v-model="formLabelAlign.sexRadio">
                    <el-radio :label="3">默认（Default）</el-radio>
                    <el-radio :label="6">女性（Female）</el-radio>
                    <el-radio :label="9">男性（Male）</el-radio>
                  </el-radio-group> 
            </el-form-item>

            <el-form-item label="排序规则说明">
              <el-input v-model="formLabelAlign.ruleInput"></el-input>
            </el-form-item>

            <el-form-item label="">
              <el-table
                :data="tableData"
                border
                style="width: 70%">
                <el-table-column
                  label="序号"
                  width="140">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                  </template>

                </el-table-column>
                <el-table-column
                  label="频道编码"
                  width="140">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                  </template>

                </el-table-column>
                <el-table-column
                  label="频道名称">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.address }}</span>
                  </template>
                </el-table-column>
                   
                <el-table-column
                  label="首页排序"
                  width="180"
                  >
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.name"  placeholder="请输入内容"></el-input>
                  </template>
                </el-table-column>

                
              </el-table>
              <h6>* 排序数字越小，越靠前，如果排序为空，前台导航将不显示该频道</h6>

            </el-form-item>


            <el-form-item label="是否开启规则">
               <el-switch
                  v-model="formLabelAlign.openRule"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
            </el-form-item>

            <el-form-item label="">
              <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>

        </el-form>

       
      
    </div>
</template>
<script>

  export default {
    data() {
      return {
        visible2: false,
        //页面数据
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王大虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王中虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王红虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        
        //设置表单左对齐
        labelPosition: 'left',
        formLabelAlign: {
          type: [{
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
          //
          formLabelAlignTypeValue:"",  
          //排序规则名称
          ruleInputName: '',
          //排序规则说明
          ruleInput: '',
          //会员性别属性
          sexRadio: 9,
          //是否开启规则
          openRule:true
        }


      };
    },
    created(){
      

    },
    mounted(){
        //进来请求获取表格数据列表
        
    },
    methods: {
      onSubmit() {
        //绑定好的数据请求提交
        var formLabelAlign_list ={
           formLabelAlign_type :this.formLabelAlign.formLabelAlignTypeValue,
           formLabelAlign_ruleInputName :this.formLabelAlign.ruleInputName,
           formLabelAlign_ruleInput :this.formLabelAlign.ruleInput,
           formLabelAlign_sexRadio :this.formLabelAlign.sexRadio,
           formLabelAlign_openRule :this.formLabelAlign.openRule,
           formLabelAlign_tableList :this.tableData,

        }
        console.log(formLabelAlign_list);
      }
    }
  }
</script>