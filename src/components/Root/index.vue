<template>
  <div class="root">
    <Logo logoHeight="80px"/>
  </div>
</template>

<script>
//import Gavel from '../Gavel';
import Logo from '../Logo';

export default {
  name: "Root",
  props: {
    msg: String
  },
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
div {
  background-color: black;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
