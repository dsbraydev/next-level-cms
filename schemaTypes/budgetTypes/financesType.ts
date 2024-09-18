import { defineField, defineType } from 'sanity';


export const financesType = defineType({
  name: 'finances',
  title: 'Finances',
  type: 'document',
  fields: [
    defineField({
      name: 'income',
      type: 'number',
      title: 'Income',
    }),
    defineField({
      name: 'additionalIncome',
      type: 'number',
      title: 'additional Income',
    }),
    defineField({
      name: 'tax',
      type: 'number',
      title: 'Tax',
    }),
    defineField({
      name: 'expenses',
      type: 'array',
      title: 'Expenses',
      of: [{ type: 'reference', to: [{ type: 'expenses' }] }],
    }),
  ],
});

