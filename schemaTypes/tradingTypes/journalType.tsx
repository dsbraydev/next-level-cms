import {defineField, defineType} from 'sanity'

export const journalType = defineType({
  name: 'journal',
  title: 'Journal',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'capital',
      type: 'number',
    }),
    defineField({
      name: 'risk',
      type: 'number',
    }),
    defineField({
      name: 'target',
      type: 'number',
    }),
    defineField({
      name: 'profit',
      type: 'number',
    }),
    defineField({
      name: 'loss',
      type: 'number',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'result',
      title: 'Result',
      type: 'string',
      options: {
        list: [
          {title: 'Win', value: 'win'},
          {title: 'Loss', value: 'loss'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'reference',
      to: [{type: 'currency'}],
    }),
  ],
})
