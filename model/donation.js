const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Donation', {
    charity: {
        charityName: String,
        currentRating: {
            rating: Number
        },
        tagline: String,
        websiteURL: String
    },
    amount: Schema.Types.Decimal128,
    date: String
});
