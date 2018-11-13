import React, { PureComponent } from 'react';
import './Clients.css';
import {Divider, FontIcon, List, ListItem} from "react-md";
import {Link} from "react-router-dom";
import WrapMessage from "../WrapMessage/WrapMessage";

class Clients extends PureComponent {
    render() {
        return (
            <div className="ClientsComponent">
                CLIENTS

                <List>
                    <Link to="/products">
                        <ListItem
                            primaryText="Products"
                            leftIcon={<FontIcon key="list">shopping_cart</FontIcon>}
                        />
                    </Link>
                    <Divider />
                    <Link to="/contact">
                        <ListItem
                            primaryText="Contact"
                            leftIcon={<FontIcon key="list">contact_support</FontIcon>}
                        />
                    </Link>
                </List>
            </div>
        );
    }
}

export default Clients;
