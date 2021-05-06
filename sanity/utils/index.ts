const documentTypes = ['about', 'home', 'settings']

type Document = any

type DocumentType = {
  document?: boolean
  newDocument?: boolean
}

export function hiddenDocumentTypes(
  document: Document,
  documentType: DocumentType
) {
  if (!documentType) return []

  if (documentType.document) {
    return !documentTypes.includes(document.getId())
  }

  if (documentType.newDocument) {
    return !documentTypes.includes(document.spec.templateId)
  }
}
