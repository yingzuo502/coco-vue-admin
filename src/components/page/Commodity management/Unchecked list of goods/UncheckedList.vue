<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>商品管理</el-breadcrumb-item>
                <el-breadcrumb-item>商品列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
            <el-checkbox v-model="checked"></el-checkbox>
            <!-- ./snippets/Cascader.vue选择操作 -->
            <v-cascader style="display:inline-block" ref ="cascader"></v-cascader>
            <el-button type="success" @click="submitSKU">提交</el-button>
            <el-button type="primary"  @click="copy_ID">复制ID</el-button>
            <el-button type="primary" @click="copy_SKU">复制SKU</el-button>
            <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10" @keyup.alt.67="search1"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>  
            <el-button @click="show3 = !show3" icon="search">多项搜索</el-button>
            <!-- ./snippets/SearchMore.vue多项搜索组件 -->
            <el-collapse-transition>  
                 <v-searchMore  v-show="show3"></v-searchMore>
            </el-collapse-transition>            
         
            <el-button type="success" @click="reset">重置</el-button>
            <el-button type="primary" @click="save">保存勾选项</el-button>
            <el-button type="primary"  @click="commit">提交</el-button>
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


            <el-table-column  label="产品图片" width="100">
                <template slot-scope="scope" width="120">                        
                        <img :src="scope.row.al.picUrl" style="width:70px;height:auto"/>
                </template>
            </el-table-column>
            <el-table-column  label="图片状态"  width="120">
            </el-table-column>
            <el-table-column prop="al.picUrl" label="商品标题" sortable width="140">
            </el-table-column>
            <el-table-column  label="产品状态" width="140">
            </el-table-column>
            <el-table-column  label="产品仓库"  width="140">
            </el-table-column>
            <el-table-column prop="PDM编辑状态" label="内部编码" width="100">
            </el-table-column>
            <el-table-column  label="商品分类" :formatter="formatter" width="100">                    
            </el-table-column>
            <el-table-column prop="score" label="审核状态" width="100">
            </el-table-column>
            <el-table-column prop="status" label="PDM销售价￥"  width="100">
            </el-table-column>
            <el-table-column prop="sum" label="市场售价$" sortable width="160">
            </el-table-column>
            <el-table-column prop="status" label="本店售价$" width="100">
            </el-table-column>
            <el-table-column prop="tell" label="库存数量"  width="160">
            </el-table-column>
            <el-table-column prop="username" label="实时库存" sortable width="160">
            </el-table-column>
            <el-table-column prop="score" label="上架" width="100">
            </el-table-column>
            <el-table-column prop="status" label="上架时间"  width="100">
            </el-table-column>
            <el-table-column prop="sum" label="商品类型" sortable width="160">
            </el-table-column>
            <el-table-column prop="status" label="是否亏本(最低1.1)" width="100">
            </el-table-column>
            <el-table-column prop="tell" label="等级"  width="160">
            </el-table-column>
            <el-table-column label="操作" width="180"  fixed="right">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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

import  Cascader  from '../Producte list/snippets/Cascader.vue';
import  SearchMore  from '../Producte list/snippets/SearchMore.vue';
import axios from 'axios'

    export default {
        data() {
            return {
                url: './static/vuetable.json',
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
                // 全选
                checked: true,
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
        created(){
            this.getData();
        },
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
                    
                    axios.get(api)
                    .then( (response)=> {
                        // console.log(response.data.playlist.tracks)
                        this.tableData = response.data.playlist.tracks.slice((this.page-1)*this.pageSize,(this.page)*this.pageSize)
                        this.totality = response.data.playlist.tracks.length
                        
                    })
                    .catch(function (error) {
                        console.log(error);
                });
            },
            //搜索筛选关键字
            search(){                
                this.is_search = true;
                console.log(this.select_word)
            },
            copy_ID(){
                this.is_search = true;
            },
            copy_SKU(){
                this.is_search = true;
            },
            moreSearch(){
                this.is_search = true;
            },
            //重置刷新
            reset(){
               this.$router.go(0)
            },
            save(){
                this.is_search = true;
            },
            commit(){
                this.is_search = true;
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
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
            // 提交从子组件获取sku
            submitSKU(){
                console.log(this.$refs.cascader.chooseSkuNav)
            },
            handleSelectionChange(val) {
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