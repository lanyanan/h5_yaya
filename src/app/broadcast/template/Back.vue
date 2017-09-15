<template>
    <section  class = "lan-video-module">
        
        <div v-on:click="showBtnbar"  v-bind:class="videoClass">
            <video webkit-playsinline="true" controls="false" class="lan-video-node" v-bind:src="JSON.parse(items).obj.videoUrl" >
                您的浏览器不支持 video 标签。
            </video>
        </div>
        <div v-on:click="startPlay" v-bind:class="bgImgClass">
            <img v-bind:src="JSON.parse(items).obj.videoImage">
        </div>
        <div v-on:click="startPlay" v-if="bigBtnShow" class="lan-bigbtn">
            <span class="lan-start-btn"></span>
        </div>
        <div v-bind:class="lanbtnbar">
            <div v-on:click="isStartPlay" v-bind:class="btnLeft"></div>
            <div class="lan-btnbar-center">
                <div class="lan-range"></div>
                <div class="lan-btnbar-play-time"></div>
            </div>
            <div v-on:click="fullScreen" v-bind:class="btnRight"></div>
        </div>
    </section>
</template>


<script>
  'use strict';
  export default {
    props: ["items"],
    data (){
        return {
            bigBtnShow:true,
            playStatus:false,
            bgImgClass:'lan-pre',
            videoClass:'lan-video',
            btnLeft:'lan-btnbar-left-pasued',
            btnRight:'lan-btnbar-left-big',
            lanbtnbar:''
        }
    },
    created () {
        console.log(this.items)
    },
    mounted (){
        
     
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
            date = date < 10 ? "0" + date :date;
            return (date.getFullYear()) + "-" + month + "-" + dates + " " + hours + ":" + minutes;
        },
        startPlay(e) {
            let myVideo = e.target.parentNode.parentNode.getElementsByClassName("lan-video-node");
            myVideo[0].play()
            this.playStatus=true;
            this.bigBtnShow=false;
            this.bgImgClass='lan-pre-hidden';
            this.videoClass='lan-video-hidden';
            this.showBtnbar();
            
        },
        setTime() {
            let _this =this;
            setTimeout(function(){
                _this.lanbtnbar='';
            }, 5000)
        },
        showBtnbar() {
            this.lanbtnbar='lan-btnbar-show';
            this.setTime();
        },
        isStartPlay(e) {
            this.playStatus = !this.playStatus;
            console.log(this.playStatus)
            let myVideo = e.target.parentNode.parentNode.getElementsByClassName("lan-video-node");
            
            if(this.playStatus){
                myVideo[0].play();
            }else{
                myVideo[0].pause()
            }
            this.btnLeft = this.playStatus ? 'lan-btnbar-left-pasued' : 'lan-btnbar-left-start';
        },
        fullScreen(){
            var docElm = document.documentElement;
            docElm.webkitRequestFullScreen();
        }
    }
  }
</script>


<style>
    .lan-video-module {
        width: 100%;
        position: relative;
    }
    .lan-video {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height:100%;
        z-index:-1;
    }
    .lan-video-hidden {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .lan-video video{
        width: 100%;
        border:0;
    }
    .lan-video-hidden video{
        width: 100%;
        border:0;
    }
    video::-webkit-media-controls {
      display:none !important;
    }
    .lan-pre {
        z-index:10;
        width: 100%;
        height: 100%;
    }
    .lan-pre-hidden {
        width: 100%;
        height: 100%;
        visibility:hidden;
    }
    .lan-pre img{
        width: 100%;
        height: 100%;
    }
    .lan-bigbtn {
        position: absolute;
        left:0;
        top:0;
    }
    .lan-bigbtn {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 3.1rem;
        height: 3.1rem;
        margin-left: -1.55rem;
        margin-top: -1.55rem;
        border-radius: 3.1rem;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .lan-start-btn{
        padding-left: -1rem;
        font-size: 0;  
        line-height: 0;  
        border-width: 0.8rem;  
        border-color: #fff;  
        border-right-width: 0;  
        border-style: dashed;  
        border-left-style: solid;  
        border-top-color: transparent;  
        border-bottom-color: transparent;
    }
    .lan-btnbar-show {
        width: 100%;
        height: 2.5rem;
        position: absolute;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        animation: showbar 1s linear;
        -webkit-animation: showbar 2s;
    }
    .lan-btnbar-hidden {
        width: 100%;
        height: 2.5rem;
        position: absolute;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        animation: hiddenbar 5s linear 2s infinite alternate;
        -webkit-animation: hiddenbar 5s linear 2s infinite alternate;
    }
    .lan-btnbar-left-start {
        float: left;
        width:2.57rem;
        height:2.57rem;
        background:url("../assets/ico_videopage_play@2x.png") no-repeat center center;
        background-size: 2.57rem 2.57rem;
    }
    .lan-btnbar-left-pasued {
        float: left;
        width:2.57rem;
        height:2.57rem;
        background:url("../assets/ico_videopage_pause@2x.png") no-repeat center center;
        background-size: 2.57rem 2.57rem;
    }
    .lan-btnbar-right-small {
        float: right;
        width:2.57rem;
        height:2.57rem;
        background:url("../assets/ico_videopage_shrink@2x.png") no-repeat center center;
        background-size: 2.57rem 2.57rem;
    }
    .lan-btnbar-left-big {
        float: right;
        width:2.57rem;
        height:2.57rem;
        background:url("../assets/ico_videopage_full-screen@2x.png") no-repeat center center;
        background-size: 2.57rem 2.57rem;
    }

    @keyframes showbar{
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @-webkit-keyframes showbar{
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @keyframes hiddenbar{
        0% {opacity: 0.7;}
        100% {opacity: 0;}
    }
    @-webkit-keyframes hiddenbar{
        0% {opacity: 0.7;}
        100% {opacity: 0;}
    }
</style>