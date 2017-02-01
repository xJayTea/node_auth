
var userHelper = {
  saveToken: function(token) {
    localStorage.setItem("jwt-token", token)
  },

  getToken: function() {
    return localStorage.getItem("jwt-token")
  },

  isLoggedIn: function() {
    var token = userHelper.getToken();
    var payload;

    if(token){
      payload = token.split('.')[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);

      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  },

  currentUser: function() {
    if(userHelper.isLoggedIn()){
      var token = userHelper.getToken();
      var payload = token.split('.')[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);
      return {
        email : payload.email,
        name : payload.name
      };
    }
  }
}