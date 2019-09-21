<template>
  <div id="app">
        <Lunar />

    <CrimeSelect />
    <Slider />
    <Map />
  </div>
</template>
<script>
import Map from "./components/Map";
import Slider from "./components/Slider";
import CrimeSelect from "./components/CrimeSelect";
import Lunar from "./components/Lunar";

export default {
  name: "App",
  components: {
    Map,
    Slider,
    CrimeSelect,
    Lunar
  },
  data: () => ({
    moonphases: {}
    //
  })
};
</script>
