export default {
    type: 'object',
    name: 'tips',
    title: 'Tips',
    fields: [
        {
            name: 'texts',
            type: 'array',
            title: 'Tips',
            of: [
                {
                    title: 'Text',
                    type: 'localeString',
                },
            ],
        },
    ],
    preview: {
        select: {
            texts: 'texts',
        },
        prepare({ texts }) {
            return {
                title: texts.length === 1 ? texts[0].en : `${texts.length} tips`,
            };
        },
    },
};
