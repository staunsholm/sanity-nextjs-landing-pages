export default {
  name: 'translation',
  type: 'document',
  title: 'Translation',
  fields: [
    {
      name: 'project',
      type: 'reference',
      description: 'Choose project that uses this translation',
      to: { type: 'project' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'key',
      type: 'string',
      title: 'Key',
    },
    {
      name: 'value',
      type: 'localeString',
      title: 'Value',
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
      title: 'key',
      subtitle: 'value.en',
    },
  },
};
