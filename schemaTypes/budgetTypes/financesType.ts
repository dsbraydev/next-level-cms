import { defineField, defineType } from 'sanity'

export const financesType = defineType({
  name: 'finances',
  title: 'Finances',
  type: 'document',
  fields: [
    defineField({
      name: 'income',
      type: 'number',
    }),
    defineField({
      name: 'tax',
      type: 'number',
    }),
    defineField({
      name: 'expences',  // The field that references multiple expences
      type: 'array',
      title: 'Expenses',
      of: [{ type: 'reference', to: [{ type: 'expences' }] }],
    }),
  ],
})
