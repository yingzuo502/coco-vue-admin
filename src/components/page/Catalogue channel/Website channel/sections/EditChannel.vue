<template>
    <div>
        <div class="crumbs">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item><i class="el-icon-menu"></i>类目频道</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/websiteChannel' }">网站频道</el-breadcrumb-item>
              <el-breadcrumb-item >修改频道</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <el-form :label-position="labelPosition" label-width="340px" :model="formLabelAlign"  v-loading="loading2" element-loading-text="拼命提交中" element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)">
 
            <el-form-item label="频道名称">
              <el-input v-model="formLabelAlign.channelInputName"></el-input>
            </el-form-item>

            <el-form-item label="*中文备注">
              <el-input v-model="formLabelAlign.chineseInputName"></el-input>
            </el-form-item>

            <el-form-item label="生成静态文件名称">
              <el-input v-model="formLabelAlign.staticFileName"></el-input>
            </el-form-item>

            <el-form-item label="网页标题（Title）">
              <el-input v-model="formLabelAlign.webTitle"></el-input>
            </el-form-item>

            <el-form-item label="网页关键词（keywords，多个关键词以','隔开）">
              <el-input v-model="formLabelAlign.webKeyWorde"></el-input>
            </el-form-item>

            <el-form-item label="网页描述">
              <el-input v-model="formLabelAlign.webDescribe"></el-input>
            </el-form-item>

            <el-form-item label="跳转类型">
              <el-select v-model="formLabelAlign.jumpType"   placeholder="请选择频道">
                      <el-option
                        v-for="item in formLabelAlign.jumpTypeValue"
                         :key="item.value"
                        :label="item.label"
                        :value="item.label">
                      </el-option>
              </el-select>
 
            </el-form-item>

            <el-form-item label="请选择语言">
                <el-select v-model="formLabelAlign.chooseLanguage"   placeholder="请选择频道">
                      <el-option
                        v-for="item in formLabelAlign.chooseLanguageValue"
                         :key="item.value"
                        :label="item.label"
                        :value="item.label">
                      </el-option>
                </el-select>
            </el-form-item>

            <el-form-item :label="`*${formLabelAlign.chooseLanguage}名称`">
              <el-input v-model="formLabelAlign.languageName"></el-input>
            </el-form-item>

            <el-form-item label="类目静态页面名称">
              <el-input v-model="formLabelAlign.languageStaticFileName"></el-input>
            </el-form-item>

            <el-form-item :label="`Title标题（${formLabelAlign.chooseLanguage}）`">
              <el-input v-model="formLabelAlign.languageTitle"></el-input>
            </el-form-item>

            <el-form-item :label="`关键词（${formLabelAlign.chooseLanguage}）`">
              <el-input v-model="formLabelAlign.languageKeyWorde"></el-input>
            </el-form-item>

            <el-form-item :label="`描述（${formLabelAlign.chooseLanguage}）`">
              <el-input v-model="formLabelAlign.languageDescribe"></el-input>
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
         loading2:"",
        //设置表单左对齐
        labelPosition: 'left',
        formLabelAlign: {
          //频道名称
          channelInputName: '',
          //中文备注
          chineseInputName: '',
          //生成静态文件名称
          staticFileName: "",
          //网页标题
          webTitle:"",
           //网页关键字
          webKeyWorde: '',
          //网页描述
          webDescribe: '',
          //跳转类型
          jumpTypeValue:[{
           value: '选项1',
            label: '默认备注（后台没有返回）'
          }, {
            value: '选项2',
            label: '频道（首页）'
          }, {
            value: '选项3',
            label: '分类页'
          }, {
            value: '选项4',
            label: '嵌入H5页面'
          }, {
            value: '选项5',
            label: 'web首页'
          }],        
          jumpType:"频道（首页）",
          //选择语言
          chooseLanguageValue:[{
              value: '选项1',
              label: '葡语'
            }, {
              value: '选项2',
              label: '西语'
            }, {
              value: '选项3',
              label: '阿拉伯语'
          }],  
          chooseLanguage:"葡语",

          //选择语言名称
          languageName: '',
          //选择语言后生成静态文件名称
          languageStaticFileName: "",
          //选择语言后网页标题
          languageTitle:"",
          //选择语言后关键字
          languageKeyWorde: "",
          //选择语言后网页描述
          languageDescribe:""
        },
      }
    },
    created(){
      // 进来页面请求url数据，渲染到页面，修改以下4个数据
      console.log(this.$route.query.id)
      this.formLabelAlign.channelInputName ="男装"
      this.formLabelAlign.chineseInputName ="哈哈"
      this.formLabelAlign.staticFileName ="disconte"
      this.formLabelAlign.staticFileName ="disconte"
      this.formLabelAlign.jumpType ="首页"
    },
    mounted(){

     },
    methods: {
      
      onSubmit() {
        //绑定好的数据请求提交
        var formLabelAlign_list ={
           formLabelAlign_channelInputName :this.formLabelAlign.channelInputName,
           formLabelAlign_chineseInputName :this.formLabelAlign.chineseInputName,
           formLabelAlign_staticFileName :this.formLabelAlign.staticFileName,
           formLabelAlign_webTitle :this.formLabelAlign.webTitle,
           formLabelAlign_webKeyWorde :this.formLabelAlign.webKeyWorde,
           formLabelAlign_webDescribe :this.formLabelAlign.webDescribe,
           formLabelAlign_jumpType :this.formLabelAlign.jumpType,
           formLabelAlign_chooseLanguage :this.formLabelAlign.chooseLanguage,
           formLabelAlign_languageName :this.formLabelAlign.languageName,
           formLabelAlign_languageStaticFileName:this.formLabelAlign.languageStaticFileName,
           formLabelAlign_languageTitle:this.formLabelAlign.languageTitle,
           formLabelAlign_languageKeyWorde :this.formLabelAlign.languageKeyWorde,
           formLabelAlign_languageDescribe :this.formLabelAlign.languageDescribe,

        }       
        console.log(formLabelAlign_list);

        // //如果提交数据成功，,跳转到网站频道页/websiteChannel
        if(this.loading2){
          this.$message({
            message: '提交成功，将跳转到网站频道页',
            type: 'success'
          });
       }else{
          this.$message.error('提交失败，请稍后重试');
       }
      }
    }
  }
</script>