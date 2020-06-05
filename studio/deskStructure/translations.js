import S from '@sanity/desk-tool/structure-builder';
import { getLanguages, getProjectIdByTitle, populateWithProject } from './baseData';

export async function translations(projectTitle) {
  const populateWithProjectTemplate = await populateWithProject(projectTitle)
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
            `!defined(value.${l.identifier}) && project._ref == "${projectId}"`
          )
          .initialValueTemplates(populateWithProjectTemplate)
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
                .filter(`project._ref == "${projectId}"`)
                .initialValueTemplates(populateWithProjectTemplate)
            ),
          ...missingTranslationsByLanguage,
        ])
    );
}
