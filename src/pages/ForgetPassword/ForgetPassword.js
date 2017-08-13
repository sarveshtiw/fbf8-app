import React, { Component } from 'react';

class ForgetPassword extends Component {
	
   render() {
	   return (
			<main role="main" className="bg-dot">
				<div className="container-maxwidth">
					<div className="row">
						<div className="col-md-10 col-md-offset-1 col-lg-12 col-lg-offset-0">
							<div className="about-content">
								<h1>Forget Password Page</h1>
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
												<input type="text" name="s_username" autocomplete="off" placeholder="Username" className="s_username big_input" spellcheck="false" mssg="" maxlength="30" required autofocus />
												<input type="submit" name="s_submit" value="forget me" className="s_submit" />
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

export default ForgetPassword;
