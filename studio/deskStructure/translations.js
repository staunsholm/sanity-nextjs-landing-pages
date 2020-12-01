import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import {
  getLanguages,
  getProjectIdByTitle,
  getTranslationKeyGroups,
  populateWithProject,
} from './baseData';
import PlusIcon from 'part:@sanity/base/plus-icon';

const createTranslation = (projectId) =>
  S.menuItem()
    .title('New text')
    .action(() => {
      location.href = `/intent/create/type=translation;project._ref=${projectId}`;
    })
    .icon(PlusIcon)
    .showAsAction(true);

function partOfKey(key) {
  if (!key) {
    return '[unknown]';
  }
  if (key.startsWith('error_')) {
    return 'error';
  }
  if (key.startsWith('settings_')) {
    return 'settings';
  }
  if (key.startsWith('screens_')) {
    return key.substr(0, key.indexOf('_', 8));
  }
  if (key.startsWith('guides_')) {
    const prefix = key.substr(0, key.indexOf('_', 'guides_'.length));
    return prefix || 'guides';
  }
  return key.substr(0, key.lastIndexOf('_'));
}

export async function translations(projectTitle) {
  const projectId = await getProjectIdByTitle(projectTitle);
  const translationKeyGroups = await getTranslationKeyGroups(projectId);
  const languages = await getLanguages();

  // make list of keys that are prefixed by a unique identifier ending in an underscore
  const groupedTranslationKeys = (language) =>
    _.chain(translationKeyGroups.filter((g) => !g.value || !g.value[language]))
      .uniqBy((g) => partOfKey(g.key))
      .map((g, i) => {
        const keyGroup = partOfKey(g.key);
        const filter = language
          ? `_type == "translation" && project._ref == $projectId && key match $keyGroup && !defined(value.${language})`
          : `_type == "translation" && project._ref == $projectId && key match $keyGroup`;

        return S.listItem()
          .title(keyGroup)
          .id(keyGroup + i) // unique ID in case of malformed keyGroup
          .schemaType('translation')
          .child(
            S.documentTypeList('translation')
              .title(`App texts - ${keyGroup}`)
              .filter(filter)
              .params({ projectId, keyGroup: `${keyGroup}*` })
              .schemaType('translation')
              .defaultOrdering([{ field: 'key', direction: 'asc' }])
              .initialValueTemplates(
                populateWithProject(projectId, 'translation')
              )
          );
      })
      .value();

  // make list of each language containing missing translations
  const missingTranslationsByLanguage = languages.map((l) => {
    const groupKeys = groupedTranslationKeys(l.identifier);
    return S.listItem()
      .title(`Missing ${l.language} texts`)
      .schemaType('translation')
      .child(S.list().title(`Missing ${l.language} texts2`).items(groupKeys));
  });

  return S.listItem()
    .title('App texts')
    .schemaType('translation')
    .child(
      S.list()
        .title('App texts2')
        .menuItems([createTranslation(projectId)])
        .items([
          S.listItem()
            .title('All app texts')
            .schemaType('translation')
            .child(
              S.list()
                .title('App text groups')
                .menuItems([createTranslation(projectId)])
                .items(await groupedTranslationKeys())
            ),
          //...missingTranslationsByLanguage,
        ])
    );
}
