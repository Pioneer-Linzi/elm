<template>
            <div class="tab border-1px">
                <div class="tab-item"><a  v-link="{path: '/goods',activeClass:'active'}">商品</a></div>
                <div class="tab-item"><a v-link="{path: '/ratings',activeClass:'active'}">评价</a></div>
                <div class="tab-item"><a v-link="{path: '/seller',activeClass:'active'}">商家</a></div>
            </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "./../../common/stylus/mixni.styl"
        .tab
            display:flex
            position:relative
            width: 100%
            height: 40px
            line-height: 40px
            vertical-align:middle
            .tab-item
                flex:1
                text-align:center
                a
                    display:block
                    text-decoration:none
                    line-height:48px
                    color:rgb(77,85,93)
                    font-size:14px
                .active
                    color:rgb(240,20,20)!important;
</style>
<script type="text-ecmascript-6">
	export default {};
</script>
