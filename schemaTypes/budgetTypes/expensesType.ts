import { defineField, defineType } from 'sanity';

export const expensesType = defineType({
  name: 'expenses', // Name must match how you're querying it
  title: 'Expenses',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Expense Name',
    }),
    defineField({
      name: 'amount',
      type: 'number',
      title: 'Amount',
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          { title: 'Basic', value: 'basic' },
          { title: 'Debt', value: 'debt' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
  ],
});
