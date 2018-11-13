import { BrowserRouter } from 'react-router-dom';
import React, { PureComponent } from 'react';
//components
import Nav from '../components/Nav/Nav';



class AppRoutes extends PureComponent{

    render(){
        return (
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        );
    }
}

export default AppRoutes;
