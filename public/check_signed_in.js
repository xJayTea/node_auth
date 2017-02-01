var check_signed_in = function () {
  if(userHelper.isLoggedIn()) window.location = "http://localhost:8080/profile"
}();