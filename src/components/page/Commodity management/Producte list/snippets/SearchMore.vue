<template>
    <div>
                    <div class="transition-box">   
                        <!-- first -->
                        <el-row :gutter="24">
                            <el-col :span="6">
                                <div class="grid-content bg-purple">
                                    <el-row class="in-el-row">
                                        <el-col :span="8">
                                            <div class="grid-content bg-purple-dark"><i class="el-icon-setting"></i>后台类目</div>
                                        </el-col>
                                        <el-col :span="16">
                                            <div class="grid-content bg-purple-dark">
                                                    <el-cascader
                                                        :options="mastList"
                                                        v-model="selectedMastList"
                                                        @change="mastListChange">
                                                    </el-cascader>
                                            </div>
                                        </el-col>                                       
                                    </el-row>
                                </div>
                            </el-col>
                            <el-col :span="18">                               
                                <div class="grid-content bg-purple">
                                    <el-row class="in-el-row" type="flex" justify="space-between">
                                        <el-col :span="1"><div class="grid-content bg-purple-dark"><i class="el-icon-setting"></i>频道</div></el-col>
                                        <el-col :span="5"><div class="grid-content bg-purple-dark">
                                                <el-select v-model="channelOptions01Value" clearable placeholder="选择类目">
                                                    <el-option
                                                    v-for="item in channelOptions01"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.label">
                                                    </el-option>
                                                 </el-select>
                                        </div></el-col>
                                        <el-col :span="3">
                                            <div class="grid-content bg-purple-dark">
                                                <el-select v-model="channelOptions02Value" clearable placeholder="审核状态">
                                                    <el-option
                                                    v-for="item in channelOptions01"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                        </div></el-col>
                                        <el-col :span="2"><div class="grid-content bg-purple-dark">
                                                <el-select v-model="channelOptions03Value" clearable placeholder="仓位">
                                                    <el-option
                                                    v-for="item in channelOptions03"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                        </div></el-col>
                                        <el-col :span="3"><div class="grid-content bg-purple-dark">
                                                <el-select v-model="channelOptions04Value" clearable placeholder="上下架状态">
                                                    <el-option
                                                    v-for="item in channelOptions04"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                        </div></el-col>
                                        <el-col :span="3"><div class="grid-content bg-purple-dark">
                                                <el-select v-model="channelOptions05Value" clearable placeholder="产品状态">
                                                    <el-option
                                                    v-for="item in channelOptions05"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                        </div></el-col>
                                        <el-col :span="3"><div class="grid-content bg-purple-dark">
                                                <el-select v-model="channelOptions06Value" clearable placeholder="货源状态">
                                                    <el-option
                                                    v-for="item in channelOptions06"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                        </div></el-col>
                                        <el-col :span="3"><div class="grid-content bg-purple-dark">
                                                <el-select v-model="channelOptions07Value" clearable placeholder="真实库存状态">
                                                    <el-option
                                                    v-for="item in channelOptions07"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                                </el-select>
                                        </div></el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                        <!-- secend -->
                        <el-row :gutter="24" type="flex" justify="space-between">
                            <el-col :span="6">
                                <div class="grid-content bg-purple">
                                    <el-row class="in-el-row">
                                        <el-col :span="8">
                                            <div class="grid-content bg-purple-dark"><i class="el-icon-setting"></i>PDM销售价</div>
                                        </el-col>
                                        <el-col :span="16">
                                            <div class="grid-content bg-purple-dark">
                                                <el-col :span="11">
                                                    <el-input
                                                        placeholder="请输入最低价格"
                                                        v-model="PDMminPrice"
                                                        clearable>
                                                    </el-input >                                                
                                                </el-col>
                                                <el-col :span="2">-</el-col>
                                                <el-col :span="11">
                                                    <el-input
                                                        placeholder="请输入最高价格"
                                                        v-model="PDMmaxPrice"
                                                        clearable>
                                                    </el-input>                                                
                                                </el-col>
                                            </div>
                                        </el-col>                                       
                                    </el-row>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="grid-content bg-purple">
                                    <el-row class="in-el-row">
                                        <el-col :span="8">
                                            <div class="grid-content bg-purple-dark"><i class="el-icon-setting"></i>本店售价</div>
                                        </el-col>
                                        <el-col :span="16">
                                            <div class="grid-content bg-purple-dark">
                                                <el-col :span="11">
                                                    <el-input
                                                        placeholder="请输入最低价格"
                                                        v-model="saleMinPrice"
                                                        clearable>
                                                    </el-input >                                                
                                                </el-col>
                                                <el-col :span="2">-</el-col>
                                                <el-col :span="11">
                                                    <el-input
                                                        placeholder="请输入最高价格"
                                                        v-model="saleMaxPrice"
                                                        clearable>
                                                    </el-input>                                                
                                                </el-col>
                                            </div>
                                        </el-col>                                       
                                    </el-row>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="grid-content bg-purple">
                                    <el-row class="in-el-row">
                                        <el-col :span="8">
                                            <div class="grid-content bg-purple-dark"><i class="el-icon-setting"></i>库存</div>
                                        </el-col>
                                        <el-col :span="16">
                                            <div class="grid-content bg-purple-dark">
                                                <el-col :span="11">
                                                    <el-input
                                                        placeholder="请输入最低库存"
                                                        v-model="MinStock"
                                                        clearable>
                                                    </el-input >                                                
                                                </el-col>
                                                <el-col :span="2">-</el-col>
                                                <el-col :span="11">
                                                    <el-input
                                                        placeholder="请输入最多库存"
                                                        v-model="MaxStock"
                                                        clearable>
                                                    </el-input>                                                
                                                </el-col>
                                            </div>
                                        </el-col>                                       
                                    </el-row>
                                </div>
                            </el-col>
                              <el-col :span="3">
                                <div class="grid-content bg-purple">
                                    <el-row class="in-el-row">
                                        <el-col :span="12">
                                            <div class="grid-content bg-purple-dark"><i class="el-icon-setting"></i>是否限价</div>
                                        </el-col>
                                        <el-col :span="12">
                                             <el-select v-model="limitPricevalue" clearable placeholder="请选择">
                                                <el-option
                                                v-for="item in limitPrice"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </el-col>                                       
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                        <!-- third -->
                        <el-row :gutter="24" type="flex" justify="space-between">
                            <el-col :span="5">
                                <div class="grid-content bg-purple">
                                    <el-row class="in-el-row">
                                        <el-col :span="8">
                                            <div class="grid-content bg-purple-dark"><i class="el-icon-setting"></i>同步时间</div>
                                        </el-col>
                                        <el-col :span="16">
                                            <div class="block">
                                                <el-date-picker
                                                v-model="sync_time"
                                                unlink-panels
                                                type="daterange"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                                </el-date-picker>
                                            </div>                                        
                                        </el-col>                                       
                                    </el-row>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="grid-content bg-purple">
                                    <el-row class="in-el-row">
                                        <el-col :span="8">
                                            <div class="grid-content bg-purple-dark"><i class="el-icon-setting"></i>上架时间</div>
                                        </el-col>
                                        <el-col :span="16">
                                            <div class="block">
                                                <el-date-picker
                                                v-model="shelf_time"
                                                unlink-panels
                                                type="daterange"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                                </el-date-picker>
                                            </div>                                        
                                        </el-col>                                       
                                    </el-row>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="grid-content bg-purple">
                                    <el-row class="in-el-row">
                                        <el-col :span="8">
                                            <div class="grid-content bg-purple-dark"><i class="el-icon-setting"></i>PMD添加时间</div>
                                        </el-col>
                                        <el-col :span="16">
                                            <div class="block">
                                                <el-date-picker
                                                v-model="pdmAddTime"
                                                unlink-panels
                                                type="daterange"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                                </el-date-picker>
                                            </div>                                        
                                        </el-col>                                       
                                    </el-row>
                                </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="grid-content bg-purple">
                                    <el-row class="in-el-row">
                                        <el-col :span="12">
                                            <div class="grid-content bg-purple-dark"><i class="el-icon-setting"></i>图片状态</div>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-select v-model="picStatusvalue" clearable placeholder="请选择">
                                                    <el-option
                                                    v-for="item in picStatus"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                                    </el-option>
                                            </el-select>                                 
                                        </el-col>                                       
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                       <el-row :gutter="24">
                            <el-col :span="2">
                                <el-select v-model="priceStatusvalue" clearable placeholder="价格状态">
                                        <el-option
                                        v-for="item in priceStatus"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                </el-select>                                 
                            </el-col>                                       
                            <el-col :span="2">
                                <el-select v-model="producteGradevalue" clearable placeholder="产品等级">
                                        <el-option
                                        v-for="item in producteGrade"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                </el-select>                                 
                            </el-col>                                       
                            <el-col :span="2">
                                <el-select v-model="picDisplayvalue" clearable placeholder="首图显示">
                                        <el-option
                                        v-for="item in picDisplay"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                </el-select>                                 
                            </el-col>                                       
                            <el-col :span="2">
                                <el-select v-model="containPicvalue" clearable placeholder="包含图片">
                                        <el-option
                                        v-for="item in containPic"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                </el-select>                                 
                            </el-col>                                       
                            <el-col :span="3">
                                <el-select v-model="productInventoryStatusvalue" clearable placeholder="产品库存状态">
                                        <el-option
                                        v-for="item in productInventoryStatus"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                </el-select>                                 
                            </el-col>                                       
                            <el-col :span="4">
                                <el-select v-model="PDMeditStatusvalue" clearable placeholder="PDM编辑状态">
                                        <el-option
                                        v-for="item in PDMeditStatus"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                </el-select>                                 
                            </el-col>                                       
                            <el-col :span="2">
                                <el-select v-model="makeProfitvalue" clearable placeholder="是否亏本">
                                        <el-option
                                        v-for="item in makeProfit"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                </el-select>                                 
                            </el-col>                                       
                        </el-row>

                    </div>
    
    </div>
