<template>
    <section class="view"> 
        <Container :listItem = "list" :toast = "toast"></Container>
        <Toast :title = "title" :showToast = "show"></Toast>
        <Foot :footShow="footShow"></Foot>
        <Download :downloadtxt="downloadTxt" :name="name"></Download>
    </section>
</template>


<script>
  'use strict';
  import common from '../../../common/common.css';
  import request from '../../../common/request.js';
  import Container from '../template/Container.vue';
  import Toast from '../template/Toast.vue';
  import Foot from '../template/Foot.vue';
  import Download from '../template/Download.vue';

  export default {
    components: {
       'Container':Container,
       'Toast':Toast,
       'Foot':Foot,
       'Download':Download,
    },
    data (){
        return {
            list: {},
            title: '',
            show: false,
            footShow: false,
            downloadTxt:"",
            name:"",
        }
    },
    created () {
        this.getBroadcast();
        this.getDownTxt();
    },
    methods: {
        getBroadcast() {
            let _this = this;
            request.doGet('/router?method=jz.star.broadcast.list', {startIndex:0,pageSize:10}).then(function(res){
                console.log(res);
                if(res){
                    _this.format(res.curDate);
                    let broadcastList = res.starBroadcastList.slice(0,5)
                    let nowMonth = (new Date(res.curDate)).getMonth() + 1;
                    let obj = {};
                    //_this.list = res.starBroadcastList;
                    //处理数组
                    // let sameMonth = [];
                    // let otherMonth = [];
                    //大于5条显示下载条
                    if(res.starBroadcastList && res.starBroadcastList.length > 5){
                        _this.footShow = true;
                    }
                    //map时间
                    broadcastList && broadcastList.map((item, index)=>{
                        let month = (new Date(item.routeTime)).getMonth() + 1;
                        obj[month] = obj[month] == undefined ? [] : obj[month];
                        obj[month].push(item);
                        // if(month == nowMonth){
                        //     sameMonth.push(item);
                        // }else{
                        //     otherMonth.push(item)
                        // }
                    })
                    _this.list = JSON.stringify(obj)
                    console.log(_this.list)
                    // _this.list.push(sameMonth);                   
                    // _this.list.push(otherMonth);                   
                }
                

            });
        },
        getDownTxt() {
            let _this = this;
            request.doGet('/router?method=jz.common.h5.share', {num:"10"}).then(function(res){
                let data = res.h5ShareBo;
                _this.downloadTxt = data.star;
            }); 
        },
        format(time) {
            let nowDate = new Date(time);
            let newDate = new Date();
            console.log(nowDate.getDate())
            console.log(nowDate.getFullYear())
            console.log(nowDate.getMonth())
            console.log(newDate.getMonth())
        },
        toast(str) {
            this.title = str;
            this.show = true;
            this.hiddenToast();
        },
        hiddenToast() {
            let _this = this;
            setTimeout(function(){
                _this.show = false;
            },1000)
        },
    }
  }
</script>


<style>
    html, body {
        max-width: 500px;
        height: 100%;
        margin:0 auto;
        background:#f4f4f4;
    }
    .view {
        width: 100%;
    }
</style>