import React from 'react';

export default {
  name: 'translation',
  type: 'document',
  title: 'Translation',
  fieldsets: [
    {
      name: 'key',
      title: "Key (don't change this)",
      options: {
        collapsed: true,
        collapsible: true,
      },
    },
  ],
  fields: [
    {
      name: 'key',
      type: 'string',
      //title: 'Key',
      description:
        'Please use _ to structure the key. Example: screens_signin_loginlabel',
      fieldset: 'key',
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
    {
      name: 'project',
      type: 'reference',
      description: 'Choose project that uses this translation',
      to: { type: 'project' },
      validation: (Rule) => Rule.required(),
      hidden: false,
    },
  ],

  preview: {
    select: {
      title: 'key',
      subtitle: 'value.en',
    },
  },
};
