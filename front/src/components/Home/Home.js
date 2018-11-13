import React, { Component } from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import {Divider, FontIcon, List, ListItem} from "react-md";

class Home extends Component {
  render() {
    return (
      <div className="HomeComponent">
          HOME
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
export default Home;
