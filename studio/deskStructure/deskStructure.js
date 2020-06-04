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

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) =>
    ![
        'page',
        'route',
        'site-config',
        'course',
        'lesson',
        'translation',
    ].includes(listItem.getId());

const jamiiAcademy = S.listItem()
    .title('Jamii.academy')
    .icon(MdForum)
    .child(
        S.list()
            .title('Jamii.academy')
            .items([siteConfig, pages, courses, lessons, routes])
    );

const jamiiGuide = S.listItem()
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
                .items([
                    translations('92241e3a-beb4-4b1e-92e5-27962d2118d8'),
                    news,
                ])
        );

const jamiiOne = S.listItem()
    .title('Jamii.one')
    .icon(MdBusiness)
    .child(S.list().title('Jamii.one').items([siteConfig, pages, routes]));

const newsletter = S.listItem()
    .title('Newsletter')
    .icon(MdEmail)
    .child(S.list().title('Newsletter').items([news]));

const jamiiAdmin = () => S.listItem()
    .title('Jamii Admin')
    .icon(MdComputer)
    .child(
        S.list()
            .title('Jamii Admin')
            .items([translations('ea17ae67-ce23-456a-84f8-5847afb1059f')])
    );

export default () => {
    const adminEntries = [languages, projects];

    return S.list()
        .title('Projects')
        .items([
            groupApp(),
            jamiiAcademy,
            jamiiGuide,
            jamiiOne,
            jamiiAdmin(),
            newsletter,
            S.divider(),
            ...adminEntries,
        ]);
};
/*
        .items([
            S.listItem()
                .title('Site config')
                .icon(MdSettings)
                .child(
                    S.editor()
                        .id('config')
                        .schemaType('site-config')
                        .documentId('global-config')
                ),
            S.listItem()
                .title('Pages')
                .icon(MdDashboard)
                .schemaType('page')
                .child(S.documentTypeList('page').title('Pages')),
            S.listItem()
                .title('Courses')
                .icon(MdAssignment)
                .schemaType('course')
                .child(S.documentTypeList('course').title('Courses')),
            S.listItem()
                .title('Lessons')
                .icon(MdDescription)
                .schemaType('lesson')
                .child(S.documentTypeList('lesson').title('Lessons')),
            S.listItem()
                .title('Routes')
                .schemaType('route')
                .child(S.documentTypeList('route').title('Routes')),
            S.listItem()
                .title('Translations')
                .child(
                    S.documentTypeList('project')
                        .title('Translations')
                        .child((projectId) =>
                            S.documentList()
                                .schemaType('translation')
                                .title('Translations')
                                .filter(
                                    '_type == "translation" && ($projectId == project._ref || !defined(project))'
                                )
                                .params({ projectId })
                        )
                ),
            ...S.documentTypeListItems().filter(hiddenDocTypes),
        ]
 */
