<template>
    <section class = "container">
        <div class = "container-bg"></div>
        <p>魅力值根据明星受关注度、粉丝活跃度等综合指标计算，</p>
        <table cellspacing="0" id="table">
            <thead>
                <tr>
                    <th>行为</th>
                    <th>魅力值</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>签到</td>
                    <td>连续1-3天：每天5<br>连续4-7天：每天10<br>连续8天以上：每天20</td>
                </tr>
                <tr>
                    <td>补签</td>
                    <td>补签1次：获得5魅力值</td>
                </tr>
                <tr>
                    <td>关注明星</td>
                    <td>关注1次：获得50魅力值<br>重复关注不计算</td>
                </tr>
                <tr>
                    <td>访问粉圈</td>
                    <td>访问1次：获得3魅力值<br>每个用户及明星每天上限15魅力值</td>
                </tr>
                <tr>
                    <td>访问明星主页</td>
                    <td>访问1次：获得3魅力值<br>每个用户及明星每天上限15魅力值</td>
                </tr>
                <tr>
                    <td>回复明星动态</td>
                    <td>回复1次：获得5魅力值<br>1天内重复回复同一条动态只记1次<br>每个用户及明星每天上限100魅力值</td>
                </tr>
            </tbody>

        </table>
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
    .container {
        padding: 0 0.9rem;
        margin-top: 0.7rem;
        margin-bottom: 3.9rem;
        background: #fff;
    }
    .container-bg {
        width: 100%;
        height: 2.5rem;
        background: url('../assets/pic-title-introduce.png') no-repeat center top;
        background-size: 8.5rem 1.6rem;
    }
    .container p{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
    }
    .container table{
        width: 100%;
        margin-top: 1rem;
        font-size: .75rem;
        line-height: 1.5;
        color: #333;
        text-align: center;
    }
    .container table th:last-child, .container table td:last-child {
         border-right: 1px solid #E73850;
    }
    .container table th {
        background: #FFDADF;
    }
    .container table th, .container table td {
        padding: 8px;
        border-top: 1px solid #E73850;
        border-left: 1px solid #E73850;
    }
    .container table th, .container table td {
        padding: 8px;
        border-top: 1px solid #E73850;
        border-left: 1px solid #E73850;
    }
    .container table tr:last-child td {
        border-bottom: 1px solid #E73850;
    }
    
</style>