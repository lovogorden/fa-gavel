<template>
  <div ref="myDIV" class="logo">
    <Gavel class="hammer"/>
    <AnimatedText v-bind:style="styleObject" class="boks"></AnimatedText>

    <!-- <span class="boks" v-bind:style="styleObject">LOV &amp; ORDEN</span> -->

    <!-- <div ref="law" class="boks" v-bind:style="textStyleObject">LOV &amp; ORDEN</div>
    <br/>
    <br/>
    <div>styleObject.fontSize: {{styleObject.fontSize}}</div> -->
    <!-- <pre>{{JSON.stringify(this.$refs["law"].innerText, null, 2)}}</pre> -->
  </div>
</template>

<script>
 import Gavel from "../Gavel";
 import AnimatedText from "../AnimatedText";

export default {
  name: "Logo",
  data: function() {
    return {
      styleObject: {
        // color: 'red',
        fontSize: '13px',
        lineHeight: '13px',
        paddingLeft: '13px'
      },
      something: true,
      boxHeight: 60
      
    };
  },  
  watch: {
    styleObject: function (oldValue, newValue) {

      console.log("oldValue: " + oldValue);
      console.log("newValue: " + newValue);
      //this.styleObject.fontSize
    }
  },
  components: {
    Gavel,
    AnimatedText
  },
  mounted () {
    console.log("* mounted")
    let inheritHeigh = this.$refs["myDIV"].clientHeight;

    console.log("inheritHeigh: " + inheritHeigh)

    this.styleObject.fontSize = inheritHeigh + 'px'
    this.styleObject.lineHeight = inheritHeigh + 'px'
    this.styleObject.paddingLeft = inheritHeigh/4 + 'px'
  },
  computed: {
    textStyleObject: function () {

      console.log("* computed")

        return {
          fontSize: '23px',
          lineHeight: '23px',
          paddingLeft: '23px'
        }


      // let inheritHeigh = this.$refs["myDIV"].clientHeight;

      // console.log("inheritHeigh: " + inheritHeigh)

      // return {
      //   // color: 'red',
      //   fontSize: '13px',
      //   lineHeight: '13px',
      //   paddingLeft: '13px'
      // }

    },
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .logo {
    /* --size: 32px; */
    /* width: calc(var(--size) - 80px); */
    /* background-color: lime; */
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
  .logoTekst {
    height: inherit;
    width: inherit;
  }
  .boks {
    position: fixed;
    font-weight: bold;
    /* background-color:lightcoral ; */
    /* line-height: 14vh;
    font-size: 12vh; */
  }
  .logoText {
    position:relative;
    display:inline;
    font-size: 64px;
    line-height: 50px;
    /* padding-left: 10px; */
    font-weight: bold;
  }
</style>
