<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>商品管理</el-breadcrumb-item>
                <el-breadcrumb-item>侵权商品管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="handle-box">            
            <el-checkbox v-model="checked"></el-checkbox>
            <!-- ./snippets/Cascader.vue选择操作 -->
            <el-select v-model="value" placeholder="选择操作">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button type="success" @click="submitSKU">提交</el-button>
            
            <el-select v-model="value5" multiple collapse-tags placeholder="请选择">
                <el-option
                v-for="item in options"
                 
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-input v-model="select_word" placeholder="筛选关键词"  style="margin-left:45px"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>  
        
         
            <el-button type="success" @click="reset">重置</el-button>

        </div>
    </div>
</template>


<script>

import axios from 'axios'

  export default {
    data() {
      return {
      }
    },
    methods: {
     
    }
  };
</script>