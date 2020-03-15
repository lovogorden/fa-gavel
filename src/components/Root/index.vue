<template>
  <div class="root">

    <div class="header">
      <Logo class="logo"/>
    <!-- <SomeText class="header"></SomeText> -->
    </div>

  </div>
</template>

<script>
//import Gavel from '../Gavel';
import Logo from '../Logo';
//import SomeText from '../SomeText';
export default {
  name: "Root",
  components: {
    // Gavel,
    Logo
    //SomeText
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.root {
  background-color: red;
  height: 164px;
  width:100%;
}
.header {
  height: 64px;
}
.logo {
  background-color: blue;
  
}
</style>
