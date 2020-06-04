import S from '@sanity/desk-tool/structure-builder';
import {
  courses,
  languages,
  lessons,
  news,
  pages,
  projects,
  routes,
  siteConfig,
} from './baseTypes';
import {
  MdPhoneIphone,
  MdBook,
  MdForum,
  MdBusiness,
  MdComputer,
  MdEmail,
} from 'react-icons/lib/md';
import { translations } from './translations';
import { initData, projectsData } from './baseData';

const jamiiAcademy = () =>
  S.listItem()
    .title('Jamii.academy')
    .icon(MdForum)
    .child(
      S.list()
        .title('Jamii.academy')
        .items([siteConfig, pages, courses, lessons, routes])
    );

const jamiiGuide = () =>
  S.listItem()
    .title('Jamii.guide')
    .icon(MdBook)
    .child(
      S.list()
        .title('Jamii.guide')
        .items([siteConfig, pages, courses, lessons, routes])
    );

const groupApp = () =>
  S.listItem()
    .title('Group App')
    .icon(MdPhoneIphone)
    .child(
      S.list()
        .title('Group App')
        .items([translations('Group App'), news])
    );

const jamiiOne = () =>
  S.listItem()
    .title('Jamii.one')
    .icon(MdBusiness)
    .child(S.list().title('Jamii.one').items([siteConfig, pages, routes]));

const newsletter = () =>
  S.listItem()
    .title('Newsletter')
    .icon(MdEmail)
    .child(S.list().title('Newsletter').items([news]));

const jamiiAdmin = () =>
  S.listItem()
    .title('Jamii Admin')
    .icon(MdComputer)
    .child(
      S.list()
        .title('Jamii Admin')
        .items([translations('Jamii Admin')])
    );

export default async () => {
  await initData();

  const adminEntries = [languages, projects];

  return S.list()
    .title('Projects')
    .items([
      groupApp(),
      jamiiAcademy(),
      jamiiGuide(),
      jamiiOne(),
      jamiiAdmin(),
      newsletter(),
      S.divider(),
      ...adminEntries,
    ]);
};
