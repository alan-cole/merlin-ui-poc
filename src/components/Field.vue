<template>
  <div class="field" v-if="field.type === 'text'">
    <label>
      <span>{{ field.name }}</span>
      <input type="text" v-model="value" />
    </label>
  </div>
  <div class="field" v-if="field.type === 'path'">
    <label>
      <span>{{ field.name }}</span>
      <input type="text" v-model="value" />
      <button @click="pathSelectClick">Select Element</button>
    </label>
  </div>
  <div class="field" v-if="field.type === 'array'">
    <label>
      <span>{{ field.name }}</span>
    </label>
    <template v-for="(afield, aidx) in field.options" :key="aidx">
      <Field :field="afield" :fieldId="aidx" @change="onFieldChange" />
    </template>
  </div>
  <div class="field" v-if="field.type === 'select'">
    <label>
      <span>{{ field.name }}</span>
      <select v-model="value">
        <option v-for="(opt, idx) in field.options" :value="opt.value">{{ opt.label }}</option>
      </select>
    </label>
  </div>
  <div class="field" v-if="field.type === 'type'">
    <button v-if="showDelete" @click="deleteClick">Delete</button>
    <label>
      <span>{{ field.name }}</span>
      <select id="type" v-model="type" @change="typeChange">
        <option v-for="opt in types" :value="opt.value">{{ opt.label }}</option>
      </select>
    </label>
    <!-- TODO - This may need to support add / delete, the same as Typeform.vue -->
    <template v-for="(sfield, sidx) in subFields" :key="sidx">
      <Field :field="sfield" :fieldId="sidx" @change="onFieldChange" />
    </template>
    <!-- Processors -->
    <!-- Move processors it's own vue components. Use a similar system to types -->
    <label class="processor-checkbox">
      <input type="checkbox" />
      <span>Whitepsace</span>
    </label>
    <label class="processor-checkbox">
      <input type="checkbox" />
      <span>Strip Tags</span>
    </label>
    <label class="processor-checkbox">
      <input type="checkbox" />
      <span>Replace</span>
    </label>
    <label class="processor-checkbox">
      <input type="checkbox" />
      <span>HTML Entity Decode</span>
    </label>
    <label class="processor-checkbox">
      <input type="checkbox" />
      <span>Remove Elements</span>
    </label>
  </div>
</template>

<script>
import fieldTypes from '../libs/types.js'

export default {
  name: 'Field',
  props: {
    field: Object,
    // TODO - Field ID should be improved to be unique throughout the whole form.
    fieldId: String,
    showDelete: Boolean
  },
  emits: [
    'deleteField',
    'change',
  ],
  data () {
    return {
      value: '',
      type: '',
      types: [
        { value: 'text', label: 'Text' },
        { value: 'alias', label: 'Alias' },
        { value: 'media', label: 'Media' },
        { value: 'paragraph', label: 'Paragraph' }
      ],
      counter: 0,
      subFields: []
    }
  },
  watch: {
    value (val) {
      this.$emit('change', this.fieldId, val)
    }
  },
  methods: {
    deleteClick () {
      this.$emit('deleteField', this.fieldId)
    },
    typeChange () {
      const fields = fieldTypes[this.type]
      fields.forEach(field => field.id = ++this.counter)
      this.subFields = fields
    },
    onFieldChange (idx, val) {
      if (this.field.type === 'type') {
        this.subFields[idx].value = val
        this.value = this.subFields
      }
      else if (this.field.type === 'array') {
        this.field.options[idx].value = val
        this.value = this.field.options
      }
      this.$emit('change', this.fieldId, this.value)
    },
    pathSelectClick () {
      alert('This should enable selecting an item in the iframe to populate value.')
      // TODO - Consider using a store, or a singleton?
      this.value = new Date().toISOString()
    }
  }
}
</script>

<style lang="scss">
.field {
  border: 1px solid white;
  padding: 8px 0 8px 8px;

  label > span {
    display: block;
  }
}

.processor-checkbox {
  display: flex;
}
</style>
