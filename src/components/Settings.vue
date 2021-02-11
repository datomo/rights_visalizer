<template>
  <div class="settings">
    <p @click="show = !show">Settings</p>
    <div v-show="show" class="controls">
      <JsonLoader/>
    </div>
    <div class="filter">
      <p>Filter:</p>
      <input type="text">
    </div>

  </div>
</template>

<script>
import { ref } from "vue";
import JsonLoader from "@/components/JsonLoader";

export default {
  name: "Settings",
  components: {JsonLoader},
  setup() {
    const show = ref(true);

    return {show}
  }
}
</script>

<style lang="scss" scoped>
 input {
   margin: 1rem;
 }

 .filter {
   display: flex;
   justify-content: center;
 }
</style>