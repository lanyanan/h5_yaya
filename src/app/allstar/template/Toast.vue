<template>
    <section class="_toast" v-bind:style="{display: show ? 'block' : 'none'}"> 
        <span>{{txt}}</span>
    </section>
</template>


<script>
  'use strict';
  export default {
    props:["title","showToast"],
    data (){
        return {
            txt:'',
            show: false
        }
    },
    created () {
        
    },
    methods: {

    },
    watch: {
        title:function(){
            console.log(this.title)
            this.txt = this.title;
        },
        showToast:function() {
            console.log(this.showToast)
            this.show = this.showToast;
        }
    }
  }
</script>


<style>
._toast {
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -45%;
    color: #fff;
    padding: 0 5%;
    width: 90%;
    text-align: center;
}
._toast span {
    padding: 0.5rem 1rem;
    color:#fff;
    background: #000;
    border-radius: 5px;
}
</style>