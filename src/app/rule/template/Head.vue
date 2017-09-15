<template>
    <section class = "head">
        <div class = "head-bg"></div>
       <p>明星魅力榜聚合各大平台榜单真实数据按明星魅力值排行，代表明星当前的人气和热度，也反映了明星粉丝群体的规模和活跃度。</p>
       <p>明星魅力榜以天和月为单位，根据魅力值的增加而实时变化，反映当天、或当月内明星人气、粉丝活跃度的变化趋势。</p>
       <p>上榜明星的魅力值及在榜单上的位置每小时进行更新，日榜以每天10点更新显示为当天榜单变化，月榜以每个月的5号更新显示为当月榜单变化。</p> 
    </section>
</template>


<script>
    'use strict';

  export default {
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
   .head {
        width: 100%;
        background: #fff;
        margin-top:0.7rem;
        padding-bottom: 1.4rem;
       
   }
   .head-bg {
        width: 100%;
        height: 2.5rem;
        background: url('../assets/pic-title-introduce.png') no-repeat center top;
        background-size: 8.5rem 1.6rem;
   }
   .head p{
        padding: 0 0.9rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
   }
   
</style>