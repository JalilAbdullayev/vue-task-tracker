<script>
export default {
  name: "Task",
  props: {
    task: Object
  },
}
</script>

<template>
  <div :class="[task.reminder ? 'reminder' : '', 'task']" @dblclick="$emit('toggle-reminder', task.id)">
    <h3>
      {{ task.text }}
      <i class="fa-solid fa-xmark" @click="$emit('delete-task', task.id)"></i>
    </h3>
    <p>
      {{ task.day }}
    </p>
  </div>
</template>

<style scoped>
.task {
  background-color: #F4F4F4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &.reminder {
    border-left: 5px solid green;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .fa-xmark {
      color: red;
    }
  }
}
</style>