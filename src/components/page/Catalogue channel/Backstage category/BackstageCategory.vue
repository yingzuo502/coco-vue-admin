<template>
    <div>
              
        <div class="crumbs">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item><i class="el-icon-menu"></i>类目频道</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/websiteChannel' }">后台类目</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <el-row :gutter="24" type="flex" justify="space-between">
          <el-col :span="8">
              <el-row :gutter="24" type="flex" justify="space-between">
                <el-col :span="5">
                  <router-link to="/addBackstageCategory">
                    <el-button type="primary">添加后台类目</el-button>  
                  </router-link> 
                </el-col>
             </el-row>
          </el-col>
          <el-col :span="14">
            <div class="grid-content bg-purple">
                          
              <el-row :gutter="24" type="flex" justify="end">
                <h6>备注：填写“西语/阿语名称”，可搜索对应的类目结果</h6>
                <el-col :span="7">
                    <el-select v-model="choosePlatformValue01"  placeholder="请选择后台类目名称">
                      <el-option
                        v-for="item in platformValue01"
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



        <el-table :data="tableData" border style="width: 100%" ref="multipleTable">

            <el-table-column prop="id" label="类目编码" sortable width="150">
            </el-table-column>

            <el-table-column  label="英文名字(EN)"  width="180" type="expand">

                 <template slot-scope="props" :data="tableData" >
                    <el-form   class="demo-table-expand" >
                         <el-table :data="tableData" border ref="multipleTable" style="width: 90%;">

                            <el-table-column prop="id" label="类目编码" sortable width="110" >
                            </el-table-column>
                            <el-table-column prop="id" label="英文名字(EN)"  width="110">
                            </el-table-column>
                            <el-table-column prop="id" label="西语名字(ES)"  width="110">
                            </el-table-column>
                            <el-table-column prop="id" label="阿语名字(AR)"  width="110">
                            </el-table-column>
                            <el-table-column  label="分类权重排序"  width="110">
                            </el-table-column>                            
                            <el-table-column  label="类目图片(ios)" width="110">
                                <template slot-scope="scope" width="120">                        
                                        <img :src="scope.row.al.picUrl" style="width:70px;height:auto"/>
                                </template>
                            </el-table-column>
                            <el-table-column  label="类目图片(android)" width="110">
                                <template slot-scope="scope" width="120">                        
                                        <img :src="scope.row.al.picUrl" style="width:70px;height:auto"/>
                                </template>
                            </el-table-column>



                            <el-table-column prop="打标推荐" label="内部编码" width="110">
                            </el-table-column>
                            <el-table-column  label="app类目排序" width="110">                    
                            </el-table-column>
                            <el-table-column prop="score" label="在APP显示" width="110">
                            </el-table-column>
                            <el-table-column prop="status" label="PC类目图片"  width="110">
                            </el-table-column>
                            
                            <el-table-column label="操作" width="110" >
                                <template scope="scope">
                                    <router-link to="/addBackstageCategory">
                                      <el-button size="small"
                                            type="primary">添加</el-button>
                                    </router-link><br>
                                    <router-link :to="`/editBackstageCategory?id=`+scope.row.id">
                                      <el-button size="small"
                                            type="success">修改</el-button>
                                    </router-link><br>
                                    

                                      <el-button size="small"
                                            type="warning" @click="openVisible(scope.$index, scope.row)">转移商品</el-button><br>
                                    <el-button size="small" type="danger"
                                            @click="productDelete(scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                         </el-table> 
                    </el-form>
                </template>

            </el-table-column>
            <el-table-column prop="al.picUrl" label="西语名字(ES)" width="180">
            </el-table-column>
            <el-table-column  label="阿语名字(AR)" width="180">
            </el-table-column>
            <el-table-column  label="分类权重排序"  width="120">
            </el-table-column>

            <el-table-column  label="类目图片(ios)" width="160">
                <template slot-scope="scope" width="120">                        
                        <img :src="scope.row.al.picUrl" style="width:70px;height:auto"/>
                </template>
            </el-table-column>
            <el-table-column  label="类目图片(android)" width="160">
                <template slot-scope="scope" width="120">                        
                        <img :src="scope.row.al.picUrl" style="width:70px;height:auto"/>
                </template>
            </el-table-column>



            <el-table-column prop="打标推荐" label="内部编码" width="140">
            </el-table-column>
            <el-table-column  label="app类目排序" width="140">                    
            </el-table-column>
            <el-table-column prop="score" label="在APP显示" width="100">
            </el-table-column>
            <el-table-column prop="status" label="PC类目图片"  width="100">
            </el-table-column>
            
            <el-table-column label="操作" width="180" fixed="right" >
                <template scope="scope">
                    <router-link to="/addBackstageCategory">
                      <el-button size="small"
                             type="primary">添加</el-button>
                    </router-link><br>
                    <router-link :to="`/editBackstageCategory?id=`+scope.row.id">
                      <el-button size="small"
                             type="success">修改</el-button>
                    </router-link><br>
                    

                      <el-button size="small"
                            type="warning" @click="openVisible(scope.$index, scope.row)">转移商品</el-button><br>
                    <el-button size="small" type="danger"
                            @click="productDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
             top ="30vh"
            title="信息"
            :visible.sync="dialogVisible1"
            width="30%"
            >
           <div class="crumbs">
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item><i class="el-icon-menu"></i>类目频道</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/websiteChannel' }">后台类目</el-breadcrumb-item>
                  <el-breadcrumb-item >转移商品</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="block">
                <span>该类目商品转移到：</span>
                  <el-cascader
                    expand-trigger="hover"
                    :options="removeProducte"
                    v-model="getRemoveProducte"
                    >
                  </el-cascader>
            </div>
            <div class="block">
              <span>该类目下商品数目：</span>
              <span>11</span>
            </div>

            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible1 = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible1 = false;ensureRemove()">确定转移</el-button>
            </span>
        </el-dialog>

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
        choosePlatformValue01:"",
        platformValue01: [{
            value: '选项1',
            label: '后台类目名称'
          }, {
            value: '选项2',
            label: '后台类目编码'
          }],
        //搜索关键字
        searchInput:"",
        //表格数据
        tableData: [],
        // 转移商品选择的数据
        removeProducte:[{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
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
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
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
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }],         
        }],
        //转移商品绑定的数据
        getRemoveProducte:[],
        //控制转移商品弹窗显隐
        dialogVisible1: false,
        //获取当前转移商品id
        getRemoveProducteId:"",

        //控制删除商品弹窗显隐
        dialogVisible2: false,
        //获取当前删除商品id
        getDeleteProducteId:"",

      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
     //搜索，获取关键字，返回数据
     serching(){
       var serchKeyList ={
          searchInput:this.searchInput,
          choosePlatformValue01:this.choosePlatformValue01
       }
       console.log(serchKeyList)
     },
     reset(){
       this.$router.go(0)
     },
    // 相对绝对图片地址
      newPic(pic){
      return ipUrlMusic(pic)
      },
      //商品列表
      getData(){
          var api  = ipUrlMusic("top/list?idx=6");
              
              axios.get(api)
              .then( (response)=> {
                  // console.log(response)
                  // console.log(response.data.playlist.tracks)
                  this.tableData = response.data.playlist.tracks
              })
              .catch(function (error) {
                  console.log(error);
          });
      },
      //打开商品转移弹窗
      openVisible(date1,date2){
        this.dialogVisible1 = true
        this.getRemoveProducteId =date2.id
      },
      //确定转移按钮，传数据请求接口
      ensureRemove(){
        var removeProducteMsg ={
          getRemoveProducte :this.getRemoveProducte,
          getRemoveProducteId :this.getRemoveProducteId
        }
        console.log(removeProducteMsg)
      },
      //删除窗口显隐
      productDelete(date){
          this.dialogVisible2 = true
          this.getDeleteProducteId =date.id
         
      },
      //确定删除该条数据，请求接口
      ensureDelete(){

        console.log(this.getDeleteProducteId)
      }


    },

    created(){
        this.getData();
    },
       
  }
</script>