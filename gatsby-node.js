exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /encom-globe-react/,
            use: loaders.null(),
          },
          {
            test: /@pquina\/flip/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (
    page.path.match(/app/) ||
    page.path.match(/terms/) ||
    page.path.match(/404/) ||
    page.path.match(/privacy/) ||
    page.path.match(/gdpr/)
  ) {
    page.context.disableLayout = true;
    createPage(page);
  }
};
