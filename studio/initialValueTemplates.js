import T from '@sanity/base/initial-value-template-builder';

export default [
    ...T.defaults(),
    T.template({
        id: 'translation-by-project',
        title: 'Project',
        description: 'Project in which this translation is used',
        schemaType: 'translation',
        parameters: [{ name: 'projectId', type: 'string' }],
        value: (params) => {
            return {
                project: { _type: 'reference', _ref: params.projectId },
            };
        },
    }),
];
