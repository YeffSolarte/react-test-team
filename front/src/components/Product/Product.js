import React, { Component } from 'react';
import './Product.css';


import {
    Cell,
} from 'react-md';

class Product extends Component {
    constructor(props) {
        super();
    }

    render() {
        const {product, listStyle} = this.props;
        const trimDesc = product.description.length >= 103 ?
            `${product.description.substring(0, 100)}...` : product.description;
        const renderCategories = product.categories.map((elem, idx) => (
            <span
                key={elem}
            >
                      {elem} {product.categories.length - 1 !== idx && <span> , </span>}
                    </span>
        ));
        return (
            <Cell size={listStyle}>
                <div className="customProduct" >
                    <div className="custom-image" style={{backgroundImage: `url(${product.photo})`}}>
                    </div>
                    <div className="custom-content">
                                <span className="custom-title">
                                    <strong>{product.name}</strong>
                                </span>
                        <div className="sub-categories">
                            {renderCategories} - {product.brand}
                        </div>
                        <span className="custom-price">
                                    <strong>Price: </strong>{product.price}
                                </span>
                        <span className="custom-stock">
                                    <strong>Stock: </strong>{product.stock}
                                </span>
                        <div className="custom-description">
                            <strong>Description: </strong> {trimDesc}
                        </div>
                    </div>
                </div>
            </Cell>
        )
    }
}
export default Product;
