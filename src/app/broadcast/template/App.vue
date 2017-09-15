<template>
    <section class="view"> 
        <Heads :headArr="headArr"></Heads>
        <section v-for="item in list" class="container-item">
            <Movie v-if="item.contentType == 2 || item.contentType == 3" :items="JSON.stringify(item)"></Movie>
            <Pic v-if="item.contentType == 1 " :items="JSON.stringify(item)"></Pic>    
            <Detailss v-if="item.contentType == 1" :items="JSON.stringify(item)"></Detailss>
        </section>
        <Foot :footShow="footShow"></Foot>
        <Download :downloadtxt="downloadTxt" :name="name"></Download>
    </section>
</template>


<script>
  'use strict';
  import common from '../../../common/common.css';
  import request from '../../../common/request.js';
  import Head from '../template/Head.vue';
  import Foot from '../template/Foot.vue';
  //import Back from '../template/Back.vue';
  import Pic from '../template/Pic.vue';
  import Movie from '../template/Movie.vue';
  import Detailss from '../template/Details.vue';
  import Download from '../template/Download.vue';

  export default {
    components: {
       'Heads':Head,
       'Foot':Foot,
       'Pic':Pic,
       'Movie':Movie,
       'Detailss':Detailss,
       'Download':Download,
    },
    data (){
        return {
            headArr: "",
            list: [],
            footShow:"",
            downloadTxt:'',
            name:''
        }
    },
    created () {
        this.getBroadcast();
        this.getBroadHead();
        this.getDownTxt();
        this.footShow = true
    },
    methods: {
        getBroadHead() {
            let _this = this;
            request.doGet('/router?method=jz.star.broadcast.detail.top', {id:1}).then(function(res){
                console.log(res);
                if(res){
                    _this.headArr = JSON.stringify(res.starBroadcast);               
                }
                

            });
        },
        getBroadcast() {
            let _this = this;
            request.doGet('/router?method=jz.star.broadcast.detail', {id:1}).then(function(res){
                //视频直播的数组 其他数组
                let data = res.starBroadcastContentList;
                let videoArr = [];
                let txtArr = [];
                console.log(data);
                data && data.map((item, index) => {
                    if (item.contentType == 3 || item.contentType == 2) {
                        videoArr.push(item);
                    } else if (item.contentType == 1) {
                        txtArr.push(item);  
                    }
                });
                //数组时间倒序
                _this.list = _this.getReverseArr(videoArr).concat(_this.getReverseArr(txtArr));
            });
        },
        getReverseArr(itemArr) {
            for( let i = 0; i < itemArr.length; i++) {
                for(let j = 0; j < itemArr.length; j++){
                    if((itemArr[i]).contentTime > (itemArr[j]).contentTime){
                        let temp = itemArr[i];
                        itemArr[i] = itemArr[j];
                        itemArr[j] = temp;
                    }
                }
            }
            return itemArr;
        },
        getDownTxt() {
            let _this = this;
            request.doGet('/router?method=jz.common.h5.share', {num:"10"}).then(function(res){
                let data = res.h5ShareBo;
                _this.downloadTxt = data.star;
            }); 
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



/**
 * <BackModule v-if="item.contentType == 3" :items="JSON.stringify(item)"></BackModule>
            <Movie v-if="item.contentType == 2" :items="JSON.stringify(item)"></Movie>
            <Pic v-if="item.contentType == 1 " :items="JSON.stringify(item)"></Pic>
            
            <Detailss v-if="item.contentType == 1" :items="JSON.stringify(item)"></Detailss>
 */