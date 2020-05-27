export default {
    type: 'object',
    name: 'googlePlayButton',
    title: 'Google Play Button',
    fields: [
        {
            title: 'URL',
            name: 'href',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    allowRelative: false,
                    scheme: ['https'],
                }),
        },
    ],
    preview: {
        select: {
            subtitle: 'href',
        },
        prepare({ subtitle }) {
            return {
                title: 'Google Play Button',
                subtitle,
            };
        },
    },
};
