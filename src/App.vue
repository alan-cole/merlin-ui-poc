<template>
  <div class="app">
    <TopBar class="app__topbar" @addressChange="onAddressChange" />
    <div class="app__frame">
      <iframe class="app__iframe" :src="iframesrc" frameborder="0"></iframe>
    </div>
    <SideBar class="app__sidebar">
      <TypeForm />
    </SideBar>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import SideBar from './components/SideBar.vue'
import TypeForm from './components/TypeForm.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    SideBar,
    TypeForm
  },
  data () {
    return {
      iframesrc: 'src/frame.html'
    }
  },
  methods: {
    onAddressChange (value) {
      this.iframesrc = value
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #222;
  color: white;
  margin: 0;
}

.app {
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto;
  grid-template-areas: "header header" "main sidebar";

  &__topbar {
    display: inline-grid;
    outline: 1px solid red;
    height: 60px;
    grid-area: header;
  }

  &__frame {
    display: inline-grid;
    grid-area: main;
    outline: 1px solid red;
  }

  &__iframe {
    background-color: #444;
    width: 100%;
    height: 50vh
  }

  &__sidebar {
    display: inline-grid;
    grid-area: sidebar;
    outline: 1px solid red;
  }
}
</style>
