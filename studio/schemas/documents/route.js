import { MdLink } from 'react-icons/lib/md';

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  icon: MdLink,
  fields: [
    {
      name: 'project',
      type: 'reference',
      description: 'Choose project that uses this route',
      to: { type: 'project' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'page',
      type: 'reference',
      description: 'Select the page that this route should point to',
      to: [{ type: 'page' }, { type: 'course' }, { type: 'lesson' }],
    },
    {
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml',
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines',
    },
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'page.title.en',
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === '/' ? '/' : `/${slug}`,
        subtitle: `Page: ${pageTitle}`,
      };
    },
  },
};
