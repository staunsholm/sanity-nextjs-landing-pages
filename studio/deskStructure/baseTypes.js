import S from '@sanity/desk-tool/structure-builder';
import {
  MdDashboard,
  MdSettings,
  MdDescription,
  MdAssignment,
} from 'react-icons/lib/md';

export const pages = S.listItem()
  .title('Pages')
  .icon(MdDashboard)
  .schemaType('page')
  .child(S.documentTypeList('page').title('Pages'));

export const siteConfig = S.listItem()
  .title('Site config')
  .icon(MdSettings)
  .child(
    S.editor()
      .id('config')
      .schemaType('site-config')
      .documentId('global-config')
  );

export const courses = S.listItem()
  .title('Courses')
  .icon(MdAssignment)
  .schemaType('course')
  .child(S.documentTypeList('course').title('Courses'));

export const lessons = S.listItem()
  .title('Lessons')
  .icon(MdDescription)
  .schemaType('lesson')
  .child(S.documentTypeList('lesson').title('Lessons'));

export const routes = S.listItem()
  .title('Routes')
  .schemaType('route')
  .child(S.documentTypeList('route').title('Routes'));

export const news = S.listItem()
  .title('News')
  .schemaType('news')
  .child(S.documentTypeList('news').title('News'));

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
