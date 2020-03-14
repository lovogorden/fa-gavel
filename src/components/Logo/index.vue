<template>
  <div ref="myDIV" class="logo">
    <Gavel class="hammer"/>
    <span class="boks" v-bind:style="styleObject">LOV &amp; ORDEN</span>
  </div>
</template>

<script>
 import Gavel from "../Gavel";

export default {
  name: "Logo",
  data: function() {
    return {
      styleObject: {
        color: 'red',
        fontSize: '13px',
        lineHeight: '13px'
      },
      something: true,
      boxHeight: 60
      
    };
},
  components: {
    Gavel
  },
  mounted () {
    console.log("* mounted")
    let inheritHeigh = this.$refs["myDIV"].clientHeight;

    console.log("inheritHeigh: " + inheritHeigh)

    this.styleObject.fontSize = inheritHeigh + 'px'
    this.styleObject.lineHeight = inheritHeigh + 'px'
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    /* --size: 32px; */
    /* width: calc(var(--size) - 80px); */
    background-color: lime;
    position: fixed;
    top: 10px; 
    left: 16px;
    height: inherit;
  }
  .hammer {
    white-space: nowrap;
    height: inherit;
    width: inherit;
  }
  .boks {
    position: fixed;
    background-color:lightcoral ;
    /* line-height: 14vh;
    font-size: 12vh; */
  }
  .logoText {
    position:relative;
    display:inline;
    font-size: 64px;
    line-height: 50px;
    padding-left: 10px;
    font-weight: bold;
  }
</style>
