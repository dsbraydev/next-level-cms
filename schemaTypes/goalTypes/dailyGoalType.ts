import { defineType, defineField } from 'sanity'

export const dailyGoalType = defineType({
  name: 'dailyGoals',
  title: 'Daily Goals',
  type: 'document',
  fields: [
    defineField({
      name: 'numDays',
      title: 'Number of Days',
      type: 'number',
      description: 'The number of days being tracked.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'goals',
      title: 'Goals',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'goal',
              title: 'Goal',
              type: 'reference',
              to: [{ type: 'goalCategory' }],
              description: 'Select the goal category (e.g., Reading, Cardio).',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'progress',
              title: 'Progress',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'goalProgress',
                  fields: [
                    defineField({
                      name: 'day',
                      title: 'Day',
                      type: 'number',
                      validation: (Rule) => Rule.required().min(1),
                      description: 'Day number for tracking progress.',
                    }),
                    defineField({
                      name: 'status',
                      title: 'Progress Status',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Complete', value: 'complete' },
                          { title: 'Pending', value: 'pending' },
                          { title: 'Failed', value: 'failed' },
                        ],
                      },
                      validation: (Rule) => Rule.required(),
                      description: 'The status of the goal progress for the specific day.',
                    }),
                  ],
                },
              ],
              description: 'Track daily progress for this specific goal.',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
