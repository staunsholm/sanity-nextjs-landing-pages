export default {
    type: 'object',
    name: 'appStoreButton',
    title: 'App Store Button',
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
                title: 'App Store Button',
                subtitle,
            };
        },
    },
};
