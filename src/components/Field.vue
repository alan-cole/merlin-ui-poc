<template>
  {{ value }}
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
      <button>Select Element</button>
    </label>
  </div>
  <div class="field" v-if="field.type === 'array'">
    <label>
      <span>{{ field.name }}</span>
    </label>
    <template v-for="(afield, aidx) in field.options" :key="aidx">
      <Field :field="afield" />
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
      <select id="type" v-model="type">
        <option v-for="opt in typeOptions" :value="opt.value">{{ opt.label }}</option>
      </select>
    </label>
    <!-- TODO - This will need to support add / delete, the same as Typeform.vue -->
    <template v-for="(tfield, tidx) in typeObject" :key="tidx">
      <Field
        :field="tfield"
        @change="onFieldChange"
      />
    </template>
  </div>
</template>

<script>
import types from '../libs/types.js'

export default {
  name: 'Field',
  props: {
    field: Object,
    fieldid: Number,
    showDelete: Boolean
  },
  emits: [
    'deleteField'
  ],
  data () {
    return {
      value: '',
      type: '',
      types,
      typeOptions: [
        { value: 'text', label: 'Text' },
        { value: 'alias', label: 'Alias' },
        { value: 'media', label: 'Media' },
        { value: 'paragraph', label: 'Paragraph' }
      ]
    }
  },
  watch: {
    value (val) {
      this.$emit('change', this.fieldid, val)
    }
  },
  computed: {
    typeObject () {
      if (this.type) {
        return this.types[this.type]
      }
    }
  },
  methods: {
    deleteClick () {
      this.$emit('deleteField', this.fieldid)
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
</style>
