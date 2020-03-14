<template>
  <div class="root">
    <Logo class="logo"/>
  </div>
</template>

<script>
//import Gavel from '../Gavel';
import Logo from '../Logo';

export default {
  name: "Root",
  components: {
    // Gavel,
    Logo
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  height: 100%;
}
.logo {
  height: 32px;
}
div {
  background-color: black;
}
</style>
