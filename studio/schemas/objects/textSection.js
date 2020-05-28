function textPreview(text) {
    return text && text.length
        ? text[0].children.find((block) => block.text.trim()).text
        : '';
}

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
            name: 'cta',
            type: 'cta',
            title: 'Call to action',
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
            text: 'text',
            media: 'image',
        },
        prepare({ heading, media, text }) {
            return {
                title: heading ? heading.en : textPreview(text) || 'Rich text',
                subtitle: 'Text section',
                media,
            };
        },
    },
};
