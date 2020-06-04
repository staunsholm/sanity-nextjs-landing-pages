// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import route from './documents/route';
import siteConfig from './documents/siteConfig';
import translation from './documents/translation';
import project from './documents/project';

// Object types
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';

// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import mailchimp from './objects/mailchimp';
import textSection from './objects/textSection';

import localeString from './objects/localeString';
import course from './documents/course';
import lesson from './documents/lesson';
import tips from './objects/tips';
import courseDescription from './objects/courseDescription';
import googlePlayButton from './objects/googlePlayButton';
import appStoreButton from './objects/appStoreButton';
import lessonList from './objects/lessonList';
import news from './documents/news';
import language from './documents/language';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    name: 'default',
    // Then proceed to concatenate our our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        course,
        lesson,
        page,
        route,
        siteConfig,
        translation,
        project,
        news,
        language,

        hero,
        tips,
        courseDescription,
        textSection,
        googlePlayButton,
        appStoreButton,
        lessonList,
        /*adviceImages,
        safetyChecklistButton,
        downloadButton,
        linkList,
        header,*/

        cta,
        embedHTML,
        figure,
        imageSection,
        internalLink,
        link,
        mailchimp,
        portableText,
        simplePortableText,
        localeString,
    ]),
});
