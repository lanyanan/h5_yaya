<template>
    <section class = "head"> 
        <div v-if="itemObj.backgroundImage!=undefined" class = "head-img">
            <img v-bind:src="itemObj.backgroundImage"/>
        </div>
        <div class = "head-container">
            <p class = "head-container-title">{{itemObj.title}}</p>
            <div class = "head-container-time">{{format(itemObj.routeTime) + "开始"}}</div>
            <div class = "head-container-people">
                <span v-for="item in itemObj.starList">{{item.starName + " "}}</span>
            </div>
            <div class = "head-container-address">{{itemObj.routeSite}}</div>
        </div>
    </section>
</template>


<script>
    'use strict';

    import client from '../../../common/client.interactive.js';
    import request from '../../../common/request.js';

  export default {
    props: ['headArr'],
    data (){
        return {
            itemObj:{}
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
            hours = hours < 10 ? "0" + hours :hours;
            minutes = minutes < 10 ? "0" + minutes :minutes;
            return (date.getMonth()+1) + "月" + date.getDate() + "日" + " " + hours + ":" + minutes;
        },
    },
    watch: {
        headArr: function() {
            this.itemObj = JSON.parse(this.headArr);
        }
    }

  }
</script>

<style>
   .head {
        width: 100%;
        background: #fff;
   }
   .head-img {
        width: 100%;
        height: 12.5rem;
   }
   .head-img img {
        width: 100%;
        height: 12.5rem;
   }
   .head-container {
        width: 100%;
        padding-bottom: 1.1rem;
   }
   .head-container-title {
        margin: 1rem 0.9rem 0.9rem 0.9rem;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        line-height: 1.7rem;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
   }
   .head-container-time {
        padding-left: 2.4rem;
        background: url('../assets/time.png') no-repeat 0.9rem center;
        background-size: 1rem 1rem;
        font-family: .PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
   }
    .head-container-people {
        padding: 0.9rem 0.9rem 0.9rem 2.4rem;
        background: url('../assets/peopleOn.png') no-repeat 0.9rem center;
        background-size: 1rem 1rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #FD9316;
        letter-spacing: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
   }
    .head-container-address {
        padding-right: 0.9rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-left: 2.4rem;
        background: url('../assets/address.png') no-repeat 0.9rem center;
        background-size: 1rem 1rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
   }
</style>