var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("md/va PR xanadu vods hub")
})

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
