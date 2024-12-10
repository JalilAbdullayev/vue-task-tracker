<script>
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";

export default {
  name: 'App',
  components: {Tasks, Header},
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    deleteTask(id) {
      if(confirm('Are you sure?')) {
        this.tasks = this.tasks.filter(task => task.id !== id);
      }
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'March 3rd at 1:30pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'March 3rd at 11:00am',
        reminder: false
      }
    ];
  },
}
</script>

<template>
  <div class="container">
    <Header title="Task Tracker"/>
    <Tasks :tasks="tasks" @delete-task="deleteTask"/>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>
