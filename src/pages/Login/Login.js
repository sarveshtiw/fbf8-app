import React, { Component } from 'react';

class Login extends Component {
	
   render() {
	   return (
			<main role="main" className="bg-dot">
				<div className="container-maxwidth">
					<div className="row">
						<div className="col-md-10 col-md-offset-1 col-lg-12 col-lg-offset-0">
							<div className="about-content">
								<h1>Login Page</h1>
								<div className="registration-container">
									<div className="log_sign">
										<a href="registration" class="pri_btn">Need an account?</a>
									</div>
									<div className="input_wrapper">
										<div className="display_text">
											<span>Get started again</span>
										</div>
										<div className="sign_up_div">
											<form className="sign_up" id="sign_up" action="" method="post">
												<input type="text" name="s_username" autocomplete="off" placeholder="Username" class="s_username big_input" spellcheck="false" mssg="" maxlength="32" required autofocus />
												<div class="username_checker u_c">
												  <span class="checker_icon">
													<i class="fa fa-frown-o" aria-hidden="true"></i>
												  </span>
												</div>
												<input type="password" name="s_password" autocomplete="off" placeholder="Password" id="login_password" class="s_password big_input" required maxlength="32" />
												<span class="show_psswrd log_show_psswrd" id="show_psswrd">
												  <i class="fa fa-lock" aria-hidden="true"></i>
												</span>
												<input type="submit" name="s_submit" value="Log in to continue" class="s_submit" />
											  </form>
											  <div class="forgot_psswrd">
												<a href="forgetPassword" class="a_pri" alt="Forgot your password">Forgot your password?</a>
											  </div>
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

export default Login;
