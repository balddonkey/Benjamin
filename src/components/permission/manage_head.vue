<template>
  <div class="manage-head">
    <a class="manage-text">姓名</a>
    <a class="manage-text">密码</a>
    <a class="manage-text manage-cell-hidden">实时控制</a>
    <a class="manage-text manage-cell-hidden">分组修改</a>
    <a class="manage-text manage-cell-hidden">策略制定</a>
    <a class="manage-text manage-cell-hidden">报表查看</a>
    <a class="manage-text manage-cell-hidden">管理人员添加</a>
    <a class="manage-text manage-cell-hidden">授权人</a>
    <a class="manage-text">添加时间</a>
    <a class="manage-text">编辑</a>
  </div>
</template>

<script>
  export default {
    name: "manage_head",
    props: {
      data: Array
    }
  };
</script>

<style>
  @import "./manage_head.css";
  @import "./manage_table.css";
</style>

