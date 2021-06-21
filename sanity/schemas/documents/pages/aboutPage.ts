import { i18n } from '../../translation/documentTranslation'

export default {
  name: 'aboutPage',
  title: 'Saznaj više',
  type: 'document',
  i18n,
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    },
  ],
}
