import React, { Component } from 'react';

class About extends Component {

  render() {
     return (      
		<main role="main" className="bg-dot">
			<div className="container-maxwidth">
				<div className="row">
					<div className="col-md-10 col-md-offset-1 col-lg-12 col-lg-offset-0">
						<div className="about-content">
						    <h1> About Us </h1>
							<p>See what the future holds at F8</p>
							<p>Join us for our annual 2-day event, where developers and businesses come together to explore the future of technology. Learn how Facebook connects the world through new products and innovation. This year’s event is bigger than ever &ndash; with more than 50 sessions, interactive experiences, and the opportunity to meet one-on-one with members of the Facebook team.</p>
							<h4 className="logo-list-header">Connect with people from:</h4>
						</div>
					</div>
				</div>
			</div>
		</main>
      );
  }
}

export default About;
