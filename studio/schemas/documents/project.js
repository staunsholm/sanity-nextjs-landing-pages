export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
};
