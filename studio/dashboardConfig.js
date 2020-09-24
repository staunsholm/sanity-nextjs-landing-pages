export default {
    widgets: [
        { name: 'structure-menu' },
        {
            name: 'project-info',
            options: {
                data: [
                    {
                        title: 'GitHub repo',
                        value:
                            'https://github.com/staunsholm/sanity-nextjs-landing-pages',
                        category: 'Code',
                    },
                    {
                        title: 'Frontend',
                        value:
                            'https://jamii.sanity.studio',
                        category: 'apps',
                    },
                ],
            },
        },
        { name: 'project-users', layout: { height: 'auto' } },
        {
            name: 'document-list',
            options: {
                title: 'Recently edited',
                order: '_updatedAt desc',
                limit: 10,
                types: ['page'],
            },
            layout: { width: 'medium' },
        },
    ],
};
