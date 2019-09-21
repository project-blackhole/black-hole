<template>
  <button @click="fetchPhases">Fetch Phases</button>
</template>

<script>
export default {
  name: "Lunar",
  data() {
    return {
      month: "9",
      day: "21",
      year: "2019"
    };
  },
  methods: {
    fetchPhases: async (month, day, year) => {
      const api = `https://api.usno.navy.mil/moon/phase?date=${month}/${day}/${year}&nump=4`;
      const response = await fetch(api);
      const myJson = await response.json();
    }
  }
};
</script>

<style>
</style>