<template>
    <section class = "movie-module">  
        <div class = "movie-module-title">
            《三生三世十里桃花》电影发布会电影发布会
        </div> 
        <div  class = "movie-module-img">
            <video
                id="my-player"
                class="video-js"
                controls
                preload="auto"
                poster="http://images.9zhitx.com/c0856cc2-4596-4075-82da-c1f8f1e374ca.jpg"
                data-setup='{}'>
              <source src="http://video.9zhitx.com/55570b51-6fbf-46fe-866e-52755a66c158.mp4" type="video/mp4"></source>
              <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="http://videojs.com/html5-video-support/" target="_blank">
                  supports HTML5 video
                </a>
              </p>
            </video>
        </div>
        <div class = "back-module-title">
            <span class = "back-module-btn">回放</span>
            <span class = "back-module-txt">{{JSON.parse(items).obj.title}}</span>
        </div> 
        <div class = "back-module-bottom">
            <span class = "back-module-bottom-time">{{format(JSON.parse(items).contentTime)}}</span>
            <span class = "back-module-bottom-name">{{format(JSON.parse(items).contentTime)}}</span>
        </div>
    </section>
</template>


<script>
  'use strict';
  export default {
    props: ["items"],
    data (){
        return {
        }
    },
    created () {
        
    },
    mounted (){
        let vshare = videojs('my-player'); 
    },
    methods: {
        hidden(e){
            console.log(e.target)
            let btn = document.getElementsByClassName('vjs-big-play-button');
            btn.style.display="none"
        },
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
    }
  }
</script>


<style>
    .movie-module {
        width: 100%;
        background: #fff;
        margin-top: 0.7rem;
        padding-bottom: 1.1rem;
    }
    .movie-module-img {
        width: 100%;
        margin: 0 auto 1rem;
        position: relative;
    }
    .time-length {
        position: absolute;
        right:3%;
        bottom: 1.2em;
        padding: 0.4em;
        background: #000;
        color:#fff;
        opacity: 0.8;
        border-radius: 2em
    }
    .movie-module-title {
        padding-left: 0.9rem;
        padding-right: 0.9rem;
        margin-bottom: 0.7rem;
        padding-top: 1rem;
        font-family: .PingFangSC-Regular;
        font-size: 16px;
        color: #353535;
        line-height: 1.7rem;
    }
    .movie-module-bottom {
        padding-left: 0.9rem;
        font-family: .PingFangSC-Regular;
        font-size: 12px;
        color: #666666;
        line-height: 12px
    }
    .movie-module-img .video-js {
        width: 100%;
        height: 100%;
    }
    .movie-module-img .vjs-tech {
        position: relative!important;
    }
    .movie-module-img .video-js .vjs-big-play-button {
        height: 1.2em;
        line-height: 1.1em;
        width: 1.2em;
        position: absolute;
        top: 100%;
        left: 10%;
        margin-left: -0.9em;
        margin-top: -1.8em;
        border-radius: 1.2em;
    }

    .back-module-title {
        height: 1.2rem;
        line-height: 1.2rem;
        padding-left: 0.9rem;
        padding-right: 0.9rem;
        margin-bottom: 0.9rem;
        margin-top: 1rem;
    }
    .back-module-btn {
        display: block;
        float: left;
        width: 2.1rem;
        margin-right: 0.6rem;
        height: 1.2rem;
        text-align: center;
        line-height: 1.2rem;
        background: #30C7F2;
        border-radius: 1rem;
        font-size: 12px;
    }
    .back-module-txt {
        display: block;
        float: left;
        height: 1.2rem;
        line-height: 1.2rem;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
    }
    .back-module-bottom {
        padding-left: 0.9rem;
        font-family: .PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        line-height: 14px
    }
</style>