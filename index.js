const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname));

app.get("*", function(request, response){

  response.redirect("https://" + request.headers.host + request.url);

});

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.PORT || 443);

console.log('Running at Port 80');