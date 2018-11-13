import React, { PureComponent } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavigationDrawer } from 'react-md';
import NavItemLink from "../../routes/NavItemLink";
import Home from "../Home/Home";
import { upperFirst } from 'lodash/string';
import Products from "../../containers/Products/Products";
import Contact from "../Contact/Contact";

const navItems = [
    {
        label: 'Home',
        to: '/',
        exact: true,
        icon: 'inbox',
    },
    {
        label: 'Products',
        to: '/products',
        exact: true,
        icon: 'shopping_cart',
    },
    {
        label: 'Contact',
        to: '/contact',
        exact: true,
        icon: 'contact_support',
    }
];

const styles = {
    content: { minHeight: 'auto' },
};

const toTitle = (str) => {
    return str.split(/-|[A-Z]+/).reduce((s, split) => {
        const capititalized = split.match(/svg$/) ? 'SVG' : upperFirst(split);
        return `${s ? `${s} ` : ''}${capititalized}`;
    }, '');
};

class Nav extends PureComponent{
    static propTypes = {
        location: PropTypes.object.isRequired,
    };

    constructor(props) {
        super();
        this.state = { toolbarTitle: this.getCurrentTitle(props) };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ toolbarTitle: this.getCurrentTitle(nextProps) });
    }

    getCurrentTitle = ({ location: { pathname } }) => {
        const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1);
        if (lastSection === 'navigation-drawers') {
            return 'Inbox';
        } else if(lastSection === ''){
            return 'Home'
        }else if(lastSection.includes("/")){
            return 'Products'
        }
        return toTitle(lastSection);
    };

    render(){
        const { toolbarTitle } = this.state;
        const { location } = this.props;
        return (
            <NavigationDrawer
                toolbarTitle={toolbarTitle}
                mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
                contentId="main-demo-content"
                contentStyle={styles.content}
                contentClassName="md-grid"
            >
                <Switch key={location.pathname}>
                    <Route exact path={navItems[0].to} component={Home}/>
                    <Route exact path={navItems[1].to} component={Products}/>
                    <Route exact path={navItems[1].to + '/:category'} component={Products}/>
                    <Route exact path={navItems[2].to} component={Contact}/>
                </Switch>
            </NavigationDrawer>
        );
    }
}


export default withRouter(Nav);
