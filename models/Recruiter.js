var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecruiterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    companyname: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Recruiter = mongoose.model('recruiter', RecuiterSchema);