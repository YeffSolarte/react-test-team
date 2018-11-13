import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Categories.css';
import { Link } from 'react-router-dom';
import {
    List,
    ListItem,
    Divider,
    FontIcon,
} from 'react-md';

import {fetchCategories} from "../../actions/categoriesActions";
import WrapMessage from "../../components/WrapMessage/WrapMessage";

class Categories extends Component {
    constructor(props) {
        super();
    }

    componentDidMount(){
        this.props.fetchCategories();
    }

    render() {
        const {
            categories: {
                categories,
                error,
                loaded,
                loading,
            },
            active,
        } = this.props;
        const categoriesList = categories.map(category => {
            const catNormalized = category.toLowerCase();
            const isActive = active.toLowerCase() === catNormalized;
            let catIcon;
            if (catNormalized === 'services') {
                catIcon = 'touch_app';
            } else if (catNormalized === 'tech') {
                catIcon = 'important_devices';
            } else if (catNormalized === 'office') {
                catIcon = 'work';
            }
            return (
                <Link key={catNormalized} to={`/products/${category}`} >
                    <ListItem
                        className={isActive ? 'category_active' : ''}
                        primaryText={category}
                        leftIcon={<FontIcon key="list">{catIcon}</FontIcon>}
                    />
                </Link>
            )
        });
        return (
            <div className="categories-aside">
                <h4>CATEGORIES</h4>
                <Divider />
                <List>
                    <WrapMessage
                        error={error}
                        loading={loading}
                        loaded={loaded}
                    >
                        <Link to="/products">
                            <ListItem
                                primaryText="All"
                                leftIcon={<FontIcon key="list">list</FontIcon>}
                            />
                        </Link>
                        <Divider />
                        {categoriesList}
                    </WrapMessage>

                </List>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        categories: state.categoriesReducer,
    });
};

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
