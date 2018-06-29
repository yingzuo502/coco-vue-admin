<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-menu"></i>系统管理</el-breadcrumb-item>
            <el-breadcrumb-item >部门列表</el-breadcrumb-item>
        </el-breadcrumb>

       <el-table
            :data="tableData3"
            height="700"
            border
            style="width: 100%;margin-top:15px;">
                <el-table-column
                prop="date"
                label="编号"
                width="180"
                sortable>
                </el-table-column>
                <el-table-column
                prop="name"
                label="部门名称">
                </el-table-column>
                <el-table-column
                prop="address"
                label="添加时间"
                width="180">
                </el-table-column>                 
                 <el-table-column
                prop="date"
                label="操作"
                width="180">
                        <template slot-scope="scope">
                            <router-link :to="`/department_edit?id=`+scope.row.date">
                                <el-button  type="text" size="small">修改</el-button>
                            </router-link>
                            <el-button type="text" size="small" @click="deleteClick(scope.row)">删除</el-button>
                        </template>
                </el-table-column>
        </el-table>

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
    export default {
        data() {
            return {
               tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                //控制删除商品弹窗显隐
                dialogVisible2: false,
                //获取当前删除商品id
                getDeleteProducteId:"",
            }
        },
        computed:{
          
        },
        methods: {
            //删除窗口显隐
            deleteClick(date){
                this.dialogVisible2 = true
                this.getDeleteProducteId =date.date
                
            },
            //确定删除该条数据，请求接口
            ensureDelete(){
                console.log(this.getDeleteProducteId)
            }
        },
    }
</script>

<style scoped>

</style>
