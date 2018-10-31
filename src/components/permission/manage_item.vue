<template>
  <tr class="manage-row">
    <td class="item">{{manage.name}}</td>
    <td class="item">{{manage.id}}</td>
    <td class="item hidden">{{manage.control}}</td>
    <td class="item hidden">{{manage.modify}}</td>
    <td class="item hidden">{{manage.strategy}}</td>
    <td class="item hidden">{{manage.report}}</td>
    <td class="item hidden">{{manage.manageAdd}}</td>
    <td class="item hidden">{{manage.authorizer}}</td>
    <td class="item">{{manage.addTime}}</td>
    <td class="item">
      <a href="about:blank">编辑</a>
      <a href="about:blank">删除</a>
    </td>
  </tr>
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
