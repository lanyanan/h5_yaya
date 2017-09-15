<template>
    <section class = "container">
       <div v-for="item in containerArr" class = "container-item">
            <div class = "container-item-left">
                <span>{{item.rankNo}}</span>
            </div>
            <div class = "container-item-center">
                <div class = "container-item-img">
                    <img  v-bind:src="item.portrait"/>
                </div>
                <div class = "container-item-name">
                    <div class = "container-item-name-top">{{item.realName}}</div>
                    <div class = "container-item-name-bottom">
                        <span class = "container-item-name-bottom-num">{{item.totalScore}}</span>
                        <span class = "container-item-name-bottom-txt">魅力值</span>
                    </div>
                </div>
            </div>
            <div class = "container-item-right">
                <span v-if="parseInt(item.rankGab) > 0" class = "container-item-right-icon-up">{{item.rankGab}}</span>
                <span v-else-if="parseInt(item.rankGab) === 0" class = "container-item-right-icon-same"></span>
                <span v-else-if="parseInt(item.rankGab) < 0" class = "container-item-right-icon">{{Math.abs(item.rankGab)}}</span>
                <span v-else class = "container-item-right-icon-new"></span>
            </div>
       </div>
        
    </section>
</template>


<script>
    'use strict'; 
    export default {
        props: ["containerArr"],
        data (){
            return {
                containerArray:[]
            }
        },
        created () {
            
        },
        methods: {
            changeData() {
                this.containerArray = this.containerArr;
            }
        },
        watch: {
            containerArr: function(){
                this.changeData();
            }   
        }
    }
</script>


<style>
    .container {
        width: 100%;
        margin-top: 0.7rem;
        margin-bottom: 3.9rem;
    }
    .container-item {
        width:  25.4rem;
        height: 6.4rem;
        background: #fff;
        margin:0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container-item-left {
        width: 3.7rem;
        height: 6.4rem;
        flex: 0;
    }
    .container-item-left span {
        display: block;
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 1.4rem;
        background: #fd9316;
        color: #fff;
        margin: 2.4rem 1.4rem 2.5rem 0.9rem;
        text-align: center;
        line-height: 1.4rem;
        font-family: PingFangSC-Semibold;
        font-size: 12px;
        color: #FFFFFF;
    }
    .container-item-center {
        flex: 1;
    }
    .container-item-right {
        flex: 0;
        width: 3rem;
        height: 6.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container-item-img {
        width: 4.3rem;
        height: 4.3rem;
        border-radius: 4.3rem;
        background: #f0f;
        margin-top: 1rem;
        float: left;
    }
    .container-item-img img {
        width: 4.3rem;
        height: 4.3rem;
        border-radius: 4.3rem;
    }
    .container-item-name {
        float: left;
        height: 6.4rem;
        padding-left: 0.9rem;
    }
    .container-item-name-top {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        line-height: 16px;
        margin-top: 1.78rem;
    }
    .container-item-name-bottom {
        margin-top: 0.9rem;
        font-size: 12px;
    }
    .container-item-name-bottom-num {
        color: #FD9316;
    }
    .container-item-name-bottom-txt {
        color: #999999;
    }
    .container-item-right-icon {
        width: 1rem;
        height: 1rem;
        display: block;
        line-height: 1rem;
        padding:0 1rem;
        background: url('../assets/down.png') no-repeat 0.2rem center;
        background-size: 0.7rem 0.9rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #999999;
        line-height: 1rem;
        text-align:center;
    }
    .container-item-right-icon-up {
        width: 1rem;
        height: 1rem;
        display: block;
        line-height: 1rem;
        padding:0 1rem;
        background: url('../assets/up.png') no-repeat 0.2rem center;
        background-size: 0.7rem 0.9rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #999999;
        line-height: 1rem;
        text-align:center;
    }
    .container-item-right-icon-new {
        width: 1rem;
        height: 1rem;
        display: block;
        line-height: 1rem;
        padding:0 0 0 1.5rem;
        margin-right:1rem;
        background: url('../assets/new.png') no-repeat right center;
        background-size: 1.5rem 0.8rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #999999;
        line-height: 14px;
    }
    .container-item-right-icon-same{
        width: 1rem;
        height: 1rem;
        display: block;
        line-height: 1rem;
        padding:0 0 0 1.5rem;
        margin-right:1rem;
        background: url('../assets/same.png') no-repeat right center;
        background-size: 1.5rem 0.8rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #999999;
        line-height: 14px;
    }
</style>