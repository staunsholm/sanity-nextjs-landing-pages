import client from '../client';
import S from '@sanity/desk-tool/structure-builder';

let projectsData = null;
let languagesData = null;

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

export async function populateWithProject(projectTitle, schemaType) {
  return [
    S.initialValueTemplateItem(`populate-${schemaType}-with-project`, {
      projectId: await getProjectIdByTitle(projectTitle),
    }),
  ];
}

export async function getProjectIdByTitle(projectTitle) {
  const projects = await getProjects();
  return projects.find((project) => project.title === projectTitle)._id;
}
