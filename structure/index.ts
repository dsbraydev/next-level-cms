import type { StructureResolver } from 'sanity/structure';
import { UsersIcon } from '@sanity/icons'; // Example icon for finances

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('finances').title('Finances').icon(UsersIcon),
    ]);
