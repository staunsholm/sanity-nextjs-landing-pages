import S from '@sanity/desk-tool/structure-builder';
import { projectsData,languagesData } from './baseData';

export const translations = (projectTitle) => {
  // find _id from project title
  const projectId = projectsData.find((p) => p.title === projectTitle)._id;

  const missingTranslationsByLanguage = languagesData.map(l => S.listItem()
    .title(`Missing ${l.language} translations`)
    .child(
      S.documentTypeList('translation')
        .title(`Missing ${l.language} translations`)
        .filter(
          `_type == "translation" && !defined(value.${l.identifier}) && project._ref == "${projectId}"`
        )
        .initialValueTemplates([
          S.initialValueTemplateItem('translation-by-project', {
            projectId,
          }),
        ])
    )
  );

  return S.listItem()
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
                  S.initialValueTemplateItem('translation-by-project', {
                    projectId,
                  }),
                ])
            ),
          ...missingTranslationsByLanguage,
        ])
    );
};
