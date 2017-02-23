<template>
	<div class=header>
		<div class="content-wrapper">
			<div class="avatar">
				<img :src="seller.avatar" width="64" height="64" alt="" />
			</div>
			<div class="content">
				<div class="title">
					<span class="brand">
					</span>
					<span class="name">
						{{seller.name}}
					</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="support">
					<span class="icon"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
		</div>
		<div class="bulletin-wrapper">
		</div>
	</div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script type="text-ecmascript-6">
	export default {
		props: {
			seller: {
				type: Object
				}
		}
	};
</script>
