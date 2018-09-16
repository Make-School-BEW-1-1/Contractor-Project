const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Donation', {
    charity: String,
    amount: Schema.Types.Decimal128,
    date: String
});
