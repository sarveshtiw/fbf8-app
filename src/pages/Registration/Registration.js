import React, { Component } from 'react';

class Registration extends Component {
   
   constructor(props){
	  super(props);
	  this.state = { 
		  username : '',
		  first_name : '',
		  last_name : '',
		  email : '',
		  mobile : '',
		  dob_day : '',
		  dob_month : '',
		  dob_year : '',
		  password: '',		  
	  };
	  this.submitRegistration = this.submitRegistration.bind(this);
   }
   
   submitRegistration() {
	   if(this.state.username === ""){
			alert("Username is required.");
		    return false;
	   }else if(this.state.first_name === ""){
			alert("Firstname is required.");
		    return false;
	   }else if(this.state.last_name === ""){
			alert("Lastname is required.");
		    return false;
	   }else if(this.state.email === ""){
			alert("Email is required.");
		    return false;
	   }else if(this.state.mobile === ""){
			alert("Mobile is required.");
		    return false;
	   }else{
			alert("Thanks");  
	   } 
   }
	
   render() {
	   return (
			<main role="main" className="bg-dot">
				<div className="container-maxwidth">
					<div className="row">
						<div className="col-md-10 col-md-offset-1 col-lg-12 col-lg-offset-0">
							<div className="about-content">
								<h1>Registration Page</h1>
								<div className="registration-container">
									<div className="log_sign">
										<a href="login" class="pri_btn">Already have an account?</a>
									</div>
									<div className="input_wrapper">
										<div className="display_text">
											<span>Get started now and let the fun begins</span>
										</div>
										<div className="sign_up_div">
											<form className="sign_up" id="sign_up" action="" method="post">
												<input type="text" name="s_username" autocomplete="off" placeholder="Username" className="s_username big_input" mssg="" maxlength="30" autofocus />
												<div className="username_checker">
													<span className="checker_text">username not available</span>
													<span className="checker_icon">
															<i className="fa fa-frown-o" aria-hidden="true"></i>
													 </span>
												</div>
												<input type="text" name="first_name" autocomplete="off" placeholder="First name" className="s_firstname small_input"  maxlength="20" />
												<input type="text" name="surname" autocomplete="off" placeholder="Surname" className="s_surname small_input" maxlength="20"  />
												<input type="email" name="email" autocomplete="off" placeholder="Email" className="s_email big_input" maxlength="150" />
												<input type="text" name="mobile" autocomplete="off" placeholder="Mobile No." className="s_email big_input" maxlength="30" />
												<select name="dob_day" id="dob_day" autocomplete="off">
													<option value="">Select Date</option>
													<option value="1">01</option>
													<option value="2">02</option>
													<option value="3">03</option>
													<option value="4">04</option>
													<option value="5">05</option>
													<option value="6">06</option>
													<option value="7">07</option>
													<option value="8">08</option>
													<option value="9">09</option>
													<option value="10">10</option>
												</select>&nbsp;&nbsp;&nbsp;&nbsp;
												<select name="dob_month" id="dob_month" autocomplete="off">
													<option value="">Select Month</option>
													<option value="1">01</option>
													<option value="2">02</option>
													<option value="3">03</option>
													<option value="4">04</option>
													<option value="5">05</option>
													<option value="6">06</option>
													<option value="7">07</option>
													<option value="8">08</option>
													<option value="9">09</option>
													<option value="10">10</option>
												</select>&nbsp;&nbsp;&nbsp;&nbsp;
												<select name="dob_year" id="dob_year" autocomplete="off">
													<option value="">Select Year</option>
													<option value="2011">2011</option>
													<option value="2012">2012</option>
													<option value="2013">2013</option>
													<option value="2014">2014</option>
													<option value="2015">2015</option>
													<option value="2016">2016</option>
													<option value="2017">2017</option>
													<option value="2018">2018</option>
													<option value="2019">2019</option>
													<option value="2020">2020</option>
												</select>
												<input type="password" name="password" autocomplete="off" placeholder="Password" className="s_password big_input" maxlength="32" id="password" />
												<span className="show_psswrd" id="show_psswrd">
														  <i className="fa fa-lock" aria-hidden="true"></i>
												</span>
												<div className="psswrd_strength">
													<div className="one"></div>
													<div className="two"></div>
													<div className="three"></div>
													<div className="four"></div>
												</div>
												<br />
												<input type="checkbox" id="terms" name="terms" className="s_terms" />
												<label for="s_terms" className="terms">I agree to <a href="terms" className="a_pri">Facebook Terms</a></label>
												<input type="submit" name="s_submit" value="Sign up for free" className="s_submit" onClick={this.submitRegistration} />
											</form>
										</div>
									</div>

									<div className="notify">
										<span></span>
									</div>

								</div>

								<div className="overlay-2"></div>

							</div>
						</div>
					</div>
				</div>
			</main>
	    );
	 }
}

export default Registration;
