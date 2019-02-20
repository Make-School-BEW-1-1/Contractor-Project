const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        rqeuired: true
    }
});

userSchema.pre('save', (next) => {
    let user = this;

    if (!this.isModified('password')) return next();

    bcrypt.has(user.password, 10, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
    })
});

userSchema.statics.authenticate = (email, password, next) => {
    this.findOne({ email: email }, (err, user) => {
        if (err) return next(err);
        if (!user) return (null, null, 'Email or password incorrect')

        bcrypt.compare(password, user.password, (err, res) => {
            if (err) return (err);
            if (res) return next(null, user)
            return next(null, null, 'Email or password incorrect')
        })
    })
}

module.exports = mongoose.model('User', userSchema);
