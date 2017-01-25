<template>
    <div class="tab">
        <div class="tab-item"><a v-link="{path: '/goods',activeClass:'active'}">商品</a></div>
        <div class="tab-item"><a v-link="{path: '/ratings',activeClass:'active'}">评价</a></div>
        <div class="tab-item"><a v-link="{path: '/seller',activeClass:'active'}">商家</a></div>
    </div>
</template>
<style >
    .tab {
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    
    .tab .tab-item {
        flex: 1;
        text-align: center;
    }
    .tab .tab-item a{
        display:block;
        text-decoration:none;
        line-height:28px;
        color:rgb(77,85,93);
        font-size:14px;
    }
    .active{
        color:rgb(240,20,20)!important;
    }
</style>
<script>
    export default {};
</script>
