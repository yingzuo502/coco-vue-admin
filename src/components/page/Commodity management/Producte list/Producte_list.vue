<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>商品管理</el-breadcrumb-item>
                <el-breadcrumb-item>商品列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">            
            <!-- ./snippets/Cascader.vue选择操作 -->
            <v-cascader style="display:inline-block" ref ="cascader"></v-cascader>
            <el-button type="success" @click="submitSKU">提交</el-button>
            <el-button type="primary"  @click="copy_ID">复制ID</el-button>
            <el-button type="primary" @click="copy_SKU">复制SKU</el-button>
            <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10" @keyup.enter="search1" style="margin-left:45px"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>  
            <el-button @click="show3 = !show3" icon="search">多项搜索</el-button>
            <!-- ./snippets/SearchMore.vue多项搜索组件 -->
            <el-collapse-transition>  
                 <v-searchMore  v-show="show3" ref ="searchMore"></v-searchMore>
            </el-collapse-transition>            
         
            <el-button type="success" @click="reset">重置</el-button>
            <el-button type="primary"  @click="commit">提交</el-button
            >
            <el-button type="primary" @click="save" style="margin-left:45px">保存勾选项</el-button>
            
            <el-select v-model="value5" multiple collapse-tags placeholder="请选择">
                <el-option
                v-for="item in options"
                 
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="id" label="内部编码" sortable width="100">
            </el-table-column>

        <el-table-column prop="id" label="外部编码" sortable width="100">
        </el-table-column>

            <el-table-column  label="产品图片" width="100">
                <template slot-scope="scope" width="120">                        
                        <img :src="scope.row.al.picUrl" style="width:70px;height:auto"/>
                </template>
            </el-table-column>

        <el-table-column prop="id" label="关联商品"  width="50">
        </el-table-column>

            <el-table-column  label="图片状态"  width="120">
            </el-table-column>
            <el-table-column prop="al.picUrl" label="商品标题"  width="140">
            </el-table-column>
            <el-table-column  label="产品状态" width="50">
            </el-table-column>
            <el-table-column  label="产品仓库"  width="50">
            </el-table-column>
            <el-table-column prop="PDM编辑状态" label="内部编码" width="100">
            </el-table-column>
            <el-table-column  label="商品分类" :formatter="formatter" width="50">                    
            </el-table-column>
            <el-table-column prop="score" label="审核状态" width="50">
            </el-table-column>
            <el-table-column prop="status" label="PDM销售价￥"  width="50">
            </el-table-column>
        
        <el-table-column prop="id" label="限价状态"  width="50">
        </el-table-column>

            <el-table-column prop="sum" label="市场售价$"  width="60">
            </el-table-column>
            <el-table-column prop="status" label="本店售价$" width="100">
            </el-table-column>

        <el-table-column prop="id" label="利润比"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="折扣率"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="销售重量"  width="50">
        </el-table-column>

            <el-table-column prop="tell" label="库存数量"  width="160">
            </el-table-column>
            <el-table-column prop="username" label="实时库存"  width="160">
            </el-table-column>

        <el-table-column prop="id" label="货源状态"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="是否清仓"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="清仓利润比"  width="50">
        </el-table-column>

            <el-table-column prop="score" label="上架" width="100">
            </el-table-column>
            <el-table-column prop="status" label="上架时间"  width="100">
            </el-table-column>

        <el-table-column prop="id" label="同步时间"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="促销利润比"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="促销时间"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="活动库存"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="虚拟销量"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="活动库存销量"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="APP专享利润比"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="APP专享价$"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="APP专享时间"  width="50">
        </el-table-column>
        <el-table-column prop="id" label="商品型号词"  width="50">
        </el-table-column>

            <el-table-column prop="sum" label="商品类型" sortable width="160">
            </el-table-column>
            <el-table-column prop="status" label="是否亏本(最低1.1)" width="100">
            </el-table-column>
            <el-table-column label="操作" width="180"  fixed="right">
                <template scope="scope">
                    <router-link :to="`/editProducte?id=`+scope.row.id">
                        <el-button size="small">编辑</el-button>
                    </router-link>
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

