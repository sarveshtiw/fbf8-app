import React, { Component } from 'react';

class Footer extends React.Component {

   render() {
	return (		
		<footer role="contentinfo" className="navbar Footer">
		    <div className="container-maxwidth">
			<div className="row">
			    <div className="col-md-5">
				<h1 className="logo">
					<a href="/">Facebook Developer Conference &mdash; 2017</a>
				</h1>
				<span className="navbar-date">April 18, 19
					<br />San Jose, California
				</span>
				<div className="share-btn-container"></div>
			    </div>
			    <nav className="col-md-7">
				<ul className="navbar-list">
				    <li>
				        <a href="/about">About</a>
				    </li>
				    <li>
				        <a href="/schedule">Schedule</a>
				    </li>
				    <li>
				        <a href="/getting-here">Getting Here</a>
				    </li>
				    <li>
				        <a href="/meetups">Meetups</a>
				    </li>
				    <li>
				        <a href="/watch">Watch F8</a>
				    </li>
				    <li>
				        <a href="/registration">Register</a>
				    </li>
				</ul>
			    </nav>
			</div>
			<div className="row secondary-content">
			    <div className="col-md-3">
				<small>&copy; 2017 Facebook Developers</small>
			    </div>
			    <nav className="col-md-9">
				<ul className="secondary-nav">
				    <li>
				        <a href="https://developers.facebook.com?utm_source=fbf8&amp;utm_medium=web&amp;utm_campaign=f8_2017">Developers Site</a>
				    </li>
				    <li>
				        <a href="https://www.facebook.com/FacebookForDevelopers">Facebook Page</a>
				    </li>
				    <li>
				        <a href="/faqs">FAQs</a>
				    </li>
				    <li>
				        <a href="/code-of-conduct">Code of Conduct</a>
				    </li>
				    <li>
				        <a href="https://www.facebook.com/legal/terms">Terms</a>
				    </li>
				    <li>
				        <a href="https://www.facebook.com/about/privacy">Privacy</a>
				    </li>
				</ul>
			    </nav>
			</div>
		    </div>
		</footer>
	)
   }
}

export default Footer;
