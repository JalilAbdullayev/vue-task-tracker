<script>
import AddTask from "@/components/AddTask.vue";
import Tasks from "@/components/Tasks.vue";

export default {
  name: "Home",
  components: {Tasks, AddTask},
  props: {
    showAddTask: Boolean
  },
  data() {
    return {
      tasks: []
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
    async fetchTasks() {
      const res = await fetch('api/tasks');
      return res.json();
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      return res.json();
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
}
</script>

<template>
  <AddTask @add-task="addTask" v-show="showAddTask"/>
  <Tasks :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder"/>
</template>

<style scoped>

</style>