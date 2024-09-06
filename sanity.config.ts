import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { structure } from './structure'
export default defineConfig({
  name: 'default',
  title: 'Next Level',

  projectId: 's61rhe6r',
  dataset: 'production',

  plugins: [structureTool({
    structure,
    
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
