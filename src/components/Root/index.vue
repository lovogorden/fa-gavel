<template>
  <div class="root">

    <div class="header">
      <Logo class="logo"/>
      <!-- <SomeText class="header"></SomeText> -->
    </div>

    <div class="demoWrapper">
      <div class="demoDiv"></div>
    </div>

  </div>
</template>

<script>
//import Gavel from '../Gavel';
import Logo from '../Logo'; // eslint-disable-line
import Logo2 from '../Logo2'; // eslint-disable-line

//import SomeText from '../SomeText';
export default {
  name: "Root",
  components: {
    // Gavel,
    Logo, // eslint-disable-line
    Logo2 // eslint-disable-line
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
  background-color: black;
  padding: 9px;
}
.logo {
  
}

/* .demoDiv {
  width: 100%;
  padding-bottom: 75%;
  background: gold; 
}

.demoWrapper {
  padding: 10px;
  background: white;
  box-sizing: border-box;
  resize: horizontal;
  border: 1px dashed;
  overflow: auto;
  max-width: 100%;
  height: calc(100vh - 16px);
} */


/* .container {
background-color: green;
position: relative;
width: 100%;
padding-top: 56.25%;
.text {
position:  absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
text-align: center;
font-size: 25px;
color: black;
} */
</style>
