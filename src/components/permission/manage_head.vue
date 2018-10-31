<template>
  <div class="manage-head">
    <div class="item">姓名</div>
    <div class="item">密码</div>
    <div class="item hidden">实时控制</div>
    <div class="item hidden">分组修改</div>
    <div class="item hidden">策略制定</div>
    <div class="item hidden">报表查看</div>
    <div class="item hidden">管理人员添加</div>
    <div class="item hidden">授权人</div>
    <div class="item">添加时间</div>
    <div class="item">编辑</div>
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
</style>

