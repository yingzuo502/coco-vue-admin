<template>
  <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-menu"></i>系统管理</el-breadcrumb-item>
            <el-breadcrumb-item >后台菜单添加</el-breadcrumb-item>
        </el-breadcrumb>

        <el-form ref="form" :model="form" label-width="100px" class="demo-ruleForm">
          
          <el-form-item label="上级菜单" prop="region">
              <el-select v-model="form.previousMenu" placeholder="请选择">
                <el-option
                  v-for="item in form.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
 
          <el-form-item label="*菜单名称">
            <el-input v-model="form.menu"></el-input>
          </el-form-item> 

          <el-form-item label="*控制器">
            <el-input v-model="form.controllerName"></el-input>
          </el-form-item> 

          <el-form-item label="*方法名">
            <el-input v-model="form.functionName"></el-input>
          </el-form-item> 

          <el-form-item label="*是否显示">
             <el-checkbox v-model="form.checked"></el-checkbox>
          </el-form-item> 

          <el-form-item label="*排序">
            <el-input v-model="form.sort"></el-input>
          </el-form-item> 



          <el-form-item>
            <el-button type="primary" @click="onSubmit">修改</el-button>
          </el-form-item>
        </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
         form: {
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
            //上一菜单
            previousMenu:"",
            //菜单名字
            menu:"",
            //控制器
            controllerName:"",
            //方法名
            functionName:"",
            //是否显示
            checked:true,
            //排序
            sort:""

         }
      
      };
    },
    methods: {
      onSubmit() {
        console.log(this.$route.query.id);

        var editValue ={
          previousMenu:this.form.previousMenu,
          menu:this.form.menu,
          controllerName:this.form.controllerName,
          functionName:this.form.functionName,
          checked:this.form.checked,
          sort:this.form.sort
        }
        console.log(editValue)

      }
    }
  }
</script>

<style scoped>
  .demo-ruleForm{
    margin-top: 15px;
  }
</style>


