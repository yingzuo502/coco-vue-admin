<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style>
    @import "../static/css/main.css";
    @import "../static/css/color-dark.css";     /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/

/*标签初始化*/
  html,body,h1, h2, h3, h4, h5, h6, ul, li, ol, td, tr, dl,dt,dd, p, figure, input, textarea {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  body {
    font-size: 14px;
    font-family: "Microsoft YaHei";

    background: #FAFAFA;
    overflow: auto;
  }

  img{
    border: 0 none;
  }

  ul, ol {
    list-style: none;
  }

  em, i, b {
    font-style: normal;
  }

  a, input, button, select, textarea {
    outline: none;
    border: none;
  }

  a:hover, a:visited, a:link, a:active {
    text-decoration: none;
    color: inherit;
  }

  p, span {
    word-wrap: break-word;
    word-break: normal;
  }
  .triangle {
    display: inline-block;
    margin: 14px 10px;
    width:0;
    height:0;
    border-width:10px;
    border-style:solid dashed dashed dashed;
    border-color: #888888 transparent transparent transparent;
  }
    /*滚动条美化*/
  /*滚动条垂直方向的宽度*/
  /* ::-webkit-scrollbar
  {
    width: 5px;
  } */
  /* 垂直滚动条的滑动块 */
  /* ::-webkit-scrollbar-thumb:vertical {
     border-radius: 4px;
     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
     background-color:rgba(129,129,129,0.5);
  } */
</style>