import { languages } from '../languages';

export default {
  name: 'localeString',
  type: 'object',
  title: 'Translatable string',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: languages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'text',
    rows: 1,
    fieldset: lang.isDefault ? null : 'translations',
  })),
};
