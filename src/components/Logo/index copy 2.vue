<template>
  <span ref="myDIV" class="logo">
    <Gavel class="gavel"/>
    <SomeText class="logoText"></SomeText>
  </span>
</template>

<script>
  import Gavel from "../Gavel"; // eslint-disable-line
  import SomeText from "../SomeText";

export default {
  name: "Logo",
  components: {
    Gavel, // eslint-disable-line
    SomeText
  },
  mounted () {
    console.log("* mounted")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .logo {
    position: fixed;
    height: inherit;
  }
  .gavel {
    display:inline-block;
    white-space: nowrap;
    height: inherit;
    width: inherit;
  }
  .logoText {
    position: fixed;
    height: inherit;
    width: inherit;
    display: none;
  }

</style>
