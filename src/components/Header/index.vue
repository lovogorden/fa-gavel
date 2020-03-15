
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.headerComponent {
  /* background-color: black !important; */
  height: inherit;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
}
.headerItem {
  background-color:lime;
}
.logo {
  display:flex;
  width: fit-content;
}
</style>

<template>
    <div class="headerComponent">

        <Logo class="logo"/>
        <span>Home</span>
        <span>Test</span>
    </div>
</template>

<script>
  import Logo from "../Logo"; // eslint-disable-line

  export default {
    name: "Header",
    components: {
      Logo, // eslint-disable-line
    },
  };
</script>

