<template>
  <div>
    <button @click="fetchPhases">Fetch Phases</button>
    <div>{{status}}</div>
    <div>{{JSON.stringify(phases)}}</div>
  </div>
</template>

<script>
export default {
  name: "Lunar",
  data() {
    return {
      month: "9",
      day: "21",
      year: "2019",
      phases: [],
      status: "loading lunar data"
    };
  },
  mounted(){
    this.fetchPhases()
  },
  methods: {
    fetchPhases: async function() {
      const api = `https://api.usno.navy.mil/moon/phase?date=${this.month}/${this.day}/${this.year}&nump=4`;
      const response = await fetch(api);
      this.status = "loaded data";
      const phases = await response.json()
      this.phases = phases.phasedata
    }
  }
};
</script>

<style>
</style>