<template>
    <section class = "details-module">
        <div class = "details-module-left">
            <img src="../assets/banner.png"/>
        </div> 
        <div class = "details-module-right">
            <div class = "details-module-title">
                {{JSON.parse(items).contentTitle}}
            </div> 
            <div class = "details-module-bottom">
                <span class = "details-module-bottom-time">{{format(JSON.parse(items).contentTime)}}</span>
                <span class = "details-module-bottom-name">刘洋 周杰伦</span>
            </div> 
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
    .details-module {
        width: 100%;
        background: #fff;
        margin-top: 0.7rem;
        padding-bottom: 1.1rem;
        height: 10.6rem;
    }
    .details-module-left {
        float: left;
        width: 11.4rem;
        height: 8.6rem;
        margin: 1rem 0.9rem;
    }
    .details-module-left img {
        width: 100%;
        height: 100%;
    }
    .details-module-right {
        float: right;
        padding-right: 0.9rem;
        margin-top: 1rem;
        padding-bottom: 1rem;
        width: 12.8rem;
        height: 8.6rem;
        position: relative;

    }
    .details-module-title {
        position: absolute;
        left: 0;
        top: 0;
    }
    .details-module-bottom {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 12.8rem;
        padding-right: 0.9rem;
        height: 1rem;
        font-family: .PingFangSC-Regular;
        font-size: 10px;
        color: #999999;
        line-height: 1rem;
    }
    .details-module-bottom-time {
        display: block;
        float: left;
    }
    .details-module-bottom-name {
        display: block;
        float: right;
    }
</style>