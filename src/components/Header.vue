<script>
import Button from "@/components/Button.vue";

export default {
  name: "Header",
  components: {Button},
  props: {
    title: String,
    showAddTask: Boolean
  },
}
</script>

<template>
  <header>
    <h1>
      {{ title }}
    </h1>
    <Button :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'gray' : 'green'"
            @btn-click="$emit('toggle-add-task')"/>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>