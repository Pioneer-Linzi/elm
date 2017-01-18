<template>
  <div id="app">
      <ele-header></ele-header>
      <tab></tab>
     <router-view></router-view>
  </div>
</template>

<script>
    import header from './components/header/Header';
    import tab from './components/tab/Tab';
    import content from './components/content/Content';
    export default {
        components: {
            'ele-header': header,
            tab,
            content
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
