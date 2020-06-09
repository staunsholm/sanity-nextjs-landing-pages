import S from '@sanity/desk-tool/structure-builder';
import {
  getLanguages,
  getProjectIdByTitle,
  getTranslationKeyGroups,
  populateWithProject,
} from './baseData';

export async function translations(projectTitle) {
  const projectId = await getProjectIdByTitle(projectTitle);
  const translationKeyGroups = await getTranslationKeyGroups(projectId);
  const languages = await getLanguages();

  // make list of keys that are prefixed by a uniqeue identifiter ending in an underscore
  const groupedTranslationKeys = (language) =>
    _.chain(translationKeyGroups.filter((g) => !g.value[language]))
      .uniqBy((g) => g.key.substr(0, g.key.lastIndexOf('_')))
      .map((g) => {
        const keyGroup = g.key.substr(0, g.key.lastIndexOf('_'));
        const title = `${keyGroup}`;
        const filter = language
          ? `_type == "translation" && project._ref == "${projectId}" && key match "${keyGroup}*" && !defined(value.${language})`
          : `_type == "translation" && project._ref == "${projectId}" && key match "${keyGroup}*"`;

        return S.listItem()
          .title(title)
          .schemaType('translation')
          .child(
            S.documentList('translation')
              .title(title)
              .filter(filter)
              .initialValueTemplates(
                populateWithProject(projectId, 'translation')
              )
              .schemaType('translation')
          );
      })
      .value();

  // make list of each language containing missing translations
  const missingTranslationsByLanguage = languages.map((l) => {
    const groupKeys = groupedTranslationKeys(l.identifier);
    return S.listItem()
      .title(`Missing ${l.language} translations`)
      .child(
        S.list().title(`Missing ${l.language} translations`).items(groupKeys)
      );
  });

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
              S.list()
                .title('Translation groups')
                .items(await groupedTranslationKeys())
            ),
          ...missingTranslationsByLanguage,
        ])
    );
}
