import { defineType, defineField } from 'sanity'

export const goalCategoryType = defineType({
  name: 'goalCategory',
  title: 'Goal Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Goal Name',
      type: 'string',
      description: 'The type of goal (e.g., Reading, Cardio, etc.)',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
