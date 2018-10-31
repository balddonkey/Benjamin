<template>
  <div class='manage-table'>
    <tHeader :data="data.titles" />
    <div class="manage-list-box">
  
      <div class="manage-list">
        <tItem v-for="(manage, index) in data.manages" :key="index" :manage="manage" />
      </div>
    </div>
    <tFooter />
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
  @import "./manage_table.css";
</style>
