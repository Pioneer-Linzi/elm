<template>
    <div class="tab">
        <div class="tab-item" v-link="{path: 'goods'}">商品</div>
        <div class="tab-item" v-link="{path: 'ratings'}">评价</div>
        <div class="tab-item" v-link="{path: 'seller'}">商家</div>
    </div>
</template>
<style scoped>
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
</style>
<script>
    export default {};
</script>
