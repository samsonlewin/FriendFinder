
var friends = require('../data/friends.js');
var path = require('path');

var difference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

console.log(friends);

app.post('/api/friends', function(req, res){
	var greatMatch = {
		name: "",
		photo: "",
		matchDifference: 1000
	};


var userData = req.body;
var userName = userData.name;
var userImage = userData.image;
var userScores = userData.scores;

for(var i = 0; i < [friends].length-1; i++){
console.log(friends[i].name);
totalDifference = 0;

for(var j = 0; j < 10; j++){
totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

if (totalDifference <= greatMatch.friendDifference){

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
