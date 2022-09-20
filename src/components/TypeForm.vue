<template>
  <div class="typeform">
    <!-- {{ fields }} -->
    <template v-for="(field, idx) in fields" :key="field.id">
      <Field
        :field="field"
        :fieldId="idx"
        :showDelete="true"
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
      // TODO - Fields should be parsable to create the YML config.
      // https://www.npmjs.com/package/yaml
      // The current model should be improved to allow that.
      fields: [
        { id: 0, type: 'type', name: 'type' }
      ]
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
      this.fields.splice(idx, 1)
    }
  }
}
</script>

<style lang="scss">
.typeform {

}
</style>
