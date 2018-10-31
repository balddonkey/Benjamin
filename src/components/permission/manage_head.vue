<template>
  <div class="manage-head">
    <a class="manage-text">姓名</a>
    <a class="manage-text">密码</a>
    <a class="manage-text hidden">实时控制</a>
    <a class="manage-text hidden">分组修改</a>
    <a class="manage-text hidden">策略制定</a>
    <a class="manage-text hidden">报表查看</a>
    <a class="manage-text hidden">管理人员添加</a>
    <a class="manage-text hidden">授权人</a>
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

