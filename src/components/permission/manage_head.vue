<template>
  <thead class="manage-head">
    <tr>
    <th class="item">姓名</th>
    <th class="item">密码</th>
    <th class="hidden-item">实时控制</th>
    <th class="hidden-item">分组修改</th>
    <th class="hidden-item">策略制定</th>
    <th class="hidden-item">报表查看</th>
    <th class="hidden-item">管理人员添加</th>
    <th class="hidden-item">授权人</th>
    <th class="item">添加时间</th>
    <th class="item">编辑</th>
    </tr>
  </thead>
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

