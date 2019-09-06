import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Layout>
          <BurgerBuilder/>
        </Layout>
        <Footer />
      </div>
    )
  }
}
export default App