export default {
    type: 'object',
    name: 'courseDescription',
    title: 'Course Description',
    fields: [
        {
            name: 'header',
            type: 'localeString',
            title: 'Header',
        },
        {
            name: 'description',
            type: 'localeString',
            title: 'Description',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'course',
            type: 'reference',
            title: 'Course',
            to: [
                {
                    type: 'course',
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'header.en',
            subtitle: 'description.en',
            media: 'image',
        },
    },
};
