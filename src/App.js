import React, { Component } from 'react';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

class App extends Component {
	
  render() {
    return (       
		<div className="site-wrapper">
			<Header></Header>
				{this.props.children}
			<Footer></Footer>
	    </div>
    );
  }
}

export default App;
