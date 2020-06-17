import T from '@sanity/base/initial-value-template-builder';

function createPopulateWithProjectTemplate(schemaType) {
  return T.template({
    id: `populate-${schemaType}-with-project`,
    title: 'Project',
    description: 'Specify initial value for project',
    schemaType,
    parameters: [{ name: 'projectId', type: 'string' }],
    value: (params) => {
      console.log(params.projectId);
      return {
        project: { _type: 'reference', _ref: params.projectId },
      };
    },
  });
}

export default [
  ...T.defaults(),

  T.template({
    id: `populate-translation-with-project`,
    title: 'Project',
    description: 'Specify initial value for project',
    schemaType: 'translation',
    parameters: [{ name: 'projectId', type: 'string' }],
    value: (params) => {
      console.log(params.projectId);
      return {
        project: { _type: 'reference', _ref: params.projectId },
      };
    },
  }),

  /*createPopulateWithProjectTemplate('translation'),
  createPopulateWithProjectTemplate('news'),
  createPopulateWithProjectTemplate('page'),
  createPopulateWithProjectTemplate('lesson'),
  createPopulateWithProjectTemplate('course'),
  createPopulateWithProjectTemplate('route'),*/
];
