<template>
  <div class="sidebar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    props: {},
    data () {
      return {
        address: ''
      }
    }
  }
</script>

<style lang="scss">
.sidebar {
  padding: 12px;
  overflow-y: hidden;
}
</style>
