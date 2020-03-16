<template>
  <div class="page">
    <h1>TestPage</h1>
  </div>
</template>

<script>
export default {
  name: "TestPage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  display: inline-block;
  height: 100%;
  width: 100%;
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
}
</style>
