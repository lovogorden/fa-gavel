<template>
  <div id="app">
    <Root>
      
    </Root>
  </div>
</template>

<script>
import Root from './components/Root'

export default {
  name: 'App',
  components: {
    Root
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');


#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: white;
  height: 100%;
  /* margin-top: 60px; */
}

html, body, #app, section.section {
  height: 100%;
  margin: 0px;
}


</style>
