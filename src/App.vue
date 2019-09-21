
<template>
  <Map />
</template>
<script>
import Map from "./components/Map";
import Lunar from "./components/Lunar"

export default {
  name: "App",
  components: {
    Map
  },
  data: () => ({
    moonphases: {}
    //
  })
};
</script>
