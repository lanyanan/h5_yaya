<template>
    <section class="view"> 
        <Heads :headArr = "headArr"></Heads>
        <Container :containerArr = "containerArr"></Container>
        <Download :downloadtxt = "downloadTxt"></Download>
    </section>
</template>


<script>
  'use strict';
  import common from '../../../common/common.css';
  import request from '../../../common/request.js';
  import Head from '../template/Head.vue';
  import Container from '../template/Container.vue';
  import Download from '../template/Download.vue';

  export default {
    components: {
       'Heads':Head,
       'Container':Container,
       'Download':Download,
    },
    data (){
        return {
            headArr: [],
            containerArr: [],
            downloadTxt:""   
        }
    },
    created () {
        this.getDayTop()
        this.getDownTxt()
    },
    methods: {
        getDayTop() {
            let _this = this;
            request.doGet('/router?method=jz.star.channel.star.rank.today.top', {num:"10"}).then(function(res){
                let data = res.dayTopList;
                _this.headArr = data.slice(0,3);
                _this.containerArr = data.slice(3, data.length);

            });
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