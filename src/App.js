import React, { Component } from 'react'
import Header from './Components/Shared/Header'
import Footer from './Components/Shared/Footer'
import Home from './Components/Home'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer/>
      </div>
    )
  }
}
export default App