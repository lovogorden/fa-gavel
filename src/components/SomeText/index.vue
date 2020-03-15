<template>
  <!-- <svg id="chart">
    <g layout-css="height: 30; justifyContent: center; flexDirection: row">
      <text y="60" layout-css="width: 0;" font-size="60">
        LOV &amp; ORDEN</text>
    </g>
  </svg> -->

<svg
    xmlns="http://www.w3.org/2000/svg">
    <g>
        <text y="50%" lengthAdjust="spacingAndGlyphs">LOV &amp; ORDEN</text>
    </g>
</svg>

</template>

<script>

export default {
  name: "SomeText",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  svg {
    /* display: inline; */
    background-color:lime;
  }
</style>
