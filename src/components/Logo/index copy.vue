<template>
  <div ref="myDIV" class="logo">
    <Gavel class="hammer"/>
    <span>span</span>
    <SomeText class="someText"></SomeText>
  </div>
</template>

<script>
 import Gavel from "../Gavel"; // eslint-disable-line
 //import AnimatedText from "../AnimatedText";
  import SomeText from "../SomeText";

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
    Gavel, // eslint-disable-line
    //AnimatedText
    SomeText
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

    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .logo {
    position: fixed;
    height: inherit;
  }
  .someText {
    height: inherit;
  }
  .hammer {
    display:inline-block;

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
    height: 100%;
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
