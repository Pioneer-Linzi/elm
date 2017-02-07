<template>
	<div id="app">
		<ele-header :seller="seller"></ele-header>
		<tab></tab>
		<router-view></router-view>
	</div>
</template>

<script>
import header from './components/header/Header';
import tab from './components/tab/Tab';
import content from './components/content/Content';
export default {
	data () {
		return {
			seller: {}
		};
	},
	components: {
		'ele-header': header,
		tab,
		content
	},
	created () {
		this.$http.get('/api/seller').then((response) => {
			response = response.body;
			if (response.error === 0) {
				console.log('response.error');
			} else {
				this.seller = response.data;
			}
		});
	}
};
</script>
<style>
	html {
		height: 100%;
	}

	#app {
		width: 100%;
		height: 100%;
	}
</style>
