import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import SVG from 'react-inlinesvg';
import styles from './Header.module.css';
import HamburgerIcon from './icons/Hamburger';

class Header extends Component {
    state = { showNav: false };

    static propTypes = {
        router: PropTypes.shape({
            pathname: PropTypes.string,
            query: PropTypes.shape({
                slug: PropTypes.string,
            }),
            events: PropTypes.any,
        }),
        title: PropTypes.string,
        navItems: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.object.isRequired,
                slug: PropTypes.shape({
                    current: PropTypes.string,
                }).isRequired,
            })
        ),
        logo: PropTypes.shape({
            asset: PropTypes.shape({
                url: PropTypes.string,
            }),
            logo: PropTypes.string,
        }),
    };

    componentDidMount() {
        const { router } = this.props;
        router.events.on('routeChangeComplete', this.hideMenu);
    }

    componentWillUnmount() {
        const { router } = this.props;
        router.events.off('routeChangeComplete', this.hideMenu);
    }

    hideMenu = () => {
        this.setState({ showNav: false });
    };

    handleMenuToggle = () => {
        const { showNav } = this.state;
        this.setState({
            showNav: !showNav,
        });
    };

    handleChangeLanguage = (lang) => {
        document.documentElement.lang = lang;
    };

    renderLogo = (logo) => {
        if (!logo || !logo.asset) {
            return null;
        }

        if (logo.asset.extension === 'svg') {
            return <SVG src={logo.asset.url} className={styles.logo} />;
        }

        return (
            <img
                src={logo.asset.url}
                alt={logo.title}
                className={styles.logo}
            />
        );
    };

    render() {
        const { title, navItems, router, logo } = this.props;
        const { showNav } = this.state;

        return (
            <div className={styles.root} data-show-nav={showNav}>
                <h1 className={styles.branding}>
                    <Link href="/">
                        <a title={title.en}>{this.renderLogo(logo)}</a>
                    </Link>
                </h1>
                <nav className={styles.nav}>
                    <ul className={styles.navItems}>
                        {navItems &&
                            navItems.map((item) => {
                                const { slug, title, _id } = item;
                                const isActive =
                                    router.pathname === '/LandingPage' &&
                                    router.query.slug === slug.current;
                                return (
                                    <li key={_id} className={styles.navItem}>
                                        <Link href={`/${slug.current}`}>
                                            <a
                                                data-is-active={
                                                    isActive ? 'true' : 'false'
                                                }
                                            >
                                                {title.en}
                                            </a>
                                        </Link>
                                    </li>
                                );
                            })}
                        <li className={styles.navItem}>
                            <Link href="/en">
                                <a
                                    onClick={() =>
                                        this.handleChangeLanguage('en')
                                    }
                                >
                                    English
                                </a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/am">
                                <a
                                    onClick={() =>
                                        this.handleChangeLanguage('am')
                                    }
                                >
                                    Amharic
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <button
                        className={styles.showNavButton}
                        onClick={this.handleMenuToggle}
                    >
                        <HamburgerIcon className={styles.hamburgerIcon} />
                    </button>
                </nav>
            </div>
        );
    }
}

export default withRouter(Header);
