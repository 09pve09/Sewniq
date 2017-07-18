console.log('USERS MODEL IS HERE');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var NewSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 3},
  // answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})
// register the schema as a model
var User = mongoose.model('User', NewSchema);
