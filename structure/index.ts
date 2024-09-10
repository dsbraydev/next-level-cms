import type { StructureResolver } from 'sanity/structure';
import { CalendarIcon, UsersIcon, BarChartIcon, CheckmarkIcon } from '@sanity/icons'; // Example icons for sections

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      // Budget Section
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
      // Trading Section
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
        ),
      
      S.divider(),
      // Goals Section
      S.listItem()
        .title('Goals')
        .icon(CheckmarkIcon)  
        .child(
          S.list()
            .title('Goals')
            .items([
              S.documentTypeListItem('goalCategory').title('Goal Categories').icon(CalendarIcon),
              S.documentTypeListItem('dailyGoals').title('Daily Goals').icon(UsersIcon),
              S.documentTypeListItem('goalProgress').title('goalProgressType').icon(UsersIcon),
            ])
        ),
    ]);
