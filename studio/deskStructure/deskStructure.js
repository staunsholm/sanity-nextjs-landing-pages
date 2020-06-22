import S from '@sanity/desk-tool/structure-builder';
import {
  courses,
  lessons,
  news,
  pages,
  routes,
  siteConfig,
  languages,
  projects,
  allPages,
  allRoutes,
  allCourses,
  allLessons,
  allSiteConfigs, allRoles
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

const jamiiAcademy = async () =>
  S.listItem()
    .title('Jamii.academy')
    .icon(MdForum)
    .child(
      S.list()
        .title('Jamii.academy')
        .items([
          siteConfig('Jamii.academy'),
          await pages('Jamii.academy'),
          await courses('Jamii.academy'),
          await lessons('Jamii.academy'),
          await routes('Jamii.academy'),
        ])
    );

const jamiiGuide = async () =>
  S.listItem()
    .title('Jamii.guide')
    .icon(MdBook)
    .child(
      S.list()
        .title('Jamii.guide')
        .items([
          siteConfig('Jamii.guide'),
          await pages('Jamii.guide'),
          await courses('Jamii.guide'),
          await lessons('Jamii.guide'),
          await routes('Jamii.guide'),
        ])
    );

const groupApp = async () =>
  S.listItem()
    .title('Group App')
    .icon(MdPhoneIphone)
    .child(
      S.list()
        .title('Group App')
        .items([await translations('Group App'), await news('Group App')])
    );

const jamiiOne = async () =>
  S.listItem()
    .title('Jamii.one')
    .icon(MdBusiness)
    .child(
      S.list()
        .title('Jamii.one')
        .items([
          siteConfig('Jamii.one'),
          await pages('Jamii.one'),
          await routes('Jamii.one'),
        ])
    );

const newsletter = async () =>
  S.listItem()
    .title('Newsletter')
    .icon(MdEmail)
    .child(
      S.list()
        .title('Newsletter')
        .items([await news('Newsletter')])
    );

const jamiiAdmin = async () =>
  S.listItem()
    .title('Jamii Admin')
    .icon(MdComputer)
    .child(
      S.list()
        .title('Jamii Admin')
        .items([await translations('Jamii Admin')])
    );

export default async () => {
  const adminEntries = [
    languages,
    projects,
    allPages,
    allRoutes,
    allCourses,
    allLessons,
    allSiteConfigs,
    allRoles,
  ];

  return S.list()
    .title('Projects')
    .items([
      await groupApp(),
      await jamiiAcademy(),
      await jamiiGuide(),
      await jamiiOne(),
      await jamiiAdmin(),
      await newsletter(),
      S.divider(),
      ...adminEntries,
    ]);
};
