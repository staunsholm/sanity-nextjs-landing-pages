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
        type: 'string',
        fieldset: lang.isDefault ? null : 'translations',
    })),
};
