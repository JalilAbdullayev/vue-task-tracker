<script>
import Task from "@/components/Task.vue";

export default {
  name: "Tasks",
  components: {Task},
  props: {
    tasks: Array
  }
}
</script>

<template>
  <div v-for="task in tasks" :key="task.id">
    <Task :task="task"/>
  </div>
</template>

<style scoped>

</style>