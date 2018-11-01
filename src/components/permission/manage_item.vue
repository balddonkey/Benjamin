<template>
  <div class="manage-row">
    <a class="manage-text">{{manage.name}}</a>
    <a class="manage-text">{{manage.id}}</a>
    <a class="manage-text manage-cell-hidden">{{manage.control}}</a>
    <a class="manage-text manage-cell-hidden">{{manage.modify}}</a>
    <a class="manage-text manage-cell-hidden">{{manage.strategy}}</a>
    <a class="manage-text manage-cell-hidden">{{manage.report}}</a>
    <a class="manage-text manage-cell-hidden">{{manage.manageAdd}}</a>
    <a class="manage-text manage-cell-hidden">{{manage.authorizer}}</a>
    <a class="manage-text" >{{manage.addTime}}</a>
    <a class="manage-text" >
      <a href="about:blank">编辑</a>
      <a href="about:blank">删除</a>
    </a>
  </div>
</template>

<script>
export default {
  name: "manage_item",
  props: {
    manage: Object
  }
};
</script>

<style>
@import "./manage_item.css";
@import "./manage_table.css";
</style>
