<template>
  <div class="typeform">
    {{ fields }}
    <template v-for="(field, idx) in fields" :key="field.id">
      <Field
        :field="field"
        :fieldid="idx"
        :showDelete="this.fields.length > 1"
        @change="onFieldChange"
        @deleteField="deleteClick"
      />
    </template>
    <button @click="addClick">Add</button>
  </div>
</template>

<script>
import Field from './Field.vue'

export default {
  name: 'TypeForm',
  props: {},
  components: {
    Field
  },
  data () {
    return {
      counter: 0,
      fields: [
        { id: 0, type: 'type', name: 'type' }
      ],
      formModel: {}
    }
  },
  methods: {
    addClick () {
      this.fields.push({ id: ++this.counter, type: 'type', name: 'type' })
    },
    onFieldChange (idx, val) {
      this.fields[idx].value = val
    },
    deleteClick (idx) {
      if (this.fields.length > 1) {
        this.fields.splice(idx, 1)
      }
      else {
        alert('Can\'t delete the last one')
      }
    }
  }
}
</script>

<style lang="scss">
.typeform {

}
</style>
