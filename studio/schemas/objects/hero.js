export default {
    type: 'object',
    name: 'hero',
    title: 'Hero',
    fields: [
        {
            name: 'heading',
            type: 'localeString',
            title: 'Heading',
        },
        {
            name: 'tagline',
            type: 'simplePortableText',
            title: 'Tagline',
        },
        {
            name: 'backgroundImage',
            type: 'image',
            title: 'Background image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'ctas',
            type: 'array',
            title: 'Call to actions',
            of: [
                {
                    title: 'Call to action',
                    type: 'cta',
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'heading',
            media: 'backgroundImage',
        },
        prepare({ title, media }) {
            return {
                title: title.en,
                subtitle: 'Hero section',
                media,
            };
        },
    },
};
