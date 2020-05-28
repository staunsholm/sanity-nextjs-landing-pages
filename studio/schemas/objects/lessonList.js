export default {
    type: 'object',
    name: 'lessonList',
    title: 'Lesson list',
    fields: [
        {
            name: 'lessons',
            type: 'array',
            of: [
                {
                    title: 'Lesson',
                    type: 'reference',
                    to: { type: 'lesson' },
                },
            ],
        },
    ],
    preview: {
        select: {
            lessons: 'lessons',
        },
        prepare({ lessons }) {
            return {
                title:
                    lessons.length === 1
                        ? `1 lesson`
                        : `${lessons.length} lessons`,
            };
        },
    },
};
