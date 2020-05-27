export default {
    type: 'object',
    name: 'textSection',
    title: 'Text and Image',
    fields: [
        {
            name: 'heading',
            type: 'localeString',
            title: 'Heading',
        },
        {
            name: 'text',
            type: 'portableText',
            title: 'Text',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
    ],
    preview: {
        select: {
            heading: 'heading',
            media: 'image',
        },
        prepare({ heading, media }) {
            return {
                title: `${heading.en}`,
                subtitle: 'Text section',
                media,
            };
        },
    },
};
