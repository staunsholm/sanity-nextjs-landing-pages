import T from '@sanity/base/initial-value-template-builder';

function createPopulateWithProjectTemplate(schemaType) {
  return T.template({
    id: `populate-${schemaType}-with-project`,
    title: 'Project',
    description: 'Specify initial value for project',
    schemaType,
    parameters: [{ name: 'projectId', type: 'string' }],
    value: (params) => {
      return {
        project: { _type: 'reference', _ref: params.projectId },
      };
    },
  });
}

export default [
  ...T.defaults(),
  createPopulateWithProjectTemplate('translation'),
  createPopulateWithProjectTemplate('news'),
  createPopulateWithProjectTemplate('page'),
  createPopulateWithProjectTemplate('lesson'),
  createPopulateWithProjectTemplate('course'),
  createPopulateWithProjectTemplate('route'),
];
