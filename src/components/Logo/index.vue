<template>
  <div class="logo">
    <Gavel class="hammer" size=20
    v-bind:class="{ 'width': logoHeight, 'height': logoHeight}"
     />
    <span class="logoText">LOV &amp; ORDEN</span>
  </div>
</template>

<script>
 import Gavel from "../Gavel";

export default {
  name: "Logo",
  props: {
    msg: String,
    logoHeight: String
  },
  data: function() {
    return {
      something: true
    };
},
  components: {
    Gavel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    position: fixed;
    top: 10px; 
    left: 16px;
    height: 32px;
    width: 32px;
  }
  .hammer {
    white-space: nowrap;
  }
  .logoText {
    position: fixed;
    font-size: 32px;
    line-height: 32px;
    padding-left: 10px;
    font-weight: bold;
  }
</style>