</template>


<script>

import axios from 'axios'
  export default {
    data() {
      return {    
          //后台类目数据
        mastList: [{
            //一级
          value: 'zhinan',
          label: '指南',
          children: [
            {
                //二级
            value: 'shejiyuanze',
            label: '设计原则',
                    //三级
                children: [{
                        value: 'yizhi',
                        label: '一致'
                    }, 
                    {
                        value: 'fankui',
                        label: '反馈'
                    }, 
                    {
                        value: 'xiaolv',
                        label: '效率'
                    }, 
                    {
                        value: 'kekong',
                        label: '可控'
                    }]
            }, 
            {
                //二级
            value: 'daohang',
            label: '导航',
                    //三级
                children: [{
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                }, 
                {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                }]  
            }
        ]            
    }],
    selectedMastList: [],
    //频道
    channelOptions01: [{
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
    channelOptions01Value: '',
     
     channelOptions02: [{
        value: '选项1',
        label: '未审核'
    }, {
        value: '选项2',
        label: '审核通过'
    }, {
        value: '选项3',
        label: '待处理'
    }],
    channelOptions02Value: '',

    channelOptions03: [{
        value: '选项1',
        label: '服装仓2'
    }, {
        value: '选项2',
        label: '服装仓4'
    }],
    channelOptions03Value: '',

    channelOptions04: [{
        value: '选项1',
        label: '下架'
    }, {
        value: '选项2',
        label: '上架'
    }, {
        value: '选项3',
        label: '禁止上架'
    }],
    channelOptions04Value: '',

    channelOptions05: [{
        value: '选项1',
        label: '正常'
    }, {
        value: '选项2',
        label: '断货'
    }, {
        value: '选项3',
        label: '停产'
    }],
    channelOptions05Value: '',

    channelOptions06: [{
        value: '选项1',
        label: '正常'
    }, {
        value: '选项2',
        label: '断货'
    }, {
        value: '选项3',
        label: '停产'
    }],
    channelOptions06Value: '',

    channelOptions07: [{
        value: '选项1',
        label: '有货'
    }, {
        value: '选项2',
        label: '无货'
    }],
    channelOptions07Value: '',

    //PDM销售价
    PDMminPrice:"",
    PDMmaxPrice:"",
    //本店售价
    saleMinPrice:"",
    saleMaxPrice:"",
    //库存
    MinStock:"",
    MaxStock:"",

    //是否限价
    limitPrice: [{
        value: '选项1',
        label: '不限价'
    }, {
        value: '选项2',
        label: '普通限价'
    }, {
        value: '选项3',
        label: '严格限价'
    }], 
    limitPricevalue:"",

    //同步时间
    sync_time:"",
    //上架时间
    shelf_time:"",
    //PDM添加时间
    pdmAddTime:"",
    //图片状态
    picStatus: [{
        value: '选项1',
        label: '同步成功'
    }, {
        value: '选项2',
        label: '同步失败'
    }, {
        value: '选项3',
        label: '正在同步'
    }],     
    picStatusvalue:"",

    //价格状态
    priceStatus: [{
        value: '选项1',
        label: '促销价'
    }, {
        value: '选项2',
        label: 'APP专享价'
    }],     
    priceStatusvalue:"",   
    
    //产品等级
    producteGrade: [{
        value: '选项1',
        label: '同步成功'
    }, {
        value: '选项2',
        label: '同步失败'
    }, {
        value: '选项3',
        label: '正在同步'
    }],     
    producteGradevalue:"",      

    //首图显示
    picDisplay: [{
        value: '选项1',
        label: '自拍图'
    }, {
        value: '选项2',
        label: '网格图'
    }, {
        value: '选项3',
        label: '分销图'
    }],     
    picDisplayvalue:"",  

    //包含图片
    containPic: [{
        value: '选项1',
        label: '自拍图'
    }, {
        value: '选项2',
        label: '网格图'
    }, {
        value: '选项3',
        label: '分销图'
    }],     
    containPicvalue:"",  

    //产品库存状态
    productInventoryStatus: [{
        value: '选项1',
        label: '正常产品'
    }, {
        value: '选项2',
        label: '呆滞产品'
    }, {
        value: '选项3',
        label: '滞销产品'
    }],     
    productInventoryStatusvalue:"",  

    //PDM编辑状态
    PDMeditStatus: [{
        value: '选项1',
        label: '同步成功'
    }, {
        value: '选项2',
        label: '同步失败'
    }, {
        value: '选项3',
        label: '正在同步'
    }],     
    PDMeditStatusvalue:"",  

    //是否亏本
    makeProfit: [{
        value: '选项1',
        label: '是'
    }, {
        value: '选项2',
        label: '否'
    }],     
    makeProfitvalue:"",  

    pickerOptions2: {
    shortcuts: [{
        text: '最近一周',
        onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
        }
    }, {
        text: '最近一个月',
        onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit('pick', [start, end]);
        }
    }, {
        text: '最近三个月',
        onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit('pick', [start, end]);
        }
    }]
    },
    value6: '',
    value7: ''  
      }
    },
    methods: {
      //后台类目数据获取  
      mastListChange(value) {
        console.log(value);
      }
    }
  };
</script>

<style scoped>

.transition-box {
    margin-bottom: 10px;
    width: 100%;
    background: rgb(239, 239, 239);
    margin-top: 10px;
    height: auto;
    overflow: hidden;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .in-el-row{
    margin-bottom: 0px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    text-align: center;
    line-height: 36px;
    color: #000;
    font-size: 14px;
    /* background: #99a9bf; */
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>