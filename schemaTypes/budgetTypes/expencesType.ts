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
    defineField({
      name: 'amount',
      type: 'number',
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          { title: 'Basic', value: 'basic' },
          { title: 'Option 2', value: 'option2' },
          { title: 'Option 3', value: 'option3' },
        ],
      },
    }),
    
  ],
})