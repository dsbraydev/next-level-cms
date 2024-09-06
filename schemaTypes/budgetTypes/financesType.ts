import {defineField, defineType} from 'sanity'

export const financesType = defineType({
  name: 'finances',
  title: 'Finances',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})