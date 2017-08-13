import React, { Component } from 'react';

class Header extends Component {

   render() {
	  return (
		 <header role="banner" className="nav-trigger bg-dot">
			<div className="welcome-wrapper">
				<div className="logo">
					<span className="logo-navy">F8 2017</span>
				</div>
				<div className="illustration-container" aria-hidden="true">
					<div className="flat-shapes-container">
						<svg className="poly"
							xmlns="http://www.w3.org/2000/svg" viewBox="408 0 64 60" version="1.1">
							<polygon stroke="none" fill-rule="evenodd" points="439.5 0 471.1 22.9 459 60 420 60 408 22.9" data-svg-origin="408 0" transform="matrix(1,0,0,1,0,0)"/>
						</svg>
						<svg className="square"
							xmlns="http://www.w3.org/2000/svg" viewBox="412 160 60 61" version="1.1">
							<polygon stroke="none" fill-rule="evenodd" points="472 160 472 220 412 220 412 160" data-svg-origin="412 160" transform="matrix(1,0,0,1,0,0)"/>
						</svg>
						<svg className="triangle"
							xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" version="1.1">
							<polygon stroke="none" fill-rule="evenodd" points="8 0 16 16 0 16" data-svg-origin="0 0" transform="matrix(1,0,0,1,0,0)"/>
						</svg>
						<svg className="circle"
							xmlns="http://www.w3.org/2000/svg" viewBox="410 480 60 60" version="1.1">
							<path d="M418.8 488.8C430.5 477.1 449.5 477.1 461.2 488.8 472.9 500.5 472.9 519.5 461.2 531.2 449.5 542.9 430.5 542.9 418.8 531.2 407.1 519.5 407.1 500.5 418.8 488.8" stroke="none" fill-rule="evenodd" data-svg-origin="410.02734375 480.02734375" transform="matrix(1,0,0,1,0,0)"/>
						</svg>
						<svg className="multi-shape multi-color-square"
							xmlns="http://www.w3.org/2000/svg" viewBox="713 8 60 61" version="1.1">
							<polygon className="bottom" stroke="none" fill-rule="evenodd" points="773 8 773 68 713 68"/>
							<polygon className="top" stroke="none" fill-rule="evenodd" points="713 68 713 8 773 8"/>
						</svg>
						<svg className="multi-shape multi-color-circle"
							xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 60" version="1.1">
							<path className="left" d="M30 60C13.43 60 0 46.57 0 30 0 13.43 13.43 0 30 0L30 60Z" id="Fill-110" stroke="none" fill-rule="evenodd"/>
							<path className="right" d="M30 60C46.57 60 60 46.57 60 30 60 13.43 46.57 0 30 0L30 60Z" id="Fill-112" stroke="none" fill-rule="evenodd"/>
						</svg>
						<svg className="multi-shape multi-color-triangle" viewBox="0 0 256 256" version="1.1"
							xmlns="http://www.w3.org/2000/svg">
							<polygon className="left" transform="translate(128.000000, 128.000000) scale(-1, 1) translate(-128.000000, -128.000000) " points="128 0 256 256 0 256 128 256"/>
							<polygon className="right" points="128 0 256 256 0 256 128 256"/>
						</svg>
					</div>
					<div id="scene">
						
					</div>
					<div className="mesh-arrows-one"></div>
					<div className="mesh-arrows-two"></div>
					<div className="arrow arrow-horz r-arrow r-space r-arrow-one"></div>
					<div className="arrow arrow-horz r-arrow r-space r-arrow-two"></div>
				</div>
				<div className="sidebar">
					<h1>Facebook Developer Conference</h1>
					<h2 className="strong">We’ll see ya next year!</h2>
					<a className="btn btn-info" href="/watch">Watch Videos</a>
				</div>
			</div>
			<div className="container-maxwidth">
				<div className="row">
					<nav className="navbar navbar--welcome col-md-12">
						<ul>
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
			</div>
		</header>
	  )
   }
}

export default Header;
