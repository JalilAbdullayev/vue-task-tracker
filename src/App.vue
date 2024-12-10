<script>
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";
import AddTask from "@/components/AddTask.vue";

export default {
  name: 'App',
  components: {AddTask, Tasks, Header},
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    deleteTask(id) {
      if(confirm('Are you sure?')) {
        this.tasks = this.tasks.filter(task => task.id !== id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task);
    },
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
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
    <Header title="Task Tracker" @toggle-add-task="toggleAddTask" :showAddTask="showAddTask"/>
    <AddTask @add-task="addTask" v-show="showAddTask"/>
    <Tasks :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder"/>
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
