var friends = require("../data/friends.js");


module.exports = function(app) {
app.get("/api/villains", function(req, res) {
    res.json(friends);
    
  });
 
app.post("/api/villains", function(req, res) {

  var newfriend = req.body;

for(let i=0; i<newfriend.scores.length; i++){
    newfriend.scores[i]=parseInt(newfriend.scores[i]);
}  
  var friendStandard=35;
  var matchIndex=0;

  for(let i=0; i<friends.length; i++){
    var totalDifference = 0;
  
    for(let j=0; j<friends[i].scores.length; j++){
      var valueDifference=Math.abs(newfriend.scores[j]-friends[i].scores[j])
      totalDifference+=valueDifference
      console.log(totalDifference)
    } 
  if(totalDifference<friendStandard){
    friendStandard=totalDifference;
    matchIndex=i;
  }


}
friends.push(newfriend);
  res.json(friends[matchIndex]);


    
});
}









