export default {
  name: 'lesson',
  type: 'document',
  title: 'Lesson',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'project',
      type: 'reference',
      description: 'Choose project that uses this lesson',
      to: { type: 'project' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Lesson sections',
      of: [
        { type: 'hero' },
        { type: 'tips' },
        { type: 'textSection' },
        //{ type: 'pdfButton' },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'openGraphImage',
    },
  },
};
