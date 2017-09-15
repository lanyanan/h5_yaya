<template>
    <section class="download">
        <div style="height: 60px;"></div> 
        <div class="download-btn">
            <div class="download-btn-img">
                <img src = "http://h5.9zhiad.com/h5/common/images/common/icon_logo.png"/>
            </div>
            <div class="download-btn-txt">
                <div>{{appName}}</div>
                <div>{{title}}</div>
            </div>
            <a class="download-btn-link" v-bind:href="link">马上下载</a>
        </div>            
    </section>
</template>
 

 

<script>
  'use strict';
  export default {
    props:["downloadtxt","name"],
    data (){
        return {
            appName: "下载牙牙关注APP",
            title: "兴趣相同，就是聊得来！",
            link: "http://www.9zhitx.com/html/ios_android.html?t=" + (new Date()).getTime()
        }
    },
    create(){
        
    },
    methods: {
        changeTxt(){
            this.title = this.downloadtxt;
        },
        changeName(){
            this.appName = this.name
        },
    },
    watch: {
        downloadtxt:function(){
            this.changeTxt();
        },
        name:function(){
            this.changeName();
        }
    }
  }
</script>


<style> 
    .download {

    }
    .download-btn {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 99;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding: 10px;
        font-size: 14px;
        background: #fff;
        width: 100%;
        max-width: 500px;
        height: 60px;
        margin: 0 auto;
        border-top: 1px solid #fff;
    }
    .download-btn-img {
        width:36px;
        height:36px;
    }
    .download-btn-txt {
        flex: 1;
        margin: 0 10px;
    }
    .download-btn-link {
        display: block;
        width: 86px;
        height: 36px;
        line-height: 36px;
        color: #fff;
        background: #E73850;
        border-radius: 36px;
        text-align: center;
    }
</style>