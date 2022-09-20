import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

// iframe connector
window.merlinPassRequest = function (data) {
  alert(`${data.text}\n---\n${data.xpath}`)
} 