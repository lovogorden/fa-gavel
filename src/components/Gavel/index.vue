<template>
    <svg viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg">
      
      <circle 
      v-bind:class="{ pulsingSirkel: isPulsing, 'text-danger': hasError }"
      class="sirkel" cx="1250" cy="1250" r="1250" />
      <path class="gavel" stroke-width="50" stroke-opacity="0.8" stroke="red" d="M2071 1836q0 53-37 90l-107 108q-39 37-91 37-53 0-90-37l-363-364q-38-36-38-90 0-53 43-96l-256-256-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13 10 11.5 10 13.5 6 13.5 5.5 16.5 1.5 18q0 38-28 68-3 3-16.5 18t-19 20.5-18.5 16.5-22 15.5-22 9-26 4.5q-40 0-68-28l-408-408q-28-28-28-68 0-13 4.5-26t9-22 15.5-22 16.5-18.5 20.5-19 18-16.5q30-28 68-28 10 0 18 1.5t16.5 5.5 13.5 6 13.5 10 11.5 10 13 12.5 12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12t-12.5-13-10-11.5-10-13.5-6-13.5-5.5-16.5-1.5-18q0-38 28-68 3-3 16.5-18t19-20.5 18.5-16.5 22-15.5 22-9 26-4.5q40 0 68 28l408 408q28 28 28 68 0 13-4.5 26t-9 22-15.5 22-16.5 18.5-20.5 19-18 16.5q-30 28-68 28-10 0-18-1.5t-16.5-5.5-13.5-6-13.5-10-11.5-10-13-12.5-12-12.5q14 14 14 34t-14 34l-126 126 256 256q43-43 96-43 52 0 91 37l363 363q37 39 37 91z"/>
      <circle class="" fill="transparent" stroke-width="50" cx="1250" cy="1250" r="1200" />
    </svg>

    <!-- Inline - org -->
    <!-- <svg width="300" height="300" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1771 1536q0 53-37 90l-107 108q-39 37-91 37-53 0-90-37l-363-364q-38-36-38-90 0-53 43-96l-256-256-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13 10 11.5 10 13.5 6 13.5 5.5 16.5 1.5 18q0 38-28 68-3 3-16.5 18t-19 20.5-18.5 16.5-22 15.5-22 9-26 4.5q-40 0-68-28l-408-408q-28-28-28-68 0-13 4.5-26t9-22 15.5-22 16.5-18.5 20.5-19 18-16.5q30-28 68-28 10 0 18 1.5t16.5 5.5 13.5 6 13.5 10 11.5 10 13 12.5 12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12t-12.5-13-10-11.5-10-13.5-6-13.5-5.5-16.5-1.5-18q0-38 28-68 3-3 16.5-18t19-20.5 18.5-16.5 22-15.5 22-9 26-4.5q40 0 68 28l408 408q28 28 28 68 0 13-4.5 26t-9 22-15.5 22-16.5 18.5-20.5 19-18 16.5q-30 28-68 28-10 0-18-1.5t-16.5-5.5-13.5-6-13.5-10-11.5-10-13-12.5-12-12.5q14 14 14 34t-14 34l-126 126 256 256q43-43 96-43 52 0 91 37l363 363q37 39 37 91z"/></svg> -->


    <!-- From file -->
    <!-- <img src="../../assets/gavel.svg"> -->

</template>

<script>

export default {
  name: "Gavel",
  props: {
    size: String,
    msg: String
  },
  data: function() {
    return {
      isPulsing: true,
      error: null,
      hasError: false
    };
},
  components: {
    //
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flickeringText {
  color:black;
  margin-bottom:2px;
  padding:5px;
}

.pulsingSirkel {
  animation:pulsingSirkelWhite 1.2s 0s;
}

@keyframes pulsingSirkelWhite{
    0%{    fill: transparent; }
    5%{     fill: white;    }
    10%{     fill: transparent;    }
    20%{     fill: white;    }
    25%{     fill: transparent;    }
    41%{     fill: white;    }
    42%{     fill: transparent;    }
    43%{     fill: white;    }
    44%{     fill: transparent;    }
    45%{     fill: white;    }
    75%{     fill: transparent;    }
    80%{     fill: white;    }
    100%{   fill: white;    }
}


.flickeringText {
  /* animation: blinkingText 0.02s 100 alternate; */
  animation:blinkingText 1.2s infinite;
}

.flickeringCirle {
  animation:fickeringCirleYellow 1.2s infinite;
}

@keyframes blinkingText{
    0%{     color: #000;    }
    49%{    color: #000; }
    60%{    color: transparent; }
    99%{    color:transparent;  }
    100%{   color: #000;    }
}

@keyframes blink {
  from { background-color: purple; }
  to { background-color: red; }
}

@keyframes fickeringCirleYellow{
    0%{     stroke: yellow;    }
    49%{    stroke: yellow; }
    60%{    stroke: transparent; }
    99%{    stroke: transparent;  }
    100%{   stroke: yellow;    }
}

svg {
  display:inline-block;
}
svg > path{
  fill: green;
}
svg > circle {
  /* fill: lime; */
}

.sirkel {
  fill: white;
}

.gavelWhite {
  fill: white;
  stroke: yellow;
}

.gavel {
  fill: black;
  stroke: transparent;
}

.glowCircle {
  fill: transparent;
  stroke: yellow;
}

</style>
