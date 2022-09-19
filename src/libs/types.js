export default {
  'text': [
    { type: 'text', name: 'field' },
    { type: 'path', name: 'selector' }
  ],
  'alias': [
    { type: 'text', name: 'field' },
    { type: 'text', name: 'value' }
  ],
  'media': [
    { type: 'text', name: 'field' },
    { type: 'path', name: 'selector' },
    {
      type: 'array',
      name: 'options',
      options: [
        { type: 'text', name: 'file' },
        { type: 'text', name: 'name' },
        { type: 'text', name: 'alt' },
      ]
    },
  ],
  'paragraph': [
    { type: 'text', name: 'field' },
    { type: 'path', name: 'selector' },
    {
      type: 'select',
      name: 'paragraph_type',
      options: [
        { label: 'Container', value: 'container' },
        { label: 'Other', value: 'other' },
      ]
    },
    {
      type: 'array',
      name: 'children',
      options: [
        { type: 'type', name: 'type' }
      ]
    },
  ]
}
