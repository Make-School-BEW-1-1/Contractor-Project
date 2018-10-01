const Donation = require('../model/donation.js');

module.exports = function(app) {
    app.get('/', (req, res) => {
        if (false) {
            Donation.find({ userID: 'a'}).then(donations => {//I DONT KNOW YET
                res.render('donation-index', {
                    donations: donations
                });
            }).catch(err => {
                console.log(err);
            });
        } else {
            res.redirect('/login');
        }
    })

    app.get('/donation/new', (req, res) => {
        res.render('donation-new');
    })

    app.post('/donation', (req, res) => {
        Donation.create(req.body).then(donation => {
            res.redirect('/');
        }).catch(err => {
            console.log(err);
        });
    })
};
