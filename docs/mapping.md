
https://salsadigitalauorg.github.io/merlin-framework/docs/type-text
Mappings to support are:

```yaml
mappings:
  -
    type: text
    field: title
    selector: h1#page-title
  -
    type: alias
    field: alias
  -
    type: media
    field: field_featured_image
    selector: .feat-img-container
    options:
      file: img
      name: data-name
      alt: alt
  -
    type: meta
    field: meta
    options:
      value: keywords
      attr: property
  -
    type: menu_link
    field: main_menu
    name: health_main_menu
    selector: '//*[@class="header-nav"]/*/ul/li'
    options:
      text: './a'
      link: './a/@href'
      remove_duplicates: true
    children:
      -
        type: menu_link
        selector: './descendant::li[@class="dd-level2"]'
        options:
          text: './a/h3'
          link: './a/@href'
  -
    type: link
    field: link
    selector: .link-list li
    options:
      link: href
      text: a
  -
    type: uuid
    field: uuid
    selector: span.title
  -
    type: static_value
    name: site
    options:
      value: 4
  -
    type: ordered
    field: field_secondary_links
    selector: '//*/ul/li'
    available_items:
      -
        by:
          attr: class
          text: content
        fields:
          -
            field: related_link_group
            type: paragraph
            paragraph_type: related_link_group
            children:
              -
                field: field_related_link
                type: link
              -
                field: field_related_link_blurb
                selector: p
                type: text
  -
    type: boolean
    field: boolean
    selector: h1#title
  -
    type: reusable_paragraph
    name: call_to_action_video
    selector: div.content
    options:
      type: paragraph_library
      uuid: uuid
    children:
      -
        field: uuid
        type: uuid
        selector: ./div[@class="feat-img-container"]/img/@alt
      -
        field: field_paragraph_title
        type: text
        selector: ./div[@class='m-h']/h3
        options:
          allow_null: TRUE
  -
    type: reusable_paragraph
    name: call_to_action_video
    selector: div.content
    options:
      type: paragraph_library
      uuid: uuid
    children:
      -
        field: uuid
        type: uuid
        selector: ./div[@class="feat-img-container"]/img/@alt
      -
        field: field_paragraph_title
        type: text
        selector: ./div[@class='m-h']/h3
        options:
          allow_null: TRUE
  -
    type: taxonomy_term
    field: field_page_type
    vocab: category
    selector: ".tags.links li"
    children:
      -
        field: uuid
        type: uuid
        selector: ./@content
      -
        field: name
        type: text
        selector: ./@content
  -
    type: long_text
    field: long_text
    selector: .content
```

https://salsadigitalauorg.github.io/merlin-framework/docs/processor-whitespace
Processors to support are:

```yaml
processors:
  -
    processor: whitespace
  -
    processor: strip_tags
    allowed_tags: <h1><h2><h3>
    remove_attr:
      - id
      - class
      - style
  -
    processor: replace
    pattern: \d+
    replace: false
  -
    processor: html_entity_decode
  -
    processor: remove_dom
    selector: div
    xpath: false
  -
    processor: nl2br
  -
    processor: remove_empty_tags
  -
    processor: convert_encoding
    to_encoding: UTF-8
    from_encoding: auto
```

Both Mapping and Processor objects need additional information to create the fields (e.g. what type of field, what label, etc.). These can be captured as a separate map, e.g.

```js
// Field Type Map
'text': [
  { type: 'text', name: 'field' },
  { type: 'path', name: 'selector' }
],
```

The map can be used to correctly build the form elements needed. E.g. if my `type === text` then use the `text` field configuration to display fields.
When the form is saving values, it should convert the field values back into the yaml (as JSON) data object.
