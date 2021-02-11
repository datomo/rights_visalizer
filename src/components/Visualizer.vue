<template>
  <div class="visualizer">
    <h2>Permissions</h2>

    <div v-for="(perm, key) in folders" class="permission-wrapper">
      <p>{{ key }}</p>
      <Permissions :perms="perm"/>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import Permissions from "@/components/Permissions";

export default {
  name: "Visualizer",
  components: {Permissions},
  setup() {
    const store = useStore();
    const json = computed(() => store.getters.json);

    const perms = computed(() => {
      console.log("ho")
      if (json.value.hasOwnProperty("perms")) {
        return json.value["perms"]
      } else {
        return [];
      }
    })

    const folders = computed(() => {
      let res = {};
      for (let perm of perms.value) {
        const name = perm["FolderName"];
        const rights = {
          "group_user": perm["Group_User"],
          "permissions": perm["Permissions"],
          "inherited": perm["Inherited"]
        }

        if (!(name in res)) {
          res[name] = [rights]
        } else {
          res[name].push(rights)
        }
      }
      return res;
    })

    return {json, perms, folders}
  }
}
</script>

<style lang="scss" scoped>
.permission-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>