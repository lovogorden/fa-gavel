
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .gavel {
    display:block;
    white-space: nowrap;
    /* height: inherit;
    width: inherit; */
    height: inherit;
    width: auto;
  }
  .logoText {
    padding: 0em 0em 0em 5%;
    width: fit-content;
  }
  .logoContainer {
    display:inline-flex;
    height: 100%;
    width: 100%;
    display: flex;
  }
  .logoDiv {
    display:block;
    width: fit-content;
  }

</style>

<template>
  <div class="logoContainer">
      <Gavel class="gavel"/>
      <!-- outside
      <div id="child">inside</div> -->
      <div class="logoDiv">
        <LogoText class="logoText"></LogoText>
      </div>
  </div>

</template>

<script>
  import Gavel from "../Gavel"; // eslint-disable-line
  import LogoText from "../LogoText"; // eslint-disable-line

export default {
  name: "Logo",
  components: {
    Gavel, // eslint-disable-line
    LogoText // eslint-disable-line
  },
  mounted () {
    console.log("* mounted")
  }
};
</script>

