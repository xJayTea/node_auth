var show_profile = function() {
  var user = userHelper.currentUser();
  if(user){
    $("#fullName").html(user.name)
    $("#email").html(user.email)
  }
  else window.location = "http://localhost:8080"
}();

var setupSignOutHook = function() {
  $("#signOut").click(function(e){
    localStorage.removeItem("jwt-token")
    window.location = "http://localhost:8080"
  })
}();