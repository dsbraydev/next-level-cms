import {defineField, defineType} from 'sanity'

export const currencyType = defineType({
  name: 'currency',
  title: 'Currency',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
