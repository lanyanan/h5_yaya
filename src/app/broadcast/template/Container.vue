<template>
    <section class = "container">
       <div class = "container-item">
            <div class = "space-line-top"></div>
            <div class = "space-line-bottom"></div>
            <div class = "container-item-month">9月</div>
            <div class = "container-item-list">
                <div class = "container-item-list-border">
                    <div class = "container-item-list-time">
                        <span class = "circle-red"></span>
                        <span>9月9日 15:30开始</span>
                    </div>
                    <div class = "container-item-list-status">
                        <span class = "container-item-list-status-btn">直播中</span>
                        <span class = "container-item-list-status-txt">薛之谦的巡回演唱会深圳站</span>
                    </div>
                    <div class = "container-item-list-people">
                        <span class = "container-item-list-people-star">薛之谦</span>
                    </div>
                    <div class = "container-item-list-address">
                        <span class = "container-item-list-address-txt">深圳洪湾体院馆</span>
                        <span class = "container-item-list-address-right">进入现场</span>
                    </div>
                </div>
            </div>
            <div class = "container-item-list">
                <div class = "container-item-list-border">
                    <div class = "container-item-list-time">
                        <span class = "circle-red"></span>
                        <span>9月9日 15:30开始</span>
                    </div>
                    <div class = "container-item-list-status">
                        <span class = "container-item-list-status-btn">直播中</span>
                        <span class = "container-item-list-status-txt">薛之谦的巡回演唱会深圳站</span>
                    </div>
                    <div class = "container-item-list-people">
                        <span class = "container-item-list-people-star">薛之谦</span>
                    </div>
                    <div class = "container-item-list-address">
                        <span class = "container-item-list-address-txt">深圳洪湾体院馆</span>
                        <span class = "container-item-list-address-right">进入现场</span>
                    </div>
                </div>
            </div>
            <div class = "container-item-list">
                <div class = "container-item-list-border">
                    <div class = "container-item-list-time">
                        <span class = "circle-red"></span>
                        <span>9月9日 15:30开始</span>
                    </div>
                    <div class = "container-item-list-status">
                        <span class = "container-item-list-status-btn">直播中</span>
                        <span class = "container-item-list-status-txt">薛之谦的巡回演唱会深圳站</span>
                    </div>
                    <div class = "container-item-list-people">
                        <span class = "container-item-list-people-star">薛之谦</span>
                    </div>
                    <div class = "container-item-list-address">
                        <span class = "container-item-list-address-txt">深圳洪湾体院馆</span>
                        <span class = "container-item-list-address-right">进入现场</span>
                    </div>
                </div>
            </div>
            <div class = "container-item-list">
                <div class = "container-item-list-border">
                    <div class = "container-item-list-time">
                        <span class = "circle-red"></span>
                        <span>9月9日 15:30开始</span>
                    </div>
                    <div class = "container-item-list-status">
                        <span class = "container-item-list-status-btn">直播中</span>
                        <span class = "container-item-list-status-txt">薛之谦的巡回演唱会深圳站</span>
                    </div>
                    <div class = "container-item-list-people">
                        <span class = "container-item-list-people-star">薛之谦</span>
                    </div>
                    <div class = "container-item-list-address">
                        <span class = "container-item-list-address-txt">深圳洪湾体院馆</span>
                        <span class = "container-item-list-address-right">进入现场</span>
                    </div>
                </div>
            </div>
            <div class = "container-item-list">
                <div class = "container-item-list-border">
                    <div class = "container-item-list-time">
                        <span class = "circle-red"></span>
                        <span>9月9日 15:30开始</span>
                    </div>
                    <div class = "container-item-list-status">
                        <span class = "container-item-list-status-btn">直播中</span>
                        <span class = "container-item-list-status-txt">薛之谦的巡回演唱会深圳站</span>
                    </div>
                    <div class = "container-item-list-people">
                        <span class = "container-item-list-people-star">薛之谦</span>
                    </div>
                    <div class = "container-item-list-address">
                        <span class = "container-item-list-address-txt">深圳洪湾体院馆</span>
                        <span class = "container-item-list-address-right">进入现场</span>
                    </div>
                </div>
            </div>
       </div>
    </section>
</template>


<script>
    'use strict'; 
    export default {
        props: [],
        data (){
            return {
            }
        },
        created () {
            
        },
        methods: {
            
        },
        watch: {
           
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
        height: 7.9rem;
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
    .container-item-list-status-btn {
        display: block;
        float: left;
        width: 2.9rem;
        height: 1.2rem;
        margin:0 0.9rem;
        background: #E73850;
        border-radius: 33px;
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #FFFFFF;
        line-height: 1`.2rem;
        text-align: center;
    }
    .container-item-list-status-txt {
        line-height: 1.2rem;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
    }
    .container-item-list-people {
        padding-left: 0.9rem;
        margin: 1rem 0;
    }
    .container-item-list-people-star {
        padding-left: 1.6rem;
        background: url('../assets/peopleOn.png') no-repeat left center;
        background-size: 1rem 1rem;
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