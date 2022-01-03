var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema ({
    name: String,
    username: { type: String, unique: true},
    email: { type: String, unique: true },
    address : {
        city: String,
        state: String,
        country: { type: String, unique: true},
        pin: Number
    }
}, { timestamps: true });

userSchema.index({ 'address.state': 1, 'address.country': 1 });

module.exports = mongoose.model('User', userSchema);