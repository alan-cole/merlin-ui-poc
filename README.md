# Merlin UI POC

## Structure

```js
{
  field: 'title',
  type: 'text',
  selector: 'h1#page-title'
}
```

```js
[
  {
    type: 'text',
    field: 'title', // drupal field
    selector: 'h1' // (is the path of the element)
  },
  {
    type: 'alias',
    field: 'field_alias',
    value: '/alias-of-the-path'
  },
  {
    type: 'media',
    field: 'field_featured_image',
    selector: '.feat-img-container',
    options: [
      {
        file: 'img',
        name: 'data-name',
        alt: 'lorem ipsum'
      }
    ]
  }
]
```

```js
// Import Types
{
  'text': {
    field: { type: 'text' },
    selector: { type: 'path' }
  },
  'alias': {
    field: { type: 'text' },
    value: { type: 'text' }
  },
  'media': {
    field: { type: 'text' },
    selector: { type: 'path' },
    options: {
      type: 'array',
      fields: {
        file: { type: 'text' },
        name: { type: 'text' },
        alt: { type: 'text' }
      }
    },
  },
  'paragraph': {
    field: { type: 'text' },
    selector: { type: 'path' },
    paragraph_type: { type: 'select', options: [{ label: 'Container', value: 'container' }] },
    children: {
      type: 'array',
      fields: {
        type: { type: 'type' },
      }
    }
  }
}
```
