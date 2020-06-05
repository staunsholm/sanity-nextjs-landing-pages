import { languages } from '../languages';

export default {
    name: 'localeText',
    type: 'object',
    title: 'Translatable text',
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
        fieldset: lang.isDefault ? null : 'translations',
    })),
};
