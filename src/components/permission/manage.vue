<template>
  <div id='permission'>
    <table class='table' v-if="data.manages.length">
      <tHeader :data="data.titles" />
      <tFooter />
      <tbody class="row-group">
        <tItem 
          v-for="(manage, index) in data.manages" 
          :key="index" 
          :manage="manage"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import tItem from "./manage_item.vue";
import tHeader from "./manage_head.vue";
import tFooter from "./manage_foot.vue";
export default {
  name: "manage",
  props: {
    data: Object
  },
  components: {
    tItem,
    tHeader,
    tFooter
  }
};
</script>

<style>
@import "./manage.css";
</style>
