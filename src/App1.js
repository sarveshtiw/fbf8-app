import React, { Component } from 'react';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

class App1 extends Component {
	
  render() {
    return (       
		<div className="site-wrapper">
			<Header></Header>
			 <Home></Home>	
			 {this.props.children}
			<Footer></Footer>
	    </div>
    );
  }
}

export default App1;
