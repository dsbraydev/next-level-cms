import { defineField, defineType } from 'sanity'

export const tradingType = defineType({
    name: 'trading',
    title: 'Trading',
    type: 'document',
    fields: [
        defineField({
            name: 'capital',
            type: 'number',
        }),
        defineField({
            name: 'risk',
            type: 'number',
        }),
        defineField({
            name: 'target',
            type: 'number',
        }),
        defineField({
            name: 'result',
            type: 'boolean',
        }),
    ],
})
