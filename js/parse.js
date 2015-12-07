Parse.initialize("MKi5zI6sBQHdgFghS1JhkojJUcIoz0KBY5s7G9sB", "Uhk4zHKdGQ9OEwDzKPVhtigGsbCAIssiR6MbXxog");

//var TestObject = Parse.Object.extend("TestObject");

var query = new Parse.Query("TestObject");
query.find({
	success:function(result){
		console.log(result);
	},
  error: function(error) {
    // error is an instance of Parse.Error.
  }
});

var signUp = document.getElementById('btn_signup');
var btn_fblogin = document.getElementById('btn_fblogin');
var account = document.getElementById('input_account');
var password = document.getElementById('input_passwd');

signUp.addEventListener('click', function(){
	var user = new Parse.User();
	user.set("username", account.value);
	user.set("password", password.value);
	// other fields can be set just like with Parse.Object
	

	user.signUp(null, {
	  success: function(user) {
	    // Hooray! Let them use the app now.
	    alert('ok');
	    console.log(user);
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
});

btn_fblogin.addEventListener('click', function(){
	Parse.FacebookUtils.logIn(null, {
  success: function(user) {
    if (!user.existed()) {
      alert("User signed up and logged in through Facebook!");
    } else {
      alert("User logged in through Facebook!");
    }
  },
  error: function(user, error) {
    alert("User cancelled the Facebook login or did not fully authorize.");
  }
});
});
