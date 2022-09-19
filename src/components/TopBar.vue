<template>
  <div class="topbar">
    <div>
      <label for="address">URL</label>
      <input id="address" type="text" v-model="address" @change="onChange">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {},
  data () {
    return {
      address: 'src/frame.html'
    }
  },
  methods: {
    onChange () {
      this.$emit('addressChange', this.address)
    }
  }
}
</script>

<style lang="scss">
.topbar {
  background-color: #666;
}
</style>
