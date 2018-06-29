<template>
  <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-menu"></i>系统管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/department_list'}">部门列表</el-breadcrumb-item>
            <el-breadcrumb-item >部门修改</el-breadcrumb-item>
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
 
          <el-form-item label="*部门名称">
            <el-input v-model="form.department"></el-input>
          </el-form-item> 

          <el-form-item label="*权限">
            <section class="permissionsListSetting">
               <el-checkbox v-model="form.checked">全选</el-checkbox>
              <div class="permissionsList">
                  <ul>
                    <li>
                      <div class="secendMenu">
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                      </div>
                      <div class="thirdMenulList">
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                      </div>
                    </li>
                     <li>
                      <div class="secendMenu">
                        <el-checkbox v-model="form.checked">类目频道</el-checkbox>
                      </div>
                      <div class="thirdMenulList">
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                      </div>
                    </li>
                    <li>
                      <div class="secendMenu">
                        <el-checkbox v-model="form.checked">商品管理</el-checkbox>
                      </div>
                       <div class="thirdMenulList">
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                      </div>
                    </li>
                    <li>
                      <div class="secendMenu">
                        <el-checkbox v-model="form.checked">订单管理</el-checkbox>                        
                      </div>
                       <div class="thirdMenulList">
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                      </div>
                    </li>
                    <li>
                      <div class="secendMenu">
                        <el-checkbox v-model="form.checked">全选</el-checkbox>
                      </div>
                       <div class="thirdMenulList">
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                        <el-checkbox v-model="form.checked">系统管理</el-checkbox>
                      </div>
                    </li>
                  </ul>

              </div>
            </section>
            
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
            //部门名称
            department:"",            
            //权限
            checked:false

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
  .permissionsListSetting{
    display: flex;
    justify-content: start;  
  }
  .permissionsList{
    width: 100%;
    margin-left: 50px;
  }
  .permissionsList ul li{
    display: flex;
    justify-content: start; 
    margin-bottom: 15px;    
  }
  .permissionsList ul li .secendMenu{
    margin-right: 50px;
  }
</style>


