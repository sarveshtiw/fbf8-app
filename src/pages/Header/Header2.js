import React, { Component } from 'react';
import { Link } from 'react-router';

class Header2 externds Component {
 
   render(){
	return (
		<header role="banner">
		   <nav class="navbar navbar--condensed is-sticky" style="background-color: rgb(255, 249, 235); transform: matrix(1, 0, 0, 1, 0, 0);">
		     <div class="container-maxwidth">
			<div class="row">
			   <div class="col-md-2 navbar-logo">
				<h1 class="logo"><a href="/">Facebook Developer Conference &mdash; 2017</a></h1>
			   </div>
			  <div class="col-md-2 navbar-date"><span>April 18 &amp; 19<br>San Jose, California</span></div>
			  <ul class="col-md-8 navbar-list">
				<li><a class="active" href="/about">About</a></li>
				<li><a href="/schedule">Schedule</a></li>
				<li><a href="/getting-here">Getting Here</a></li>
				<li><a href="/meetups">Meetups</a></li>
				<li><a href="/watch">Watch F8</a></li>
				<li><a href="/registration">Register</a></li>
			  </ul>
			</div>
		      </div>
		   </nav>
		</header>

	);
   }

}
