// var User        = require('../models/user');
var express = require('express');
var app = express.Router();
/*
User.remove({'userInfo.email':{$exists:true}},function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("ho gaya");
	}
});
*/

app.get('/posts', function(req,res){
  // create a temporary posts array to be served to the frontend
  const postsArr = [];
  for(var i =0; i < 5; i++){
    var x = {
      'title' : "Post number " + i,
      'imageURL' : 'assets/images/logo.jpg'
    };
    postsArr.push(x);
  }
  res.send(JSON.stringify({"data": postsArr}));
});

module.exports = app;


/*
app.get('/uninstall/',function(req,res){

	var token = req.query.token;
	var childName;
	var tokens;
	User.findOne({'userInfo.explicitTokens':token},function(err,doc){
		if(err){
			console.log(err);
		}
		else if(!doc){
			console.log(" User not found for '/notification' get request ");
		}
		else{
			var tokens=doc.userInfo.explicitTokens;
			var tokenArr=doc.userInfo.tokens;
			for(var i=0;i<tokenArr.length;i++){
				console.log("childname:"+tokenArr[i].childName);
				for(var j=0;j<tokenArr[i].tokens.length;j++){
					console.log("token:"+tokenArr[i].tokens[j]);
					if(tokenArr[i].tokens[j]==token){
						// found the token and the childname;
						childName=tokenArr[i].childName;
						tokenArr[i].tokens.splice(j,1);
					}
				}
			}
			for(var i=0;i<tokens.length;i++){
				if(tokens[i]==token){
					tokens.splice(i,1);
				}
			}
			User.update({'userInfo.email':doc.userInfo.email},{$set:{'userInfo.explicitTokens':tokens,'userInfo.tokens':tokenArr}},function(err,user){
				if(err){
					console.log(err);
				}
				else{
					console.log("updated user");
					console.log(JSON.stringify(user));
					var rajatObj={"address":doc.userInfo.conversationID,"notification":"Your child "+childName +" uninstalled the extension."};
					io.emit("servermsg",JSON.stringify(rajatObj));
				}
			});

		}
	});
	res.render('feedback2.ejs',{message:""});
});

app.post('/notification',function(req,res){
	var email 		=req.body.email;
	var password 	=req.body.password;
	var childName 	=req.body.childName;
	var notification=req.body.notification;
	User.findOne({'userInfo.email':email},function(err,doc){
		if(err){
			console.log(err);
		}
		else if(!doc){
			console.log(" User not found for '/notification' get request ");
		}
		else{
			if(doc.validPassword(password)){
				var rajatObj={"address":doc.userInfo.conversationID,"notification":notification};
				io.emit("servermsg",JSON.stringify(rajatObj));
				res.send("");
			}
			else{
				console.log("Password for '/notification' was incorrect");
			}
		}
	});
});

app.post('/appDisabled',function(req,res){

	var token = req.token.token;
	var childName;
	var tokens;
	User.findOne({'userInfo.explicitTokens':token},function(err,doc){
		if(err){
			console.log(err);
		}
		else if(!doc){
			console.log(" User not found for '/notification' get request ");
		}
		else{
			var tokens=doc.userInfo.explicitTokens;
			var tokenArr=doc.userInfo.tokens;
			for(var i=0;i<tokenArr.length;i++){
				console.log("childname:"+tokenArr[i].childName);
				for(var j=0;j<tokenArr[i].tokens.length;j++){
					console.log("token:"+tokenArr[i].tokens[j]);
					if(tokenArr[i].tokens[j]==token){
						// found the token and the childname;
						childName=tokenArr[i].childName;
						tokenArr[i].tokens.splice(j,1);
					}
				}
			}
			for(var i=0;i<tokens.length;i++){
				if(tokens[i]==token){
					tokens.splice(i,1);
				}
			}
			User.update({'userInfo.email':doc.userInfo.email},{$set:{'userInfo.explicitTokens':tokens,'userInfo.tokens':tokenArr}},function(err,user){
				if(err){
					console.log(err);
				}
				else{
					console.log("updated user");
					console.log(JSON.stringify(user));
					var rajatObj={"address":doc.userInfo.conversationID,"notification":"Your child "+childName+" has disabled the extension Content Holmes. Please take appropriate measures to continue"};
					io.emit("servermsg",JSON.stringify(rajatObj));
					res.send("");
				}
			});

		}
	});
});
*/
