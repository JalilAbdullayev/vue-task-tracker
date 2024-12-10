<script>
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";
import AddTask from "@/components/AddTask.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {Footer, AddTask, Tasks, Header},
  data() {
    return {
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
}
</script>

<template>
  <div class="container">
    <Header title="Task Tracker" @toggle-add-task="toggleAddTask" :showAddTask="showAddTask"/>
    <router-view :showAddTask="showAddTask"/>
    <Footer/>
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
