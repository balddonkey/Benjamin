<template>
  <div id='permission'>
    <ul v-if="data.manages.length">
      <item 
        v-for="manage in data.manages" 
        :key="manage.id" 
        :manage="manage"
       />
    </ul>
  </div>
</template>
<script>
import item from "./manage_item.vue";
export default {
  name: "manage",
  props: {
    data: Object
  },
  components: {
    item
  }
};
</script>

<style>
@import "./manage.css";
</style>
