<template>
  <div id="id">
    <h1>Right Visualizer</h1>
    <Settings />
    <Visualizer />
  </div>

</template>

<script>
import Settings from "@/components/Settings";
import Visualizer from "@/components/Visualizer";

export default {
  name: 'App',
  components: {
    Settings,
    Visualizer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
