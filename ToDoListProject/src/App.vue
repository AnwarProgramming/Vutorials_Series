//logic : We use script to write the logical part
<script setup>
import {ref} from 'vue'

const tasks = ref(['Wake up', 'Brush'])
const newTask = ref('')

function addTask(){
  if (newTask.value !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}
// we need to use tasks.value.push instead of tasks.push because after adding 'ref' in the tasks it is no longer a list it is an object
</script>


// for HTML and visuals we use template
<template> 
  <h1>A Simple To-Do list App!</h1>
  <div>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask">
      <button type="submit">Add Task</button>
    </form>
  </div>
  <p>Your tasks are the following</p>
  <ul>
    <li v-for="task in tasks">{{ task }}</li>
  </ul>
  <!-- <p>Visit <a href="https://www.google.com/" target="_blank" rel="noopener">Google.com</a> to search the web</p> -->
</template>
// v-for directive is used with 'mustache interpolation' where text is dynamic
// v-for:Render the element or template block multiple times based on the source data.
// v-model used for two-way binding i.e it comes with syncing
// v-model:Create a two-way binding on a form input element or a component.
// v-on:Attach an event listener to the element.
//// @submit.prevent="addTask" this code is equivalent to v-on:submit.prevent="addTask"

//For CSS and design we use style
<!-- <style scoped></style> // CSS and design -->
