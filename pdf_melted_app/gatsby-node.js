const excludePDF = process.env.EXCLUDE_PDF

exports.onCreatePage = function onCreatePage({ actions, page }) {
  if (excludePDF && page.path.startsWith('/pdf_documents')) {
    actions.deletePage(page)
  }
}
