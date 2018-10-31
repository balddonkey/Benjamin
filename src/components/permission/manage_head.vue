<template>
  <thead class="manage-head">
    <tr>
    <td class="item">姓名</td>
    <td class="item">密码</td>
    <td class="item hidden">实时控制</td>
    <td class="item hidden">分组修改</td>
    <td class="item hidden">策略制定</td>
    <td class="item hidden">报表查看</td>
    <td class="item hidden">管理人员添加</td>
    <td class="item hidden">授权人</td>
    <td class="item">添加时间</td>
    <td class="item">编辑</td>
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
@import "./manage_table.css";
</style>

