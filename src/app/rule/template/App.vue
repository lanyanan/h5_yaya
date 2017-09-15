<template>
    <section class="view"> 
        <Heads></Heads>
        <Container :containerArr = "containerArr"></Container>
    </section>
</template>


<script>
  'use strict';
  import common from '../../../common/common.css';
  import Head from '../template/Head.vue';
  import Container from '../template/Container.vue';

  export default {
    components: {
       'Heads':Head,
       'Container':Container,
    },
    data (){
        return {
             
        }
    },
    created () {
       
    },
    methods: {
       
        
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