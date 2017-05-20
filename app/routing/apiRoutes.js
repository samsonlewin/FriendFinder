
var friends = require('../data/friends.js');
// var path = require('path');

// var difference = 0;

// I'm sure it seems silly to care about, but indentation really is your friend when it comes to maintaining code.
module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

console.log(friends);

app.post('/api/friends', function(req, res){
	var greatMatch = {
		name: "Someone",
		photo: "https://scontent.fsnc1-2.fna.fbcdn.net/v/t31.0-8/14196007_10153680867496020_2239852579028198013_o.jpg?oh=f9cb4dd24b31fe7f8ededf9c2f1cd638&oe=598A87F5",
		matchDifference: 1000
	};

var userData = req.body;
var userName = userData.name;
var userImage = userData.photo;
var userScores = userData.scores;

console.log(userName +"/ "+ userImage +"/ "+ userScores);

// since friends is an array you can just use the native `.forEach` method here
// this creates a functional closure/scope that won't leak variables.
for(var i = 0; i < friends.length; i++){
console.log(friends[i].name);
// make sure to declare variables with `var` so you don't leak them onto the global scope
totalDifference = 0;

for(var j = 0; j < 10; j++){
totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

if (totalDifference <= greatMatch.matchDifference){

					// Reset the bestMatch to be the new friend. 
					greatMatch.name = friends[i].name;
					greatMatch.photo = friends[i].photo;
					greatMatch.matchDifference = totalDifference;
				};
			};
		};

friends.push(userData);
 res.json(greatMatch);

});

};
