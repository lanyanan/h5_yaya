<template>
    <section class = "container">
       <div v-for="t in listMouth"   class = "container-item">
            <div class = "space-line-top"></div>
            <div class = "space-line-bottom"></div>
            <div class = "container-item-month">{{t + " 月"}}</div>
            <div v-for="listItem in listItems[t]" class = "container-item-list" @click="toast('下载牙牙关注，娱乐大事件抢先看。')">
                <div class = "container-item-list-border">
                    <div class = "container-item-list-time">
                        <span v-if="listItem.icoStatus == 1" class = "circle-red"></span>
                        <span v-if="listItem.icoStatus == 2" class = "circle-yellow"></span>
                        <span v-if="listItem.icoStatus == 3" class = "circle-block"></span>
                        <span>{{format(listItem.routeTime) + " 开始"}}</span>
                    </div>
                    <div class = "container-item-list-status">
                        <span v-if="listItem.icoStatus == 2" class = "container-item-list-status-btn">直播中</span>
                        <span v-if="listItem.icoStatus == 1" class = "container-item-list-status-btn-order">预约</span>
                        <span v-if="listItem.icoStatus == 3" class = "container-item-list-status-btn-back">回放</span>
                        <span v-if="listItem.icoStatus == 2" class = "container-item-list-status-txt">{{listItem.title}}</span>
                        <span v-if="listItem.icoStatus == 1 || listItem.icoStatus == 3" class = "container-item-list-status-txt-two">{{listItem.title}}</span>
                    </div>
                    <div class = "container-item-list-people">
                        <span class = "container-item-list-people-star">{{getStarName(listItem)}}
                        </span>
                    </div>
                    <div class = "container-item-list-address">
                        <span class = "container-item-list-address-txt">{{listItem.routeSite}}</span>
                        <span v-if="listItem.isViewScene == 1" class = "container-item-list-address-right">进入现场</span>
                    </div>
                </div>
            </div>
       </div>
    </section>
</template>


<script>
    'use strict'; 
    export default {
        props: ["listItem", "toast"],
        data (){
            return {
                listItems:{}
            }
        },
        computed: {
            listMouth: function () {
                let propertys = Object.keys(this.listItems);
                return propertys;
            }
        },
        created () {
            console.log(document.getElementsByClassName('container-item'))
        },
        mounted (){
            
        },
        methods: {
            changeItem(){
                let data = JSON.parse(this.listItem)
                let propertys = Object.keys(data);
                this.listItems = data;
                this.listMonth = propertys;
                console.log(this.listItems)
                console.log(this.listItems[9])
                console.log(this.listItems[10])
            },
            format(time) {
                console.log(time)
                let date = new Date(time);
                let hours = date.getHours();
                let minutes = date.getMinutes();
                hours = hours < 10 ? "0" + hours :hours;
                minutes = minutes < 10 ? "0" + minutes :minutes;
                return (date.getMonth()+1) + "月" + date.getDate() + "日" + " " + hours + ":" + minutes;
            },
            getStarName(listItem) {
                let nameString = "";
                listItem && listItem.starList.map((item,index)=>{
                    nameString = nameString + item.starName + " "
                })
                return nameString;
            }
        },
        watch: {
           listItem:function() {
            console.log(this.listItem)
                this.changeItem();
           }
        }
    }
</script>


<style>
    .container {
        width: 100%;
    }
    .container-item {
        position: relative;
        overflow: hidden;
    }
    .space-line-top {
        position: absolute;
        left: 0;
        top: 2.8rem;
        width: 1rem;
        height: 1.3rem;
        background: #fff;
    }
    .space-line-bottom {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 1rem;
        height: 8.8rem;
        background: #fff;
    }
    .container-item-month {
        height: 2.8rem;
        line-height: 2.8rem;
        padding-left: 0.9rem;
        font-family: .PingFangSC-Regular;
        font-size: 12px;
        color: #666666;
    }
    .container-item-list {
        background: #fff;
        padding-left: 0.9rem;
        
    }
    .container-item-list-border {
        border-left: 1px solid #f4f4f4;
    }
    .container-item-list-time {
        padding-left:0.9rem;
        padding-top:1.1rem;
        padding-bottom:1.1rem;
        font-family: .PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        line-height: 14px;
        position: relative;
    }
    .container-item-list-status {
        position: relative;
    }
    .container-item-list-status-btn {
        position: absolute;
        left: 0;
        top: 0.2rem;
        width: 2.9rem;
        height: 1.4rem;
        margin:0 0.9rem;
        background: #E73850;
        border-radius: 33px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FFFFFF;
        line-height: 1.4rem;
        text-align: center;
    }
    .container-item-list-status-btn-back {
        position: absolute;
        left: 0;
        top: 0.2rem;
        width: 2.1rem;
        height: 1.4rem;
        margin:0 0.9rem;
        background: #30C7F2;
        border-radius: 33px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FFFFFF;
        line-height: 1.4rem;
        text-align: center;
    }
    .container-item-list-status-btn-order {
        position: absolute;
        left: 0;
        top: 0.2rem;
        width: 2.1rem;
        height: 1.4rem;
        margin:0 0.9rem;
        background: #FD9316;
        border-radius: 33px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FFFFFF;
        line-height: 1.4rem;
        text-align: center;
    }

    .container-item-list-status-txt {
        padding: 0 0.9rem 0 0.9rem;
        line-height: 1.8rem;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-indent: 3.8rem;
    }
    .container-item-list-status-txt-two {
        padding: 0 0.9rem 0 0.9rem;
        line-height: 1.8rem;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-indent: 2.8rem;
    }
    .container-item-list-people {
        padding-left: 0.9rem;
        margin: 0.8rem 0 ;
    }
    .container-item-list-people-star {
        padding-left: 1.6rem;
        background: url('../assets/peopleOn.png') no-repeat left center;
        background-size: 0.8rem 0.8rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;

    }
    .container-item-list-address {
        margin-left: 0.9rem;
        padding-bottom: 1.4rem;
        border-bottom: 1px solid #f4f4f4;
        overflow: hidden;
    }
    .container-item-list-address-txt {
        width: 15rem;
        display: block;
        float: left;
        padding-left: 1.6rem;
        background: url('../assets/address.png') no-repeat left center;
        background-size: 1rem 1rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        overflow: hidden;
        letter-spacing: 0;
    }
    .container-item-list-address-right {
        width: 5.5rem;
        display: block;
        float: right;
        text-align: right;
        padding-right: 0.9rem;
        margin-right: 0.9rem;
        background: url('../assets/right.png') no-repeat right center;
        background-size: 0.5rem 0.9rem;
        font-family: .PingFangSC-Regular;
        font-size: 14px;
        color: #E73850;
    }
    .circle-red {
        display: block;
        position: absolute;
        left: -0.25rem;
        top: 1.3rem;
        width: 0.5rem;
        height: 0.5rem;
        background:#f0f;
        border-radius: 0.5rem;
    }
    .circle-yellow {
        display: block;
        position: absolute;
        left: -0.25rem;
        top: 1.3rem;
        width: 0.5rem;
        height: 0.5rem;
        background:#fd9316;
        border-radius: 0.5rem;
    }
    .circle-block {
        display: block;
        position: absolute;
        left: -0.25rem;
        top: 1.3rem;
        width: 0.5rem;
        height: 0.5rem;
        background:#aaaaaa;
        border-radius: 0.5rem;
    }
    
</style>