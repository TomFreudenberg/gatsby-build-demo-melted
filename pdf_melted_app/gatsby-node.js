const excludePDF = process.env.EXCLUDE_PDF

exports.onCreateNode = async ({ node, actions }) => {
  if (!excludePDF && node.sourceInstanceName && node.sourceInstanceName.startsWith('pdf') && node.internal && (node.internal.mediaType === 'application/javascript')) {
    actions.createPage({
      path: `/pdf_documents/` + node.name,
      component: node.absolutePath,
      context: {
        id: node.id,
      },
    });
  }
}
