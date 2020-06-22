import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import {
  getLanguages,
  getProjectIdByTitle,
  getTranslationKeyGroups,
  populateWithProject,
} from './baseData';
import PlusIcon from 'part:@sanity/base/plus-icon';
import { useEditState } from '@sanity/react-hooks';
import TextInput from '@sanity/components/lib/textInputs/TextInput';
import TextField from '@sanity/components/lib/fieldsets/DefaultFieldset';
import FormField from '@sanity/components/lib/formfields/DefaultFormField';
import Pane from '@sanity/components/lib/panes/DefaultPane';
import Label from '@sanity/components/lib/labels/DefaultLabel';

const createTranslation = (projectId) =>
  S.menuItem()
    .title('New text')
    .action(() => {
      location.href = `/intent/create/type=translation;project._ref=${projectId}`;
    })
    .icon(PlusIcon)
    .showAsAction(true);

function getForm(doc) {
  return (
    <Pane>
      <Label>
        Key
        <TextInput value={doc.key} />
      </Label>
      <TextField>
        <Label>
          English
          <TextInput value={doc.value.en} />
        </Label>
        <Label>
          Amharic
          <TextInput value={doc.value.am} />
        </Label>
      </TextField>
    </Pane>
  );
}

function Form(args) {
  const document = useEditState(args.itemId, 'translation');
  if (!document) {
    return <div>Item not ready</div>;
  }
  const { draft, published } = document;

  return getForm(draft || published);
}

export async function translations(projectTitle) {
  const projectId = await getProjectIdByTitle(projectTitle);
  const translationKeyGroups = await getTranslationKeyGroups(projectId);
  const languages = await getLanguages();

  // make list of keys that are prefixed by a unique identifier ending in an underscore
  const groupedTranslationKeys = (language) =>
    _.chain(translationKeyGroups.filter((g) => !g.value[language]))
      .uniqBy((g) => g.key.substr(0, g.key.lastIndexOf('_')))
      .map((g) => {
        const keyGroup = g.key.substr(0, g.key.lastIndexOf('_'));
        const filter = language
          ? `_type == "translation" && project._ref == $projectId && key match $keyGroup && !defined(value.${language})`
          : `_type == "translation" && project._ref == $projectId && key match $keyGroup`;

        return S.listItem()
          .title(keyGroup)
          .schemaType('translation')
          .child(
            S.documentTypeList('translation')
              .title(`App texts - ${keyGroup}`)
              .filter(filter)
              .params({ projectId, keyGroup: `${keyGroup}*` })
              .schemaType('translation')
              .initialValueTemplates(
                populateWithProject(projectId, 'translation')
              )
              //.child(S.view.component(Form).title('title'))
          );
      })
      .value();

  // make list of each language containing missing translations
  const missingTranslationsByLanguage = languages.map((l) => {
    const groupKeys = groupedTranslationKeys(l.identifier);
    return S.listItem()
      .title(`Missing ${l.language} texts`)
      .schemaType('translation')
      .child(S.list().title(`Missing ${l.language} texts`).items(groupKeys));
  });

  return S.listItem()
    .title('App texts')
    .schemaType('translation')
    .child(
      S.list()
        .title('App texts')
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
          ...missingTranslationsByLanguage,
        ])
    );
}
