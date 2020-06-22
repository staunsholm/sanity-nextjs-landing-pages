import S from '@sanity/desk-tool/structure-builder';
import {
  MdDashboard,
  MdSettings,
  MdDescription,
  MdAssignment,
} from 'react-icons/lib/md';
import { getProjectIdByTitle, populateWithProject } from './baseData';

export async function pages(projectTitle) {
  const projectId = await getProjectIdByTitle(projectTitle);

  return S.listItem()
    .title('Pages')
    .icon(MdDashboard)
    .schemaType('page')
    .child(
      S.documentTypeList('page')
        .title('Pages')
        .filter(`_type == 'page' && project._ref == "${projectId}"`)
        .initialValueTemplates(populateWithProject(projectId, 'page'))
        .schemaType('page')
    );
}

export function siteConfig(projectTitle) {
  return S.listItem()
    .title('Site config')
    .icon(MdSettings)
    .child(
      S.editor()
        .id('config')
        .schemaType('site-config')
        .documentId(`${_.kebabCase(projectTitle)}-config`)
    );
}

export async function courses(projectTitle) {
  const projectId = await getProjectIdByTitle(projectTitle);

  return S.listItem()
    .title('Courses')
    .icon(MdAssignment)
    .schemaType('course')
    .child(
      S.documentTypeList('course')
        .title('Courses')
        .filter(`_type == 'course' && project._ref == "${projectId}"`)
        .initialValueTemplates(populateWithProject(projectId, 'course'))
        .schemaType('course')
    );
}

export async function lessons(projectTitle) {
  const projectId = await getProjectIdByTitle(projectTitle);

  return S.listItem()
    .title('Lessons')
    .icon(MdDescription)
    .schemaType('lesson')
    .child(
      S.documentTypeList('lesson')
        .title('Lessons')
        .filter(`_type == 'lesson' && project._ref == "${projectId}"`)
        .initialValueTemplates(populateWithProject(projectId, 'lesson'))
        .schemaType('lesson')
    );
}

export async function routes(projectTitle) {
  const projectId = await getProjectIdByTitle(projectTitle);

  return S.listItem()
    .title('Routes')
    .schemaType('route')
    .child(
      S.documentTypeList('route')
        .title('Routes')
        .filter(`_type == 'route' && project._ref == "${projectId}"`)
        .initialValueTemplates(populateWithProject(projectId, 'route'))
        .schemaType('route')
    );
}

export async function news(projectTitle) {
  const projectId = await getProjectIdByTitle(projectTitle);

  return S.listItem()
    .title('News')
    .schemaType('news')
    .child(
      S.documentTypeList('news')
        .title('News')
        .filter(`_type == 'news' && project._ref == "${projectId}"`)
        .initialValueTemplates(populateWithProject(projectId, 'news'))
        .schemaType('news')
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

export const allPages = S.listItem()
  .title('Pages')
  .icon(MdSettings)
  .schemaType('page')
  .child(S.documentTypeList('page').title('Pages'));

export const allRoutes = S.listItem()
  .title('Routes')
  .icon(MdSettings)
  .schemaType('route')
  .child(S.documentTypeList('route').title('Routes'));

export const allCourses = S.listItem()
  .title('Courses')
  .icon(MdSettings)
  .schemaType('course')
  .child(S.documentTypeList('course').title('Courses'));

export const allLessons = S.listItem()
  .title('Lessons')
  .icon(MdSettings)
  .schemaType('lesson')
  .child(S.documentTypeList('lesson').title('Lessons'));

export const allSiteConfigs = S.listItem()
  .title('Site Configs')
  .icon(MdSettings)
  .schemaType('site-config')
  .child(S.documentTypeList('site-config').title('Site Configs'));

export const allRoles = S.listItem()
  .title('Roles')
  .icon(MdSettings)
  .schemaType('role')
  .child(S.documentTypeList('role').title('Roles'));
