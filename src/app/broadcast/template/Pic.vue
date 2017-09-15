<template>
    <section class = "pic-module">  
        <div class = "pic-module-title">
            {{JSON.parse(items).contentTitle}}
        </div> 
        <div class = "pic-module-img">
            <img src="../assets/banner.png"/>
        </div>
        <div class = "pic-module-bottom">
            <span class = "pic-module-bottom-time">{{format(JSON.parse(items).contentTime)}}</span>
            <span class = "pic-module-bottom-name">刘洋 周杰伦</span>
            <span class = "pic-module-bottom-name">56分钟前</span>
        </div> 
    </section>
</template>


<script>
  'use strict';
  export default {
    props:["items"],
    data (){
        return {
        }
    },
    created () {
        
    },
    methods: {
        format(time) {
            console.log(time)
            let date = new Date(time);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let month = date.getMonth()+1;
            let dates = date.getDate();
            hours = hours < 10 ? "0" + hours :hours;
            minutes = minutes < 10 ? "0" + minutes :minutes;
            month = month < 10 ? "0" + month :month;
            dates = dates < 10 ? "0" + dates :dates;
            return (date.getFullYear()) + "-" + month + "-" + dates + " " + hours + ":" + minutes;
        },
    }
  }
</script>


<style>
    .pic-module {
        width: 100%;
        background: #fff;
        margin-top: 0.7rem;
        padding-bottom: 1.1rem;
    }
    .pic-module-img {
        width: 25.1rem;
        margin: 0 auto 1rem;
    }
    .pic-module-title {
        padding-left: 0.9rem;
        padding-right: 0.9rem;
        margin-bottom: 0.7rem;
        padding-top: 1rem;
        font-family: .PingFangSC-Regular;
        font-size: 16px;
        color: #353535;
        line-height: 1.7rem;
    }
    .pic-module-bottom {
        padding-left: 0.9rem;
        font-family: .PingFangSC-Regular;
        font-size: 12px;
        color: #666666;
        line-height: 12px
    }
</style>