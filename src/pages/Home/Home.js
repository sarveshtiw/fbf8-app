import React, { Component } from 'react';


class Home extends Component {

   render() {
      return (
		 <main role="main">
		    <section className="home-callout about">
				<div className="home-callout-inner">
					<div className="arrow-container" aria-hidden="true"></div>
					<div className="arrow-vert-container" aria-hidden="true">
						<div className="arrow arrow-vert b-arrow b-space" aria-hidden="true"></div>
					</div>
					<div className="container-maxwidth">
						<div className="row">
							<div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-0">
								<h2 className="home-callout-heading">Experience new products and possibilities</h2>
								<p className="home-callout-content">Join us for two days of interactive demos, announcements, and best practices that will keep you looking ahead. Attend sessions and interact with Facebook products and experts. Whether you’re with us in San Jose or tuning in from around the world, there’s an F8 for everyone.</p>
							</div>
							<div className="col-md-10 col-md-offset-1 col-lg-3 col-lg-offset-1 sidebar">
								<div>
									<h4 className="home-callout-subheading">Where:</h4>
									<span>McEnery Convention Center 
										<em>San Jose, CA</em>
									</span>
								</div>
								<div>
									<h4 className="home-callout-subheading">When:</h4>
									<span>Tuesday and Wednesday 
										<em>April 18 &amp; 19, 2017</em>
									</span>
								</div>
								<a href="/about" className="btn btn-block btn-outline-yellow">Learn about F8</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="home-callout schedule">
				<div className="home-callout-inner">
					<div className="arrow-container" aria-hidden="true"></div>
					<div className="container-maxwidth">
						<div className="row">
							<div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-0">
								<h2 className="home-callout-heading">Explore F8</h2>
								<p className="home-callout-content">This year's sessions feature a wide range of topics across the Facebook family of apps and services &ndash; with relevance to developers and businesses. With sessions and experiences featuring the latest products and innovations, there’s something for everyone. You’ll learn about new features, best practices and ways to make the world more open and connected.</p>
							</div>
							<div className="col-md-10 col-md-offset-1 col-lg-3 col-lg-offset-1 sidebar">
								<div>
									<h4 className="home-callout-subheading">See Sessions On:</h4>
									<ul>
										<li>
											<span>Camera</span>
										</li>
										<li>
											<span>Virtual Reality</span>
										</li>
										<li>
											<span>Messenger</span>
										</li>
										<li>
											<span>Media &amp; Publishers</span>
										</li>
										<li>
											<span>Engineering &amp; Open Source</span>
										</li>
										<li>
											<span>And many more…</span>
										</li>
									</ul>
								</div>
								<a href="/schedule" className="btn btn-block btn-outline-navy">See Full Schedule</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="home-callout native-apps bg-dot">
				<div className="home-callout-inner">
					<div className="arrow-container" aria-hidden="true"></div>
					<div className="container-maxwidth">
						<div className="row">
							<div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-0">
								<h2 className="home-callout-heading">Download the app</h2>
								<p className="home-callout-content">See the full F8 schedule, save and share sessions, watch videos, and stay up to date throughout F8!</p>
							</div>
							<div className="col-md-10 col-md-offset-1 col-lg-3 col-lg-offset-1 sidebar">
								<div>
									<h4 className="home-callout-subheading">With new features:</h4>
									<ul>
										<li>
											<span>View the conference schedule</span>
										</li>
										<li>
											<span>Watch keynotes and sessions</span>
										</li>
										<li>
											<span>Explore product demos</span>
										</li>
										<li>
											<span>See what sessions your friends are attending</span>
										</li>
									</ul>
								</div>
								<div className="download-container">
									<a className="btn-download app-store" href="https://itunes.apple.com/jm/app/f8/id853467066">Download on the App Store</a>
									<a className="btn-download google-play" href="https://play.google.com/store/apps/details?id=com.facebook.f8">Android app on Google Play</a>
								</div>
							</div>
							<div className="screenshot">
								<img src="/f8-2017-live/images/bg-home-app-screens.png" srcset="/f8-2017-live/images/bg-home-app-screens.png, /f8-2017-live/images/bg-home-app-screens@2x.png 2x" alt="iOS and Android application screenshots" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="home-callout meetups">
					<div className="home-callout-inner">
						<div className="arrow-container" aria-hidden="true"></div>
						<div className="container-maxwidth">
							<div className="row">
								<div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-0">
									<h2 className="home-callout-heading">Connect at an F8 meetup</h2>
									<p className="home-callout-content">Can’t make it to San Jose but want to experience F8? F8 Meetups are happening around the world! Connect with other developers and businesses in your community to watch the opening keynote and experience the excitement of F8 &mdash; together.</p>
									<div className="map-animation-container"></div>
								</div>
								<div className="col-md-10 col-md-offset-1 col-lg-3 col-lg-offset-1 sidebar">
									<div>
										<h4 className="home-callout-subheading">Find a meetup:</h4>
										<ul>
											<li>
												<span>Mexico City</span>
											</li>
											<li>
												<span>Gurgaon</span>
											</li>
											<li>
												<span>Berlin</span>
											</li>
											<li>
												<span>Lagos</span>
											</li>
											<li>
												<span>And many more…</span>
											</li>
										</ul>
									</div>
									<a href="/meetups" className="btn btn-block btn-outline-pink">Sign up now</a>
								</div>
							</div>
						</div>
						<div className="canvasWrapper">
							<canvas width="877" height="302" className="animation"></canvas>
						</div>
					</div>
				</section>
				<section className="home-callout videos">
					<div className="container-maxwidth home-callout-inner">
						<div className="row">
							<div className="globe-container">
								<div id="globe"></div>
							</div>
							<div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
								<h2 className="home-callout-heading">Watch it online</h2>
								<p className="home-callout-content">Experience F8 wherever you are. Register now for online access. Tune in live for the keynotes and watch sessions on demand. Also be sure to join our F8 Online Experience event on Facebook for content and updates as we count down to F8.</p>
								<a href="/watch" className="btn btn-outline-navy">Sign up to watch</a>
							</div>
						</div>
					</div>
				</section>
				<section className="home-callout home-gallery">
					<div className="gallery-img one" style={{transform: "matrix(1, 0, 0, 1, 0, 0);"}}></div>
					<div className="gallery-img two" style={{transform: "matrix(1, 0, 0, 1, 0, 0);"}}></div>
				</section>
		  </main>
	  )
   }
}

export default Home;
