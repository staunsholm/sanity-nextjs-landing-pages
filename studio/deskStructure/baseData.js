import client from '../client';
import S from '@sanity/desk-tool/structure-builder';

let projectsData = null;
let languagesData = null;
let translationGroups = null;

export async function getProjects() {
  if (projectsData === null) {
    projectsData = await client.fetch('*[_type == "project"]');
  }

  return projectsData;
}

export async function getLanguages() {
  if (languagesData === null) {
    languagesData = await client.fetch('*[_type == "language"]');
  }

  return languagesData;
}

export async function getTranslationKeyGroups(projectId) {
  if (translationGroups === null) {
    translationGroups = await client.fetch(
      `*[_type == "translation" && project._ref == "${projectId}"] | order(key)`
    );
  }

  return translationGroups;
}

export function populateWithProject(projectId, schemaType) {
  return [
    // the first parameter must match id in template definition in initialValueTemplates.js
    S.initialValueTemplateItem(`populate-${schemaType}-with-project`, {
      projectId,
    }),
  ];
}

export async function getProjectIdByTitle(projectTitle) {
  const projects = await getProjects();
  return projects.find((project) => project.title === projectTitle)._id;
}
