import S from '@sanity/desk-tool/structure-builder';
import {
  MdDashboard,
  MdSettings,
  MdDescription,
  MdAssignment,
} from 'react-icons/lib/md';
import { getProjectIdByTitle, populateWithProject } from './baseData';

export async function pages(projectTitle) {
  return S.listItem()
    .title('Pages')
    .icon(MdDashboard)
    .schemaType('page')
    .child(
      S.documentTypeList('page')
        .title('Pages')
        .filter(`_type == 'page' && project._ref == "${await getProjectIdByTitle(projectTitle)}"`)
        .initialValueTemplates(await populateWithProject(projectTitle, 'page'))
    );
}

export const siteConfig = S.listItem()
  .title('Site config')
  .icon(MdSettings)
  .child(
    S.editor()
      .id('config')
      .schemaType('site-config')
      .documentId('global-config')
  );

export async function courses(projectTitle) {
  return S.listItem()
    .title('Courses')
    .icon(MdAssignment)
    .schemaType('course')
    .child(
      S.documentTypeList('course')
        .title('Courses')
        .filter(`_type == 'course' && project._ref == "${await getProjectIdByTitle(projectTitle)}"`)
        .initialValueTemplates(await populateWithProject(projectTitle, 'course'))
    );
}

export async function lessons(projectTitle) {
  return S.listItem()
    .title('Lessons')
    .icon(MdDescription)
    .schemaType('lesson')
    .child(
      S.documentTypeList('lesson')
        .title('Lessons')
        .filter(`_type == 'lesson' && project._ref == "${await getProjectIdByTitle(projectTitle)}"`)
        .initialValueTemplates(await populateWithProject(projectTitle, 'lesson'))
    );
}

export async function routes(projectTitle) {
  return S.listItem()
    .title('Routes')
    .schemaType('route')
    .child(
      S.documentTypeList('route')
        .title('Routes')
        .filter(`_type == 'route' && project._ref == "${await getProjectIdByTitle(projectTitle)}"`)
        .initialValueTemplates(await populateWithProject(projectTitle, 'route'))
    );
}

export async function news(projectTitle) {
  return S.listItem()
    .title('News')
    .schemaType('news')
    .child(
      S.documentTypeList('news')
        .title('News')
        .filter(`_type == 'news' && project._ref == "${await getProjectIdByTitle(projectTitle)}"`)
        .initialValueTemplates(await populateWithProject(projectTitle, 'news'))
    );
}

export const languages = S.listItem()
  .title('Languages')
  .icon(MdSettings)
  .schemaType('language')
  .child(S.documentTypeList('language').title('Languages'));

export const projects = S.listItem()
  .title('Projects')
  .icon(MdSettings)
  .schemaType('project')
  .child(S.documentTypeList('project').title('Projects'));
