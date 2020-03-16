
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.headerComponent {
  /* background-color: black !important; */
  height: inherit;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  flex-basis: ;
}
.headerItem {
  background-color:lime;
}
.logo {
  display:flex;
  width: fit-content;
}
nav {
  padding-left: 2em;
  display: flex;
  height: inherit;
  text-align: center;
  vertical-align: middle;
  align-items: center;
}
.linkItem {
  text-align: center;
  vertical-align: middle;
  padding: 0em 1em 0em 1em; 
  margin: 2px;
  height: 100%;
  line-height: 30px;
  background-color:rgb(64, 67, 64);
  color: white;
  text-decoration: none;
}
</style>

<template>
    <div class="headerComponent">

        <Logo class="logo"/>
        <nav>
          <router-link class="linkItem" to="/">Home</router-link>
          <router-link class="linkItem" to="/test">Test</router-link>
        </nav>
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

