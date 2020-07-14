<template>
  <div id="app">
    <Fretboard tuning="e a d g" :plot="['c:2 d:3', 'e:1 f:2 g:4', 'a:1 b:3 c:4']" :length="24"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Fretboard: () => import('./components/Fretboard.vue')
  }
}
</script>

<style>
*, *:before, *:after {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

*, *::before, *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
