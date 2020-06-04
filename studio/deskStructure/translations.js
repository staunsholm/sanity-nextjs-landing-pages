import S from '@sanity/desk-tool/structure-builder';

export const translations = (projectId) =>
    S.listItem()
        .title('Translations')
        .schemaType('translation')
        .child(
            S.list()
                .title('Translations')
                .items([
                    S.listItem()
                        .title('All translations')
                        .child(
                            S.documentTypeList('translation')
                                .title('All translations')
                                .filter(
                                    `_type == "translation" && project._ref == "${projectId}"`
                                )
                                .initialValueTemplates([
                                    S.initialValueTemplateItem(
                                        'translation-by-project',
                                        {
                                            projectId: projectId,
                                        }
                                    ),
                                ])
                        ),
                    S.listItem()
                        .title('Missing Amharic translations')
                        .child(
                            S.documentTypeList('translation')
                                .title('Missing Amharic translations')
                                .filter(
                                    `_type == "translation" && !defined(value.am) && project._ref == "${projectId}"`
                                )
                        ),
                ])
        );
