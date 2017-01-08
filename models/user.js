const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

const SALT_FACTOR = 10;

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const noop = function () {};

userSchema.pre('save', function(done) {
  const user = this;

  if (!user.isModified('password')) {
    done();
    return;
  }

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) { done(err); return; }
    bcrypt.hash(user.password, salt, noop, function(err, hashedPassword) {
      if (err) { done(err); return; }
      user.password = hashedPassword;
      done();
    });
  });
});

userSchema.methods.checkPassword = function(guess, done) {
  bcrypt.compare(guess, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};

userSchema.methods.name = function() {
  return this.username;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
