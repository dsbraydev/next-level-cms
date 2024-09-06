import {defineField, defineType} from 'sanity'

export const expencesType = defineType({
  name: 'expences',
  title: 'Expences',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})