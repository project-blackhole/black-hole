<template>
  <div id="app">
    <CrimeSelect />
    <Slider />
    <Map />
  </div>
</template>
<script>
import Map from "./components/Map";
import Slider from "./components/Slider";
import CrimeSelect from "./components/CrimeSelect";

export default {
  name: "App",
  components: {
    Map,
    Slider,
    CrimeSelect
  },
  data: () => ({
    // moonphases: [];
    //
  })
};
</script>
