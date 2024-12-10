<script>
import Task from "@/components/Task.vue";

export default {
  name: "Tasks",
  components: {Task},
  props: {
    tasks: Array
  },
  emits: ['delete-task']
}
</script>

<template>
  <div v-for="task in tasks" :key="task.id">
    <Task :task="task" @delete-task="$emit('delete-task', task.id)"/>
  </div>
</template>

<style scoped>

</style>