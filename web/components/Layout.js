import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
    const { config, children } = props;

    if (!config) {
        console.error('Missing config');
        return <div>Missing config</div>;
    }

    const {
        title,
        mainNavigation,
        footerNavigation,
        footerText,
        logo,
    } = config;

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width, viewport-fit=cover"
                />
            </Head>
            <div className="container">
                <Header title={title} navItems={mainNavigation} logo={logo} />
                <div className="content">{children}</div>
                <Footer navItems={footerNavigation} text={footerText} />
            </div>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    config: PropTypes.shape({
        title: PropTypes.string,
        mainNavigation: PropTypes.arrayOf(PropTypes.object),
        footerNavigation: PropTypes.arrayOf(PropTypes.object),
        footerText: PropTypes.arrayOf(PropTypes.object),
        logo: PropTypes.shape({
            asset: PropTypes.shape({
                url: PropTypes.string,
            }),
        }),
        url: PropTypes.string,
    }),
};

export default Layout;
