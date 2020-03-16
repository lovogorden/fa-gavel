<template>
  <div class="page">
    <h1>HomePage</h1>
    <Logo class="logo"/>
  </div>
</template>

<script>
import Logo from '../Logo';

export default {
  name: "HomePage",
  props: {
    msg: String
  },
  components: {
    Logo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  display: inline-block;
  height: 100%;
  width: 100%;
  /* https://cssgradient.io/  */
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
}
.logo {
  height: 64px;
}
</style>
