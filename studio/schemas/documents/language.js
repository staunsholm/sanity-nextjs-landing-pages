export default {
  name: 'language',
  type: 'document',
  title: 'Language',
  fields: [
    {
      name: 'language',
      description: 'Name of language in English',
      type: 'string',
    },
    {
      name: 'localizedLanguage',
      description: 'Localized name of language',
      type: 'string',
    },
    {
      name: 'identifier',
      description: 'example: "en" for English',
      type: 'string',
    },
    {
      name: 'flag',
      description: 'The id of the flag used to indicate this language. Fx. "ET" for Ethiopia',
      type: 'string',
    },
    {
      name: 'isDefault',
      description: 'Translations will fall back to this language',
      type: 'boolean',
    },
  ],

  preview: {
    select: {
      title: 'language',
      subtitle: 'identifier',
    },
  },
};
