console.log('USERS CONTROLLER IS HERE');
// WE NEED TO ADD A FEW lines of code here!
var mongoose = require('mongoose');
var User = mongoose.model('User');
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function UsersController(){
  this.index = function(req,res){
    User.find({}, function(err, users){
      if(err) {
        console.log("something went wrong");
        res.json({placeholder: "error"});
      }
      else {
        console.log("back-end users controller response: ",users);
        res.json({users});
      }
    })
  };
  this.create = function(req,res){
    var user = new User({name: req.body.name});
    user.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
        res.json({error: 'there was a problem with creating user'})
      }
      else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a new friend in users.js!');
        res.json({placeholder: "success"});
      }
    })
  };
}
module.exports = new UsersController(); // what does this export?
