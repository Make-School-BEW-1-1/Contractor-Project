const http = require('https');
const appID = '89b66fef';
const apiKey = process.env.API_KEY;

module.exports = function(app) {
    app.get('/charity', (req, res) => {
        let term = encodeURIComponent('wildlife');
        let url = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=' + appID + '&app_key=' + apiKey + "&search=" + term;
        console.log(url);

        http.get(url, (response) => {
            response.setEncoding('utf8');
            var body = '';

            response.on('data', (d) => {
                body += d;
            });

            response.on('end', () => {
                var parsed = JSON.parse(body);
            });
        });
    });
}
