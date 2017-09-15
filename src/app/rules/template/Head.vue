<template>
    <section class = "head"> 
        <div class = "head-item head-top-two">
            <div class = "head-top">
                <div class = "head-top-img">
                    <img class = "head-top-img-pic" v-bind:src="twoStar.portrait"/>
                    <span class = "head-top-img-top"></span>
                    <span class = "head-top-img-bottom">{{twoStar.rankNo}}</span>
                </div>
            </div>
            <div class = "head-bottom">
                <div class = "head-bottom-name">
                    <span class = "head-bottom-name-left">0</span>
                    <span class = "head-bottom-name-cneter">{{twoStar.realName}}</span>
                    <span v-if="parseInt(twoStar.rankGab)>0" class = "head-bottom-name-right">{{parseInt(twoStar.rankGab)}}</span>
                    <span v-else-if="parseInt(twoStar.rankGab) === 0" class = "head-bottom-name-right-same">-</span>
                    <span v-else-if="parseInt(twoStar.rankGab) < 0" class = "head-bottom-name-right-down">{{Math.abs(item.rankGab)}}</span>
                    <span v-else class = "head-bottom-name-new"></span>
                </div>
                <div class = "head-bottom-meili">
                    <span class = "head-bottom-meili-num">{{twoStar.totalScore}}</span>
                    <span class = "head-bottom-meili-txt">魅力值</span>
                </div>
            </div>
        </div>
        <div class = "head-item head-top-one">
            <div class = "head-top">
                <div class = "head-top-img">
                    <img class = "head-top-img-pic" v-bind:src="oneStar.portrait"/>
                    <span class = "head-top-img-top"></span>
                    <span class = "head-top-img-bottom">{{oneStar.rankNo}}</span>
                </div>
            </div>
            <div class = "head-bottom">
                <div class = "head-bottom-name">
                    <span class = "head-bottom-name-left">0</span>
                    <span class = "head-bottom-name-cneter">{{oneStar.realName}}</span>
                    <span v-if="parseInt(oneStar.rankGab)>0" class = "head-bottom-name-right">{{parseInt(oneStar.rankGab)}}</span>
                    <span v-else-if="parseInt(oneStar.rankGab) === 0" class = "head-bottom-name-right-same">-</span>
                    <span v-else-if="parseInt(oneStar.rankGab) < 0" class = "head-bottom-name-right-down">{{Math.abs(item.rankGab)}}</span>
                    <span v-else class = "head-bottom-name-new"></span>
                </div>
                <div class = "head-bottom-meili">
                    <span class = "head-bottom-meili-num">{{oneStar.totalScore}}</span>
                    <span class = "head-bottom-meili-txt">魅力值</span>
                </div>
            </div>
        </div>
        <div class = "head-item head-top-three">
            <div class = "head-top">
                <div class = "head-top-img">
                    <img class = "head-top-img-pic" v-bind:src="threeStar.portrait"/>
                    <span class = "head-top-img-top"></span>
                    <span class = "head-top-img-bottom">{{threeStar.rankNo}}</span>
                </div>
            </div>
            <div class = "head-bottom">
                <div class = "head-bottom-name">
                    <span class = "head-bottom-name-left">0</span>
                    <span class = "head-bottom-name-cneter">{{threeStar.realName}}</span>
                    <span v-if="parseInt(threeStar.rankGab)>0" class = "head-bottom-name-right">{{parseInt(threeStar.rankGab)}}</span>
                    <span v-else-if="parseInt(threeStar.rankGab) === 0" class = "head-bottom-name-right-same">-</span>
                    <span v-else-if="parseInt(threeStar.rankGab) < 0" class = "head-bottom-name-right-down">{{Math.abs(item.rankGab)}}</span>
                    <span v-else class = "head-bottom-name-new"></span>
                </div>
                <div class = "head-bottom-meili">
                    <span class = "head-bottom-meili-num">{{threeStar.totalScore}}</span>
                    <span class = "head-bottom-meili-txt">魅力值</span>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    'use strict';

    import client from '../../../common/client.interactive.js';
    import request from '../../../common/request.js';

  export default {
    props: ["headArr"],
    data (){
        return {
            threeStar: {},
            oneStar: {},
            twoStar: {},
        }
    },
    created () {
       
    },
    methods: {
        changeStar(){
            this.threeStar = (this.headArr)[2];
            this.oneStar = (this.headArr)[0];
            this.twoStar = (this.headArr)[1];
        }   
    },
    watch: {
        headArr:function(){
            this.changeStar();
        }  
    }

  }
