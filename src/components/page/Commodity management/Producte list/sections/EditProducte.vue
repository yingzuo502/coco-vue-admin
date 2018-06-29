<template>
    <div>
        <div class="crumbs">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item><i class="el-icon-menu"></i>商品管理</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/producte_list' }">商品列表</el-breadcrumb-item>
              <el-breadcrumb-item >商品编辑</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <el-select v-model="choosePlatformValue01"  placeholder="请选择平台">
            <el-option
              v-for="item in platformValue01"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
        </el-select>

        <el-collapse accordion style="margin-top:25px;">
          <el-collapse-item>
            <template slot="title">
                <el-button type="primary">基本信息</el-button>
                <i class="header-icon el-icon-info"></i>
            </template>
            <el-form :label-position="labelPosition" label-width="340px" :model="formLabelAlign"  v-loading="loading2" element-loading-text="拼命提交中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
 
                <el-form-item label="*产品SKU">
                  <el-input v-model="formLabelAlign.productesSKU" :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="*商品编码">
                  <el-input v-model="formLabelAlign.commodityCoding" :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="*商品ID">
                  <el-input v-model="formLabelAlign.productesID" :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="*关联商品SKU">
                  <el-input v-model="formLabelAlign.associatedGoods" :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="*后台类目">
                      <v-cascader style="display:inline-block" ref ="cascader"></v-cascader>
                </el-form-item>

                <el-form-item label="*网站频道">
                  <el-input v-model="formLabelAlign.webChannel" :disabled="true"></el-input>
                </el-form-item>

                <el-form-item :label="`*${choosePlatformValue01}标题`">
                  <el-input v-model="formLabelAlign.webTitle"></el-input>
                 </el-form-item>
                <el-form-item label="title(SEO)">
                  <el-input v-model="formLabelAlign.titleSEO"></el-input>
                </el-form-item>

                <el-form-item label="meta description(SEO)">
                  <el-input v-model="formLabelAlign.descriptionSEO"></el-input>
                 </el-form-item>

                <el-form-item label="*默认标题">
                  <el-input v-model="formLabelAlign.defaultTitle" :disabled="true"></el-input>
                </el-form-item>

                <el-form-item label="*中文名称">
                  <el-input v-model="formLabelAlign.chineseName" :disabled="true"></el-input>
                 </el-form-item>
                <el-form-item label="*产品型号词">
                  <el-input v-model="formLabelAlign.productModel" ></el-input>
                </el-form-item>

                <el-form-item label="*color">
                  <el-input v-model="formLabelAlign.productesColor" :disabled="true"></el-input>
                 </el-form-item>

                <el-form-item label="*实际重量">
                  <el-input v-model="formLabelAlign.actualWeight" :disabled="true"></el-input>KG       备注：产品净重+包装重量。
                </el-form-item>

                <el-form-item label="*销售重量">
                  <el-input v-model="formLabelAlign.salesWeight" :disabled="true"></el-input>KG       备注：产品净重+包装重量+物流包装材质重量。
                </el-form-item>
                <el-form-item label="*体积重量">
                  <el-input v-model="formLabelAlign.volumeWeight" :disabled="true"></el-input>KG      
                </el-form-item>

                <el-form-item label="*包装尺寸(长*宽*高)">
                  <el-input v-model="formLabelAlign.packagingSize" :disabled="true"></el-input> 
                </el-form-item>

                <el-form-item label="等级发货文案">
                  <el-input v-model="formLabelAlign.gradeShipments"></el-input> 
                </el-form-item>

                <el-form-item label="服装仓 ID:2">
                    <el-form-item label="类目利润比" style="margin-bottom:10px">
                      <el-input v-model="formLabelAlign.catalogueProfit" :disabled="true"></el-input>
                    </el-form-item>

                    <el-form-item label="*PDM销售价(人民币)" style="margin-bottom:10px">
                      <el-input v-model="formLabelAlign.PDMprice" :disabled="true"></el-input>
                    </el-form-item>

                    <el-form-item label="*市场售价(美元)" style="margin-bottom:10px">
                      <el-input v-model="formLabelAlign.marketPrice" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="*本店售价(美元)" style="margin-bottom:10px">
                      <el-input v-model="formLabelAlign.actualPrice" :disabled="true"></el-input>
                    </el-form-item>

                    <el-form-item label="*库存" style="margin-bottom:10px">
                      <el-input v-model="formLabelAlign.productesStock" :disabled="true"></el-input>虚拟库存：1000，默认库存值。红色表示为清仓库存
                    </el-form-item>
                    <el-form-item label="固定价格">
                          <el-switch
                            v-model="fixedPrice"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                          </el-switch>
                    </el-form-item>
                    
                    <el-form-item label="*固定时间" v-show="fixedPrice">
                       <v-timedate style="display:inline-block" ref ="timedate01"></v-timedate>
                    </el-form-item>

                    <!-- 促销价设置 -->
                    <el-form-item label="启动促销">
                          <el-switch
                            v-model="radioSale"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                          </el-switch>
                    </el-form-item>

                    <section v-show="radioSale" style="border-top:1px solid #409EFF;padding-top:10px;border-bottom:1px solid #409EFF;">
                      <el-form-item label="*促销利润比" style="margin-bottom:10px">
                        <el-input v-model="formLabelAlign.saleProfit"></el-input>
                      </el-form-item>

                      <el-form-item label="*价格尾数" style="margin-bottom:10px">
                        <el-input v-model="formLabelAlign.priceTail"></el-input>
                      </el-form-item>
                      <el-form-item label="促销价(美元)" style="margin-bottom:10px">
                        <el-input v-model="formLabelAlign.promotionPrice"></el-input>
                      </el-form-item>

                      <el-form-item label="固定价格">
                            <el-switch
                              v-model="fixedPrice02"
                              active-color="#13ce66"
                              inactive-color="#ff4949">
                            </el-switch>
                      </el-form-item>
                      <el-form-item label="*固定时间" style="margin-bottom:10px" v-show="fixedPrice02">
                        <v-timedate style="display:inline-block" ref ="timedate03"></v-timedate>
                      </el-form-item>   

                      <el-form-item label="*促销时间" style="margin-bottom:10px">
                        <v-timedate style="display:inline-block" ref ="timedate02"></v-timedate>
                      </el-form-item>

                      <el-form-item label="固定活动库存">
                            <el-switch
                              v-model="fixedPrice03"
                              active-color="#13ce66"
                              inactive-color="#ff4949">
                            </el-switch>
                            备注：打开表示启用设置活动库存。
                      </el-form-item>
                      <el-form-item label="设置活动库存" style="margin-bottom:10px" v-show="fixedPrice03">
                        <el-input v-model="formLabelAlign.activeInventory"></el-input>
                      </el-form-item>   

                      <el-form-item label="虚拟销量" style="margin-bottom:10px">
                        <el-input v-model="formLabelAlign.virtualSales"></el-input>
                      </el-form-item>                      
                      <el-form-item label="活动库存销量" style="margin-bottom:10px">
                        <el-input v-model="formLabelAlign.activityInventorySales"></el-input>
                      </el-form-item>

                    </section>

                    <!-- APP专享价设置 -->
                    <el-form-item label="启动APP专享价">
                          <el-switch
                            v-model="radioSaleApp"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                          </el-switch>
                    </el-form-item>
                    <section v-show="radioSaleApp" style="border-top:1px solid #409EFF;padding-top:10px;border-bottom:1px solid #409EFF;">
                      <el-form-item label="*APP利润比" style="margin-bottom:10px">
                        <el-input v-model="formLabelAlign.APP_Profit"></el-input>
                      </el-form-item>

                      <el-form-item label="*价格尾数" style="margin-bottom:10px">
                        <el-input v-model="formLabelAlign.APPpriceTail"></el-input>
                      </el-form-item>
                      <el-form-item label="促销价(美元)" style="margin-bottom:10px">
                        <el-input v-model="formLabelAlign.APPpromotionPrice"></el-input>
                      </el-form-item>                     
                      
                      <el-form-item label="*促销时间" style="margin-bottom:10px">
                        <v-timedate style="display:inline-block" ref ="timedate04"></v-timedate>
                      </el-form-item>                      
                    
                    </section>
                </el-form-item>


                <el-form-item label="">
                  <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item>

            </el-form>


          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
                <el-button>商品描述</el-button>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
                <el-button>商品相册</el-button>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>

        </el-collapse>

    </div>
