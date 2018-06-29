<template>
    <div>
        <div class="crumbs">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item><i class="el-icon-menu"></i>类目频道</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/backstageCategory' }">后台类目</el-breadcrumb-item>
              <el-breadcrumb-item >添加后台类目</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <el-form :label-position="labelPosition" label-width="340px" :model="formLabelAlign"  v-loading="loading2" element-loading-text="拼命提交中" element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)">
            
            <el-form-item label="*所属类目">
                <el-cascader
                  style="width:350px"
                  expand-trigger="hover"
                  :options="belongCategory"
                  v-model="formLabelAlign.selectedBelongCategory">
                </el-cascader>
            </el-form-item>

            <el-form-item label="英文名称">
              <el-input v-model="formLabelAlign.channelEnglishName"></el-input>
            </el-form-item>

            <el-form-item label="*中文名称">
              <el-input v-model="formLabelAlign.chineseInputName"></el-input>
            </el-form-item>

            <el-form-item label="生成静态文件名称">
              <el-input v-model="formLabelAlign.staticFileName"></el-input>
            </el-form-item>

            <el-form-item label="分类权重排序">
              <el-input v-model="formLabelAlign.sortChannel"></el-input>
            </el-form-item>

            <el-form-item label="iPhone手机图片地址">
              <el-input v-model="formLabelAlign.iosMbPicAd"></el-input>
              <span>备注：直接填写图片地址，顶级类目无需添加。图片尺寸： px</span>
            </el-form-item>

            <el-form-item label="Android手机图片地址">
              <el-input v-model="formLabelAlign.andrioidMbPicAd"></el-input>
              <span>备注：直接填写图片地址，顶级类目无需添加。图片尺寸： px</span>
            </el-form-item>

            <el-form-item label="打标推荐图片地址">
              <el-input v-model="formLabelAlign.recommendPicAd"></el-input>
              <span>备注：直接填写图片地址，不填写则不显示。</span>
            </el-form-item>

            <el-form-item label="APP类目排序">
              <el-input
                placeholder="99"
                v-model="formLabelAlign.appChannelSort"
                :disabled="true">
              </el-input>
                <span>备注：决定了在APP类目里的显示顺序，此为展示项不可编辑。</span>
            </el-form-item>

            <el-form-item label="是否在APP显示">
                <el-radio-group v-model="formLabelAlign.showInApp">
                  <el-radio :label="3">显示</el-radio>
                  <el-radio :label="6">不显示</el-radio>
                </el-radio-group>
              <span>备注：是否在手机APP的类目里显示。</span>
            </el-form-item>

            <el-form-item label="PC端顶级类目图片地址">
              <el-input v-model="formLabelAlign.webTopPicAd"></el-input>
              <span>备注：直接填写图片地址，不填写则不显示。</span>
            </el-form-item>

            <el-form-item label="跳转页面类型">
              <el-select v-model="formLabelAlign.jumpType"   placeholder="请选择频道">
                      <el-option
                        v-for="item in formLabelAlign.jumpTypeValue"
                         :key="item.value"
                        :label="item.label"
                        :value="item.label">
                      </el-option>
              </el-select>
              <span>备注：决定了在APP类目里的显示顺序，此为展示项不可编辑。</span>
            </el-form-item>

            <el-form-item label="跳转地址">
                <el-input v-model="formLabelAlign.jumpAddress"></el-input>
                <span>备注：直接填写图片地址，不填写则不显示。</span>
            </el-form-item>

            <el-form-item label="顶级类目图片是否显示">
                <el-radio-group v-model="formLabelAlign.showInTopPic">
                  <el-radio :label="3">显示</el-radio>
                  <el-radio :label="6">不显示</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="title(SEO )">
              <el-input v-model="formLabelAlign.titleSEO"></el-input>
            </el-form-item>

            <el-form-item label="meta description(SEO)">
                <el-input v-model="formLabelAlign.descriptionSEO"></el-input>
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

            <el-form-item :label="`图片地址（${formLabelAlign.chooseLanguage}）`">
              <el-input v-model="formLabelAlign.languagePicAD"></el-input>
            </el-form-item>

            <el-form-item :label="`跳转地址（${formLabelAlign.chooseLanguage}）`">
              <el-input v-model="formLabelAlign.languageJumpAd"></el-input>
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
        //选择类目数据
         belongCategory: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
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
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        //绑定选择的类目数据
        selectedBelongCategory: [],     

         loading2:"",
        //设置表单左对齐
        labelPosition: 'left',
        formLabelAlign: {
            //英文名字
            channelEnglishName:"",
            //中文备注
            chineseInputName: '',
            //生成静态文件名称
            staticFileName: "",
            //分类权重排序
            sortChannel:"",
            //安卓手机图片地址
            andrioidMbPicAd: '',
            //ios手机图片地址
            iosMbPicAd: '',
            //推荐打标图片地址
            recommendPicAd:"",
            //app类目排序
            appChannelSort: '',
            //是否在app显示
            showInApp:3,
            //pc端顶级图片地址
            webTopPicAd: '',
            //页面跳转地址
            jumpAddress: "",
            //跳转类型  
            jumpTypeValue:[{
              value: '选项1',
                label: '目录编码'
              }, {
                value: '选项2',
                label: '搜索(结果列表)'
              }, {
                value: '选项3',
                label: '外部连接(浏览器打开)'
              }, {
                value: '选项4',
                label: '商品详情页'
              }],     
            jumpType:"",  
            //顶级类目图片是否显示
            showInTopPic:"",
            //title(SEO)
            titleSEO: '',
            //description(SEO):
            descriptionSEO: '',

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
            chooseLanguage:"",

            //选择语言名称
            languageName: '',
            //选择语言后生成静态文件名称
            languageStaticFileName: "",
            //图片地址
            languagePicAD:"",
            //跳转地址
            languageJumpAd: ""
        }
      }
      },
    created(){
      

    },
    methods: {
      
    },
    mounted(){
     },
    methods: {
      onSubmit() {
        //绑定好的数据请求提交
        var formLabelAlign_list ={
           formLabelAlign_channelEnglishName :this.formLabelAlign.channelEnglishName,
           formLabelAlign_selectedBelongCategory :this.formLabelAlign.selectedBelongCategory,
           formLabelAlign_chineseInputName :this.formLabelAlign.chineseInputName,
           formLabelAlign_staticFileName :this.formLabelAlign.staticFileName,
           formLabelAlign_sortChannel :this.formLabelAlign.sortChannel,
           formLabelAlign_iosMbPicAd :this.formLabelAlign.iosMbPicAd,
           formLabelAlign_andrioidMbPicAd :this.formLabelAlign.andrioidMbPicAd,
           formLabelAlign_recommendPicAd :this.formLabelAlign.recommendPicAd,
           formLabelAlign_appChannelSort :this.formLabelAlign.appChannelSort,
           formLabelAlign_showInApp :this.formLabelAlign.showInApp,
           formLabelAlign_webTopPicAd :this.formLabelAlign.webTopPicAd,
           formLabelAlign_jumpType :this.formLabelAlign.jumpType,
           formLabelAlign_jumpAddress :this.formLabelAlign.jumpAddress,
           formLabelAlign_showInTopPic :this.formLabelAlign.showInTopPic,
           formLabelAlign_titleSEO :this.formLabelAlign.titleSEO,
           formLabelAlign_descriptionSEO :this.formLabelAlign.descriptionSEO,
           formLabelAlign_chooseLanguage :this.formLabelAlign.chooseLanguage,
           formLabelAlign_languageName :this.formLabelAlign.languageName,
           formLabelAlign_languageStaticFileName:this.formLabelAlign.languageStaticFileName,
           formLabelAlign_languageJumpAd :this.formLabelAlign.languageJumpAd,
           formLabelAlign_languagePicAD :this.formLabelAlign.languagePicAD

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