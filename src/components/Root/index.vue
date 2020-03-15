<template>
  <div class="root">

    <Header class="header"/>

    <Router/>

  </div>
</template>

<script>
import Router from '../Router'; // eslint-disable-line
import Header from '../Header'; // eslint-disable-line

export default {
  name: "Root",
  components: {
    Router, // eslint-disable-line
    Header // eslint-disable-line
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.root {
  background-color: red;
  height: 100%;
  width:100%;
}
.header {
  height: 32px;
  background-color: black;
  padding: 9px;
}
</style>
