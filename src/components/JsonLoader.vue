<template>
  <div class="json-loader">
    <input type="file" @change="loadFile">
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "JsonLoader",
  setup(props, {emit}) {
    const store = useStore()

    const loadFile = (ev) => {
      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = e => store.dispatch("setJson", JSON.parse(e.target.result));
      reader.readAsText(file);
    }

    return {loadFile}
  }
}
</script>

<style scoped>

</style>