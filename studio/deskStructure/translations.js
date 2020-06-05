import S from '@sanity/desk-tool/structure-builder';
import {
  getLanguages,
  getProjectIdByTitle,
  populateWithProject,
} from './baseData';

export async function translations(projectTitle) {
  const projectId = await getProjectIdByTitle(projectTitle);

  // make list of each language containing missing translations
  const languages = await getLanguages();
  const missingTranslationsByLanguage = languages.map((l) =>
    S.listItem()
      .title(`Missing ${l.language} translations`)
      .child(
        S.documentTypeList('translation')
          .title(`Missing ${l.language} translations`)
          .filter(
            `_type == "translation" && !defined(value.${l.identifier}) && project._ref == "${projectId}"`
          )
          .initialValueTemplates(populateWithProject(projectId, 'translation'))
          .schemaType('translation')
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
            .schemaType('translation')
            .child(
              S.documentTypeList('translation')
                .title('All translations')
                .filter(
                  `_type == "translation" && project._ref == "${projectId}"`
                )
                .initialValueTemplates(populateWithProject(projectId, 'translation'))
                .schemaType('translation')
            ),
          ...missingTranslationsByLanguage,
        ])
    );
}
