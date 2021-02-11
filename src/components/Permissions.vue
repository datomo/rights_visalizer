<template>
  <div class="permissions">
    <p>{{users}}</p>
  </div>
</template>

<script>
import {ref, computed} from "vue";

export default {
  name: "Permissions",
  props: ["perms"],
  setup(props) {
    const input = ref(props.perms)

    const users = computed(() => {
      let res = []
      for(let el of props.perms){
        res.push(el["group_user"])
      }
      return res
    })

    return {input, users}
  }
}
</script>

<style scoped>

</style>