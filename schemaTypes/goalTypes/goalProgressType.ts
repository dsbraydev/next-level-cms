import { defineType, defineField } from 'sanity'

export const goalProgressType = defineType({
  name: 'goalProgress',
  title: 'Goal Progress',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'number',
      description: 'The day number for tracking progress.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'value',
      title: 'Progress Value',
      type: 'string',
      description: 'The progress status (e.g., complete, failed, pending)',
      options: {
        list: [
          { title: 'Complete', value: 'complete' },
          { title: 'Failed', value: 'failed' },
          { title: 'Pending', value: 'pending' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
