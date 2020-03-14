<template>
  <!-- <span ref="lov"
  
  >LOV</span> -->
  <span ref="boks" class="boks">

    <span ref="doubleBlinkLOV" class="lov doubleBlinkLOV" v-bind:style="styleObject">LOV</span>

    <span ref="doubleBlinkOg" class="og doubleBlinkLOV" v-bind:style="styleObject">&amp;</span>

    <span ref="doubleBlinkOrden" class="doubleBlinkLOV" v-bind:style="styleObject">ORDEN</span>

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
  padding-left: 0px;
}

.og {
  animation:ogAnim 1.2s 0s;
}


@keyframes ogAnim{
    0%{    color: black; }
    5%{     color: white;    }
    10%{     color: black;    }
    20%{     color: white;    }

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
