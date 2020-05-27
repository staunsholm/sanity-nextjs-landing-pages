export default {
    widgets: [
        {
            name: 'sanity-tutorials',
            options: {
                templateRepoId:
                    'sanity-io/sanity-template-nextjs-landing-pages',
            },
        },
        { name: 'structure-menu' },
        {
            name: 'project-info',
            options: {
                __experimental_before: [
                    {
                        name: 'netlify',
                        options: {
                            description:
                                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
                            sites: [
                                {
                                    buildHookId: '5ecb747bd2193ed11c8e05c9',
                                    title: 'Sanity Studio',
                                    name:
                                        'sanity-nextjs-landing-pages-studio-f5k42ey3',
                                    apiId:
                                        '16408ee9-d886-4faf-bb3e-6965256892da',
                                },
                                {
                                    buildHookId: '5ecb747b2396fe44f0c2365c',
                                    title: 'Landing pages Website',
                                    name:
                                        'sanity-nextjs-landing-pages-web-92nye5rc',
                                    apiId:
                                        '1a662051-7b24-489d-9e6a-2136cb17b3c8',
                                },
                            ],
                        },
                    },
                ],
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
                            'https://sanity-nextjs-landing-pages-web-92nye5rc.netlify.app',
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
