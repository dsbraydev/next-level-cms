import type { StructureResolver } from 'sanity/structure';
import { CalendarIcon, UsersIcon } from '@sanity/icons';

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
    ]);
