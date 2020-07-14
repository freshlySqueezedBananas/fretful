<template>
  <div class="meta">
    <h3 v-html="title"/>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Meta',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.meta {
  position: relative;
  margin: 10px 5px;
  padding: 15px;
  border: 1px solid $color-gray-lighter;
  border-radius: 3px;

  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 18px;
  }
}
</style>
