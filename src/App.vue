<template>
  <div id="app">
      <header></header>
      <tab></tab>
      <content></content>
  </div>
</template>

<script>
    import header from './components/header/Header';
    import tab from './components/tab/Tab';
    import content from './components/content/Content';
    export default {
        components: {
            header,
            tab,
            content
        }
    };
</script>
<style>
    html {
        height: 100%;
    }
    
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>