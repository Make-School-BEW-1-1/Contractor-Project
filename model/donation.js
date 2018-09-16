const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Donation', {
    charity: String,
    amount: String,
    date: Date
});
