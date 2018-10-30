<template>
  <div class="manage-row">
    <div class="item">{{manage.name}}</div>
    <div class="item">{{manage.id}}</div>
    <div class="hidden-item">{{manage.control}}</div>
    <div class="hidden-item">{{manage.modify}}</div>
    <div class="hidden-item">{{manage.strategy}}</div>
    <div class="hidden-item">{{manage.report}}</div>
    <div class="hidden-item">{{manage.manageAdd}}</div>
    <div class="hidden-item">{{manage.authorizer}}</div>
    <div class="item">{{manage.addTime}}</div>
    <div class="item">
      <a href="about:blank">编辑</a>
      <a href="about:blank">删除</a>
    </div>
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
</style>
