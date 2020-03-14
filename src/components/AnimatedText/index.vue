<template>
  <!-- <span ref="lov"
  
  >LOV</span> -->
  <span ref="boks" class="boks">

    <span ref="doubleBlinkLOV" class="lov lovAnim" v-bind:style="styleObject">LOV</span>

    <span ref="doubleBlinkOg" class="og ordenAnim" v-bind:style="styleObject">&amp;</span>

    <span ref="doubleBlinkOrden" class="orden ordenAnim" v-bind:style="styleObject">ORDEN</span>

  </span>

</template>

<script>

export default {
  name: "AnimatedText",
  props: {
    msg: String
  },
  data: function() {
    return {
      // styleObject: {
      //   // color: 'red',
      //   fontSize: '13px',
      //   lineHeight: '13px',
      //   paddingLeft: '13px'
      // },
      something: true,
      boxHeight: 60
      
    };
  }, 
  components: {
    //
  },
  mounted () {
    console.log("* AnimatedText: mounted")
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lov {
  animation:lovAnim 1.2s 0s;
  padding-left: 0px;
}

.og {
  animation:ogAnim 1.2s 0s;
  padding-left: inherit;
}

.orden {
  animation:ordenAnim 1.2s 0s;
  padding-left: inherit;
}


@keyframes lovAnim{
    0%{    color: black; }
    5%{     color: white;    }
    20%{     color: black;    }
    40%{     color: white;    }
}

@keyframes ogAnim{
    0%{    color: black; }
    45%{     color: white;    }
    40%{     color: black;    }
    60%{     color: white;    }
}

@keyframes ordenAnim{
    0%{    color: black; }
    85%{     color: white;    }
    80%{     color: black;    }
    100%{     color: white;    }
}

.doubleBlinkLOV {
  animation:pulsingSirkelWhite 1.2s 0s;
}

@keyframes pulsingSirkelWhite{
    0%{    color: black; }
    5%{     color: white;    }
    10%{     color: black;    }
    20%{     color: white;    }
    25%{     color: black;    }
    41%{     color: white;    }
    42%{     color: black;    }
    43%{     color: white;    }
    44%{     color: black;    }
    45%{     color: white;    }
    80%{     color: white;    }
    100%{   color: white;    }
}


</style>
