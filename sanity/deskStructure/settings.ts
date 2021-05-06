import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .icon(() => '🔧')
  .title('Settings')
  .child(
    S.document()
      .title('Site Settings')
      .id('settings')
      .schemaType('settings')
      .documentId('settings')
  )
