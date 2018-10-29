<template>
  <li class="manage-item">
    <th>{{manage.name}}</th>
  </li>
</template>

<script>
export default {
  name: 'manage_item',
  props: {
    manage: Object
  }
}
</script>

<style>
@import './manage_item.css';
</style>
