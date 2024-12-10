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
    async deleteTask(id) {
      if(confirm('Are you sure?')) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE'
        });
        res.status === 200 ? this.tasks = this.tasks.filter(task => task.id !== id) : alert('Error deleting task');
      }
    },
    async toggleReminder(id) {
      const task = await this.fetchTask(id);
      const update = {...task, reminder: !task.reminder};
      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(update)
      });
      const data = await res.json();
      this.tasks = this.tasks.map(task => task.id === id ? {...task, reminder: !data.reminder} : task);
    },
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      });
      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async fetchTasks() {
      const res = await fetch('api/tasks');
      return res.json();
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      return res.json();
    }
  },
  async created() {
    this.tasks = await this.fetchTasks();
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
