import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import Home from '../Home';

const layout = (props) => (
    <Aux>
        <Header/>
        <Home/>
        <Footer/>
        <div>Toolbar, sidedrawer..</div>
        <main>{props.children}</main>
    </Aux>

);
export default layout;