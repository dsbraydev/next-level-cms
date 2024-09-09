import type { StructureResolver } from 'sanity/structure';
import { CalendarIcon, UsersIcon, BarChartIcon } from '@sanity/icons'; // Example icon for trading

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Budget')
        .icon(CalendarIcon)
        .child(
          S.list()
            .title('Budget')
            .items([
              S.documentTypeListItem('finances').title('Finances').icon(UsersIcon),
              S.documentTypeListItem('expences').title('Expenses').icon(CalendarIcon),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Trading')
        .icon(BarChartIcon) 
        .child(
          S.list()
            .title('Trading')
            .items([
              S.documentTypeListItem('journal').title('Journal').icon(UsersIcon), 
              S.documentTypeListItem('currency').title('Currency').icon(CalendarIcon),
            ])
        )
    ]);
