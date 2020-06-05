export default {
  name: 'news',
  type: 'document',
  title: 'News',
  fields: [
    {
      name: 'project',
      type: 'reference',
      description: 'Indicate which project will use this news',
      to: { type: 'project' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'header',
      type: 'localeString',
      title: 'Header',
    },
    {
      name: 'body',
      type: 'localePortableText',
      title: 'Body',
    },
    {
      name: 'description',
      type: 'string',
      description:
        'This is just a description, what you enter is not used anywhere',
      title: 'Description',
    },
  ],

  preview: {
    select: {
      title: 'header.en',
      subtitle: 'body.en',
    },
  },
};
