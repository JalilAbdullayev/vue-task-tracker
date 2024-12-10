<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: '',
      day: '',
      reminder: false
    }
  },
  methods: {
    onSubmit() {
      if(!this.text) {
        alert('Please add a task')
        return;
      }
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }
      this.text = '';
      this.day = '';
      this.reminder = false;
      this.$emit('add-task', newTask);
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">
        Task
      </label>
      <input type="text" v-model="text" id="text" placeholder="Add Task"/>
    </div>
    <div class="form-control">
      <label for="day">
        Day & Time
      </label>
      <input type="text" v-model="day" id="day" placeholder="Add Day & Time"/>
    </div>
    <div class="form-control-check">
      <label for="reminder">
        Set Reminder
      </label>
      <input type="checkbox" v-model="reminder" id="reminder"/>
    </div>
    <input type="submit" value="Save Task"/>
  </form>
</template>

<style scoped>
form {
  margin-bottom: 40px;
}

input[type="submit"] {
  display: block;
  width: 100%;
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }
}

.form-control {
  margin: 20px 0;

  label {
    display: block;
  }
}

input:not([type="checkbox"]) {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    flex: 1;
  }
}

input[type="checkbox"] {
  flex: 2;
  height: 20px;
}
</style>