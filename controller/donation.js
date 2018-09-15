const Donation = require('../model/donation.js');

module.exports = function(app) {
    app.get('/', (req, res) => {
        Donation.find().then(donations => {
            res.render('donation-index', { donations: donations });
        }).catch(err => {
            console.log(err);
        });
    })

    app.get('/donation/new', (req, res) => {
        res.render('donation-new');
    })
};