import  Cascader  from './snippets/Cascader.vue';
import  SearchMore  from './snippets/SearchMore.vue';

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
                select_cate: '',
                // 搜索关键字
                select_word: '',
                del_list: [],
                is_search: false,
                // 商品列表
                list01:[],
                // 多项搜索
                show3: false,
                options: [{
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
                    value5: [],
                    value11: []              
                    }
        },
        // created(){
        //     this.getData();
        // },
        components:{
            'v-cascader':Cascader,
             'v-searchMore':SearchMore
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
       mounted(){
            this.getData();
        },
        methods: {

            // 相对绝对图片地址
            newPic(pic){
        		return ipUrlMusic(pic)
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
                this.$axios.get(api).then((res) => {
                    this.tableData = res.data.playlist.tracks.slice((this.page-1)*this.pageSize,(this.page)*this.pageSize)
                    // console.log(this.tableData)
                    this.totality = res.data.playlist.tracks.length
                })
            },
            //搜索筛选关键字
            search(){                
                this.is_search = true;
                //请求接口传关键字
                console.log(this.select_word)
            },
            copy_ID(){

                this.is_search = true;
            },
            copy_SKU(){
                this.is_search = true;
            },
            //重置刷新
            reset(){
               this.$router.go(0)
            },
            save(){
                this.is_search = true;
            },
            //提交多项搜索
            commit(){
               // selectedMastList channelOptions01Value channelOptions02Value channelOptions03Value channelOptions04Value PDMminPrice PDMmaxPrice saleMinPrice saleMaxPrice
                // MinStock MaxStock limitPricevalue sync_time shelf_time pdmAddTime picStatusvalue priceStatusvalue producteGradevalue picDisplayvalue containPicvalue productInventoryStatusvalue
                // PDMeditStatusvalue makeProfitvalue
                //请求接口传搜索关键字
                var searchListSetting={
                    selectedMastList:this.$refs.searchMore.selectedMastList,
                    channelOptions01Value:this.$refs.searchMore.channelOptions01Value,
                    channelOptions02Value:this.$refs.searchMore.channelOptions02Value,
                    channelOptions03Value:this.$refs.searchMore.channelOptions03Value,
                    channelOptions04Value:this.$refs.searchMore.channelOptions04Value,
                    channelOptions05Value:this.$refs.searchMore.channelOptions05Value,
                    channelOptions06Value:this.$refs.searchMore.channelOptions06Value,
                    channelOptions07Value:this.$refs.searchMore.channelOptions07Value,
                    PDMminPrice:this.$refs.searchMore.PDMminPrice,
                    PDMmaxPrice:this.$refs.searchMore.PDMmaxPrice,
                    saleMinPrice:this.$refs.searchMore.saleMinPrice,
                    saleMaxPrice:this.$refs.searchMore.saleMaxPrice,
                    MinStock:this.$refs.searchMore.MinStock,
                    MaxStock:this.$refs.searchMore.MaxStock,
                    limitPricevalue:this.$refs.searchMore.limitPricevalue,
                    sync_time:this.$refs.searchMore.sync_time,
                    shelf_time:this.$refs.searchMore.shelf_time,
                    pdmAddTime:this.$refs.searchMore.pdmAddTime,
                    picStatusvalue:this.$refs.searchMore.picStatusvalue,
                    priceStatusvalue:this.$refs.searchMore.priceStatusvalue,
                    producteGradevalue:this.$refs.searchMore.producteGradevalue,

                    picDisplayvalue:this.$refs.searchMore.picDisplayvalue,
                    containPicvalue:this.$refs.searchMore.containPicvalue,
                    productInventoryStatusvalue:this.$refs.searchMore.productInventoryStatusvalue,
                    PDMeditStatusvalue:this.$refs.searchMore.PDMeditStatusvalue,
                    makeProfitvalue:this.$refs.searchMore.makeProfitvalue,                   
                }
                console.log(searchListSetting)

            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            //删除
            handleDelete(index, row) {
                //传id至后台，显示删除第几行
                //console.log(index.id)                
                this.$message.error('删除第'+(index+1)+'行',row);
            },
            // 全选
            delAll(){
                // const self = this,
                //     length = self.multipleSelection.length;
                // let str = '';
                // self.del_list = self.del_list.concat(self.multipleSelection);
                // for (let i = 0; i < length; i++) {
                //     str += self.multipleSelection[i].username + ' ';
                // }
                // self.$message.error('删除了'+str);
                // self.multipleSelection = [];
                
                                 
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
                console.log(val)
                this.multipleSelection = val;
            }


            // getExclusiveDelivery(){

            //         var api  = ipUrl("api/shop");
                    
            //         axios.get(api)
            //         .then( (response)=> {
            //             console.log(response.data.result)
            //             this.list01 = response.data.result
            //         })
            //         .catch(function (error) {
            //             console.log(error);
            //         });
            // },
        }
    }
</script>

<style scoped>
.handle-box{
    margin-bottom: 20px;
}

.handle-input{
    width: 230px;
    display: inline-block;
}

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