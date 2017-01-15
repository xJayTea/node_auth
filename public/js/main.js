var http = {
  GET: function(url, data) {
    return $.ajax({
      url: url,
      method: "GET",
      data: data
    })
  },
  POST: function(url, data) {
    return $.ajax({
      url: url,
      method: "POST",
      data: data
    })
  }
}

var main = function () {
  $("#submit").click(function(){
    var name = $("#name").val()
    var email = $("#email").val()
    var password = $("#password").val()

    http.GET("http://localhost:8080/auth/register", {
      name: name,
      email: email,
      password: password
    })
  });
}();