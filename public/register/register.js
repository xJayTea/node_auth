var register = function () {
  $("#submit").click(function(){
    var name = $("#name").val()
    var email = $("#email").val()
    var password = $("#password").val()

    http.POST("http://localhost:8080/auth/register", {
      name: name,
      email: email,
      password: password
    })
    .done(function(data){
      userHelper.saveToken(data.token)
      window.location = "http://localhost:8080/profile"
    })
  });
}();