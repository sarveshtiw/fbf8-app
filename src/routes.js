import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import App1 from './App1';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Schedule from './pages/Schedule/Schedule';
import Getting from './pages/Getting-here/Getting-here';
import Meetups from './pages/Meetups/Meetups';
import Watch from './pages/Watch/Watch';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Faqs from './pages/Faqs/Faqs';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';

const Routes = (props) => (
 <Router {...props}>
 
   <Route path="/" component={App1}>
       <Route path="/home" component={Home} />
   </Route>
   <Route path="/" component={App}>
       <Route path="/about" component={About} />
       <Route path="/schedule" component={Schedule} />
       <Route path="/getting-here" component={Getting} />
       <Route path="/meetups" component={Meetups} />
       <Route path="/watch" component={Watch} />
       <Route path="/registration" component={Registration} />
       <Route path="/login" component={Login} />
       <Route path="/faqs" component={Faqs} />
       <Route path="/forgetpassword" component={ForgetPassword} />
       <Route path="/contact" component={Contact} />
       <Route path="*" component={NotFound} />
   </Route>
 </Router>
);
export default Routes;
