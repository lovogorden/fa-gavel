<template>
  <div class="">
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
.logo {
  height: 64px;
}
</style>