</template>
<script>
import  Cascader  from '../snippets/Cascader.vue';
import  TimeDate  from '../snippets/TimeDate.vue';
  export default {
    data() {
      return {
          //选择平台
          platformValue01: [{
            value: '选项1',
            label: '英语商祥'
          }, {
            value: '选项2',
            label: '葡语商祥'
          }, {
            value: '选项3',
            label: '西语商祥'
          }, {
            value: '选项4',
            label: '阿拉伯语商祥'
          }],
          //选择平台01
          choosePlatformValue01: '英语商祥',
         loading2:"",
        //设置表单左对齐
        labelPosition: 'left',
        formLabelAlign: {
          //产品SKU
          productesSKU: '',
          //商品编码
          commodityCoding: '',
          //商品ID
          productesID: "",
          //关联商品SKU
          associatedGoods:"",
           //网站频道
          webChannel: '',

          //***商品标题
          webTitle: '',
          //***titleSEO
          titleSEO: '',
          //***description(SEO)
          descriptionSEO: '',

          //默认标题
          defaultTitle: "",
          //中文名称
          chineseName:"",
           //****产品型号词
          productModel: '',
          //color
          productesColor: '',
          //实际重量
          actualWeight: '',
          //销售重量
          salesWeight: '',
          //体积重量
          volumeWeight: "",
          //包装尺寸(长*宽*高)
          packagingSize:"",
          //***等级发货文案
          gradeShipments:"",

           //类目利润比
          catalogueProfit: '',
          //PDM销售价(人民币)
          PDMprice: '',
          //市场售价(美元)
          marketPrice: '',
          //本店售价(美元)实际售价
          actualPrice: '',
          //库存
          productesStock: "",

  //促销价设置参数
        //***促销利润比
        saleProfit:"",
        //***价格尾数
        priceTail:"",
        //***促销价(美元)
        promotionPrice:"",
        //***设置活动库存
        activeInventory:"",
        //***虚拟销量
        virtualSales:"",
        //***活动库存销量
        activityInventorySales:"",
  
  //APP专享价设置参数
        //***APP利润比
        APP_Profit:"",
        //***APP价格尾数
        APPpriceTail:"",
        //***APP促销价(美元)
        APPpromotionPrice:"",

        },
        //***固定价格
        fixedPrice:"false",


        //***促销价设置参数-固定价格02
        fixedPrice02:"false",
        //***促销价设置参数-固定促销活动库存03
        fixedPrice03:"false",    

        //***启动促销
        radioSale:"false",
        //***启动APP专享价
        radioSaleApp:"false",

        //***活动库存
        radioOfStock:""
      }
      

    },
    created(){
      // 进来页面请求url数据，渲染到页面，修改以下4个数据
      console.log(this.$route.query.id)
      this.formLabelAlign.productesSKU ="男装"
      this.formLabelAlign.commodityCoding ="哈哈"
      this.formLabelAlign.productesID ="disconte"
      this.formLabelAlign.associatedGoods ="disconte"
      this.formLabelAlign.webChannel ="首页"
      this.formLabelAlign.defaultTitle ="男装"
      this.formLabelAlign.chineseName ="哈哈"

      this.formLabelAlign.productesColor ="disconte"
      this.formLabelAlign.actualWeight ="disconte"
      this.formLabelAlign.salesWeight ="首页"
      this.formLabelAlign.volumeWeight ="男装"
      this.formLabelAlign.packagingSize ="哈哈"
      this.formLabelAlign.catalogueProfit ="disconte"
      this.formLabelAlign.PDMprice ="disconte"
      this.formLabelAlign.marketPrice ="首页"
      this.formLabelAlign.actualPrice ="男装"
      this.formLabelAlign.productesStock ="1000"   
    },
    mounted(){

     },
    components:{
      'v-cascader':Cascader,
      'v-timedate':TimeDate
      
	    },
    methods: {
      
      onSubmit() {
        // //固定时间01
        // console.log(this.$refs.timedate01.fixedSaleDate)
        // //促销价设置参数-促销时间02
        // console.log(this.$refs.timedate02.fixedSaleDate)
        // //促销价设置参数-固定时间03
        // console.log(this.$refs.timedate03.fixedSaleDate)
        // //APP促销时间
        // console.log(this.$refs.timedate04.fixedSaleDate)

        //绑定要好的数据请求提交
        var formLabelAlign_list ={
          //后台类目
           formLabelAlign_backstageCategory :this.$refs.cascader.chooseSkuNav,
          //商品标题
           formLabelAlign_webTitle :this.formLabelAlign.webTitle,
           //titleSEO
           formLabelAlign_titleSEO :this.formLabelAlign.titleSEO,
           //description(SEO)
           formLabelAlign_descriptionSEO :this.formLabelAlign.descriptionSEO,
           //产品型号词
           formLabelAlign_productModel :this.formLabelAlign.productModel,
           //等级发货文案         
           formLabelAlign_gradeShipments :this.formLabelAlign.gradeShipments,

       
            //固定价格
            formLabelAlign_fixedPrice:this.fixedPrice,
            //固定时间01
            formLabelAlign_timedate01 :this.$refs.timedate01.fixedSaleDate?this.$refs.timedate01.fixedSaleDate:"",

       //促销价设置参数     
            //启动促销
            formLabelAlign_radioSale:this.radioSale,
            //促销利润比
            formLabelAlign_saleProfit:this.formLabelAlign.saleProfit,
            //价格尾数
            formLabelAlign_priceTail:this.formLabelAlign.priceTail,
            //促销价(美元)
            formLabelAlign_promotionPrice:this.formLabelAlign.promotionPrice,
            //***促销价设置参数-固定价格02
            formLabelAlign_fixedPrice02:this.fixedPrice02, 
            //促销价设置参数-固定时间03
            formLabelAlign_timedate03:this.$refs.timedate03.fixedSaleDate?this.$refs.timedate03.fixedSaleDate:"",                                   
            //促销价设置参数-促销时间02
            formLabelAlign_timedate02:this.$refs.timedate02.fixedSaleDate?this.$refs.timedate02.fixedSaleDate:"",             
            //设置活动库存
            formLabelAlign_activeInventory:this.formLabelAlign.activeInventory,
            //***虚拟销量
            formLabelAlign_virtualSales:this.formLabelAlign.virtualSales,            
            //活动库存销量
            formLabelAlign_activityInventorySales:this.formLabelAlign.activityInventorySales,

        //APP专享价设置参数            
              //启动促销
              formLabelAlign_radioSaleApp:this.radioSaleApp,
              //APP利润比
              formLabelAlign_APP_Profit:this.formLabelAlign.APP_Profit,
              //APP价格尾数
              formLabelAlign_APPpriceTail:this.formLabelAlign.APPpriceTail,
              //APP促销价(美元)
              formLabelAlign_APPpromotionPrice:this.formLabelAlign.APPpromotionPrice,
              //APP促销时间
              formLabelAlign_timedate04:this.$refs.timedate04.fixedSaleDate?this.$refs.timedate04.fixedSaleDate:"",       
       
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