</script>

<style>
   .head {
        width: 100%;
        height: 14.7rem;
        background: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
   }
   .head-item {
        width: 8rem;
        height: 14.7rem;
   }
   .head-top {
        width: 5rem;
        height: 5rem;
        margin: 3.8rem auto 1.75rem;  
   }
   .head-top-img {
        width: 5rem;
        height: 5rem;
        position: relative;
   }
   .head-top-img-pic {
        width: 5rem;
        height: 5rem;
        border: 1px solid #bed4fe;
        border-radius: 5rem;
   }
   .head-top-img-top {
        position: absolute;
        left: 0;
        top: -1.7rem;
        width: 5rem;
        height: 1.7rem;
        background: url('../assets/topTwo.png') no-repeat center bottom; 
        background-size: 2.6rem 1.7rem;
   }
   .head-top-img-bottom {
        position: absolute;
        left: 1.65rem;
        bottom: -0.65rem;
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 1.7rem;
        background: #a8c6ff;
        color: #435c8c;
        text-align: center;
        line-height: 1.7rem;
   }
   .head-bottom {

   }
   .head-bottom-name {
        width: 8rem;
        text-align: center;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 16px;
        overflow: hidden;
   }
   .head-bottom-name-right {
        padding-left: 0.9rem;
        background: url('../assets/up.png') no-repeat left center;
        background-size: 0.7rem 0.8rem;
        font-size: 12px;
        color: #e73850;
   }
   .head-bottom-name-right-same {
        padding-left: 0.9rem;
        background-size: 0.7rem 0.8rem;
        font-size: 12px;
        color: #ccc;
   }
   .head-bottom-name-right-down {
        padding-left: 0.9rem;
        background: url('../assets/down.png') no-repeat left center;
        background-size: 0.7rem 0.8rem;
        font-size: 12px;
   }
   .head-bottom-name-new {
        padding-left: 1.8rem;
        background: url('../assets/new.png') no-repeat right bottom;
        background-size: 1.5rem 0.8rem;
   }
   .head-bottom-name-left {
        padding-right: 1rem;
        visibility: hidden;
        

   }
   .head-bottom-meili {
        margin-top: 0.7rem; 
        font-size: 12px;
        width: 8rem;
        text-align: center;
        height: 1.2rem;
        line-height: 1.2rem;
   }
   .head-bottom-meili-num {
        font-family: PingFangSC-Semibold;
        font-size: 12px;
        color: #FD9316;
        line-height: 12px;
   }
   .head-bottom-meili-txt {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        line-height: 12px;
   }
   .head-top-one  .head-top {
        width: 5.7rem;
        height: 5.7rem;
        margin: 3.1rem auto 1.75rem;  
   }
   .head-top-one .head-top-img {
        width: 5.7rem;
        height: 5.7rem;
        position: relative;
   }
   .head-top-one .head-top-img-pic {
        width: 5.7rem;
        height: 5.7rem;
        border: 1px solid #ffc50f;
        border-radius: 5.7rem;
   }
   .head-top-one  .head-top-img-top {
        position: absolute;
        left: 0;
        top: -1.7rem;
        width: 5.7rem;
        height: 1.7rem;
        background: url('../assets/topOne.png') no-repeat center bottom; 
        background-size: 2.6rem 1.7rem;
   }
   .head-top-one  .head-top-img-bottom {
        position: absolute;
        left: 2rem;
        bottom: -0.65rem;
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 1.7rem;
        background: #fec610;
        color: #504216;
        text-align: center;
        line-height: 1.7rem;
   }
   .head-top-three .head-top-img-pic {
        border: 1px solid #fd9316;
   }
   .head-top-three  .head-top-img-top {
        background: url('../assets/topThree.png') no-repeat center bottom; 
        background-size: 2.6rem 1.7rem;
   }
   .head-top-three  .head-top-img-bottom {
        background: #ffab48;
        color: #6d4414;
   }
   
</style>