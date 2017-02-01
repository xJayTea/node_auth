
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
      data: JSON.stringify(data),
      contentType: "application/json"
    })
  }
}