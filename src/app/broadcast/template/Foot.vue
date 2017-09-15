<template>
    <section class="foot" v-bind:style="{display: show ? 'block' : 'none'}"> 
        <a class = "download" v-bind:href="link">下载牙牙关注下载更多</a>
    </section>
</template>


<script>
  'use strict';
  export default {
    props:["footShow"],
    data (){
        return {
            show:true,
            link: "http://www.9zhitx.com/html/ios_android.html?t=" + (new Date()).getTime()
        }
    },
    created () {
        
    },
    methods: {
    },
    watch: {
        footShow:function() {
            console.log(this.show)
            this.show = this.footShow;
        }
    }
  }
</script>


<style scoped>
.foot {
    width: 100%;
    height: 4.5rem;
}
.download {
    display:block;
    width:21.6rem;
    height: 3.1rem;
    margin: 0.7rem auto;
    border-radius: 3.1rem;
    background: #fff;
    line-height: 3.1rem;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
}
</style>