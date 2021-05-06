export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'Used as the title of the site',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'string',
      description: 'Meta description for SEO (not site content)',
    },
  ],
}