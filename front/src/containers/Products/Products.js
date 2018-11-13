import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Products.css';
import Product from '../../components/Product/Product';


import {
    Grid,
    Cell,
    Button,
    FontIcon,
    TextField,
} from 'react-md';

import {fetchProducts} from "../../actions/simpleAction";
import Categories from "../Categories/Categories";
import WrapMessage from "../../components/WrapMessage/WrapMessage";

class Products extends Component {
    constructor(props) {
        super();
        this.state = {
            listStyle : 12,
            products: props.products.products,
            searchValue: '',
        };
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        const category = params.category || 'all';
        this.props.fetchProducts(category);
    }

    componentWillReceiveProps(nextProps) {
        const { params } = this.props.match;
        this.setState({ products: nextProps.products.products });
        const currentCategory = params.category || 'all';
        const nextCategory = nextProps.match.params.category || 'all';
        if (currentCategory !== nextCategory) {
            this.props.fetchProducts(nextCategory);
        }
    }

    handleClickButton = (e) => {
        if (e === 'view_list') {
            if (this.state.listStyle === 12) return;
            this.setState({
                listStyle : 12
            });
        } else {
            if (this.state.listStyle === 6) return;
            this.setState({
                listStyle : 6
            });
        }
    };

    handleChangeSearch = (value) => {
        const { products } = this.props.products;
        const filteredProds = products
            .filter(elem => elem.name.match(new RegExp(value, 'ig')));
        this.setState({
            searchValue: value,
            products: value ? filteredProds : products,
        });
    };

    render() {
        const {
            products: {
                error,
                loaded,
                loading,
                count,
                hideCount,
            },
        } = this.props;
        const {listStyle, products, searchValue} = this.state;
        const activeCategory = this.props.match.params.category || 'all';
        const hiddenContent = hideCount ? (<span> - Hidden:<strong>{hideCount}</strong> </span>) : '';
        const productsList = products.length ? (
            products.map(product => {
                return (
                    <Product product={product} listStyle={listStyle} key={product.id}/>
                )
            })
            ) : (
            <div>No Produts Yet</div>
        );
        return (
            <div className="products-page">
                <Grid >
                    <Cell key={"categories"} size={3}>
                        <Categories active={activeCategory}/>
                    </Cell>
                    <Cell key={"products"} size={9}>
                        <section className="products-section">
                            <WrapMessage error={error} loading={loading} loaded={loaded}>
                                <div className="products-section-buttons">
                                    <Button icon primary swapTheming id="view_list" onClick={() => this.handleClickButton('view_list')}>view_list</Button>
                                    <Button icon primary swapTheming id="view_module" onClick={() => this.handleClickButton('view_module')}>view_module</Button>
                                    <TextField
                                        id="search-product"
                                        label="Search Product"
                                        type="text"
                                        value={searchValue}
                                        onChange={this.handleChangeSearch}
                                        rightIcon={<FontIcon>search</FontIcon>}
                                        size={100}
                                        fullWidth={false}
                                    />
                                    <p className="hiddenProducts">
                                        Showing <strong>{count}</strong> products {hiddenContent}
                                    </p>
                                </div>
                                <div className="products-section-products">
                                    <Grid>
                                        {productsList}
                                    </Grid>

                                </div>
                            </WrapMessage>
                        </section>
                    </Cell>
                </Grid>
            </div>
        );
    }

    simpleAction = (event) => {
        this.props.simpleAction();
    }
}

const mapStateToProps = state => {
    return ({
        products: state.productsReducer,
    });
};

const mapDispatchToProps = dispatch => ({
    fetchProducts: (category) => dispatch(fetchProducts(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
