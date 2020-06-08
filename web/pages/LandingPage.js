import PropTypes from 'prop-types';
import React, { Component } from 'react';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import Layout from '../components/Layout';
import client from '../client';
import RenderSections from '../components/RenderSections';

const builder = imageUrlBuilder(client);
const pageQuery = groq`
*[_type == "route" && slug.current == $slug][0]{
  page-> {
    ...,
    content[] {
      ...,
      course->,
      lessons[]-> {
        ...,
        "slug": *[_type == "route" && references(^._id)][0].slug
      },
      "courseSlug": *[_type == "route" && references(^.course._ref)][0].slug,
      cta { ..., route-> },
    }
  }
}
`;

class LandingPage extends Component {
  static propTypes = {
    title: PropTypes.object,
    description: PropTypes.string,
    // TODO: improve types
    disallowRobots: PropTypes.any,
    openGraphImage: PropTypes.any,
    content: PropTypes.any,
    config: PropTypes.any,
    slug: PropTypes.any,
  };

  static async getInitialProps({ query }) {
    const { slug } = query;

    if (!query) {
      console.error('no query');
      return;
    }

    if (slug && slug !== '/') {
      return client.fetch(pageQuery, { slug }).then((res) => {
        return { ...res.page, slug };
      });
    }

    // Frontpage
    if (slug && slug === '/') {
      return client
        .fetch(
          groq`
                      *[_id == "jamii-academy-config"][0]{
                        frontpage -> {
                          ...,
                          content[] {
                            ...,
                            course->,
                            lessons { lesson-> },
                            "courseSlug": *[_type == "route" && references(^.course._ref)][0].slug,
                            cta { ..., route-> },
                          }
                        }
                      }
                    `
        )
        .then((res) => ({ ...res.frontpage, slug }));
    }

    return null;
  }

  render() {
    const {
      title,
      description,
      disallowRobots,
      openGraphImage,
      content = [],
      config = {},
      slug,
    } = this.props;

    const openGraphImages = openGraphImage
      ? [
          {
            url: builder.image(openGraphImage).width(800).height(600).url(),
            width: 800,
            height: 600,
            alt: title.en,
          },
          {
            // Facebook recommended size
            url: builder.image(openGraphImage).width(1200).height(630).url(),
            width: 1200,
            height: 630,
            alt: title.en,
          },
          {
            // Square 1:1
            url: builder.image(openGraphImage).width(600).height(600).url(),
            width: 600,
            height: 600,
            alt: title.en,
          },
        ]
      : [];

    return (
      <Layout config={config}>
        {content && <RenderSections sections={content} />}
      </Layout>
    );
  }
}

export default LandingPage;
