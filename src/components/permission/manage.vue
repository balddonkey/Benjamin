<template>
  <div id='permission'>
    <div class='table' v-if="data.manages.length">
      <tHeader :data="data.titles" />
      <div style="display: table-row-group">
        <tItem 
          v-for="(manage, index) in data.manages" 
          :key="index" 
          :manage="manage"
        />
       </div>
      <tFooter />
    </div>
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
