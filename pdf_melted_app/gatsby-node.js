const buildAPP = process.env.BUILD_APP
const buildPDF = process.env.BUILD_PDF

exports.onCreateNode = async ({ node, actions }) => {
  if (buildPDF && node.sourceInstanceName && node.sourceInstanceName.startsWith('pdf') && node.internal && (node.internal.mediaType === 'application/javascript')) {
    actions.createPage({
      path: `/pdf_documents/` + node.name,
      component: node.absolutePath,
      context: {
        id: node.id,
      },
    });
  }
}

exports.onCreatePage = function onCreatePage({ actions, page }) {
  if (!buildAPP) {
    actions.deletePage(page);
  }
}
