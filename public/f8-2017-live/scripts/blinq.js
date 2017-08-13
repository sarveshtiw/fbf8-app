var blinqRoot = '/f82017'

function Registration(){}

Registration.prototype.init = function() {
  this.status = 'new';
  this.session_token = '';
}

Registration.prototype.loginWithFacebook = function(params, callback) {
  $.post( params.url, params.form_data, function(result) {
    var regs = RegistrationProcessor.getInstance();
    if (result.success==true) {
      regs.setSessionInfo(result);
    }
    callback(result);
  });
}

Registration.prototype.checkIfEmailAttendeeExists = function(params,callback) {
  $.post( params.url, params.form_data, function(result) {
    callback(result);
  });
}

Registration.prototype.loginWithEmail = function(params, callback) {
  $.post( params.url, params.form_data, function(result) {
    var regs = RegistrationProcessor.getInstance();
    if (result.success==true) {
      regs.setSessionInfo(result);
    }
    callback(result);
  });
}

Registration.prototype.submitRegistration = function(params) {
  this.status = 'busy';
  $.post( params.url, params.form_data, function(result) {
    var regs = RegistrationProcessor.getInstance();

    if (result.success==true) {
      regs.status = 'registration-completed';
      regs.forward_to = result.url;
    } else {
      regs.status = 'registration-failed';
      regs.registrationError = result;
    }
  });

}

Registration.prototype.generateStripeToken = function(params) {
  this.status = 'busy';
  this.payment_token = '';
  Stripe.setPublishableKey(params.public_key);

  Stripe.card.createToken({
      number: params.number,
      cvc: params.cvc,
      exp_month: params.expire_month,
      exp_year: params.expire_year,
      name: params.name
  }, function(status,response) {
    if (status==200) {
      var regs = RegistrationProcessor.getInstance();
      regs.status = 'stipe-token-created';
      regs.payment_token = response.id;
    } else {
      regs.status = 'stipe-token-failed';
    }
  });
}

Registration.prototype.createAccount = function(params)
{
  this.status = 'busy';
  var regs = RegistrationProcessor.getInstance();
  var pieces = window.location.href.toString().split('/');

  var url = blinqRoot + '/account/register/' + pieces[pieces.length-1];


  if (params.password=='' && params.facebook_id!='') {
    params.password = params.facebook_id;
  }

  $.post( url, {
    facebook_id: params.facebook_id,
    email: params.email,
    password: params.password,
    password_confirmation: params.password,
    first_name: params.first_name,
    last_name: params.last_name,
    _token: params._token
  }, function(result) {
    if (result.success==true) {
      var regs = RegistrationProcessor.getInstance();
      regs.status = 'account-created';
      // storage
      Cookies.set('f8_account_session', result,{ secure: true });
      regs.session_token = result.session_token;
    } else {
      var regs = RegistrationProcessor.getInstance();
      regs.errorMessage = result.message;
      regs.status = 'account-creation-failed';
    }
  });
}


Registration.prototype.getInvite = function () {
  var invite = Cookies.getJSON('f8_invite');
  if (invite != undefined) {
    return invite;
  }
  return false;
}

Registration.prototype.hasValidInvite = function() {
  var invite = this.getInvite();
  if (invite!==false) {
    if (invite.success==true) {
      return true;
    }
  }
}

Registration.prototype.resetPasswordHandle = function(params, callBackFunction) {
  $.post( params.url, {
    _token: params._token,
    link: params.link,
    password: params.password,
    password_confirmation: params.password_confirmation,
  },callBackFunction);
}

Registration.prototype.resetPasswordLink = function(params, callBackFunction) {
  $.post( params.url, {
    _token: params._token,
    email: params.email
  },callBackFunction);
}

Registration.prototype.setInvite = function(inviteData) {
  try {
    Cookies.set('f8_invite', inviteData,{ secure: true });
  }  catch(e) {
    return true;
  }
}

Registration.prototype.getSessionInfo = function () {
  // new storage
  var sessionData = Cookies.getJSON('f8_session');
  if (sessionData!=undefined) {
    return sessionData;
  }
  return false;
}

Registration.prototype.changeHotelReservation = function(params,callBackFunction) {
  $.post( params.url, params.form_data, callBackFunction);
}

Registration.prototype.setSessionInfo = function(accountData) {
  Cookies.set('f8_session', accountData,{ secure: true });
}


function PasswordValidator() {}

PasswordValidator.prototype.validate = function(password)
{
  var isValidPassword = true;
  var validationMessages = [];
  if ( password.length < 8 ) {
    isValidPassword =false;
    validationMessages[validationMessages.length] = 'Password should be at least 8 characters';
  }
  if ( !password.match(/[a-z]/) ) {
    isValidPassword =false;
    validationMessages[validationMessages.length] = 'Password should contain at least one letter';
  }
  if ( !password.match(/[A-Z]/) ) {
    isValidPassword =false;
    validationMessages[validationMessages.length] = 'Password should contain at least one capital letter';
  }
  if ( !password.match(/\d/) ) {
    isValidPassword =false;
    validationMessages[validationMessages.length] = 'Password should contain at least one number';
  }
  return {
    is_valid : isValidPassword,
    messages: validationMessages
  }
}

$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

var RegistrationProcessor = (function () {
    var instance;

    function createInstance() {
        var registration = new Registration();
        registration.init();
        return registration;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
