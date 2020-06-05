import { languages } from '../languages';

export default {
    name: 'localePortableText',
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
        type: 'portableText',
        fieldset: lang.isDefault ? null : 'translations',
    })),
};
