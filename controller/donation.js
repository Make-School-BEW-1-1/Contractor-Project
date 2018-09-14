module.exports = function(app) {
    app.get('/', (req, res) => {
        console.log("Hello world");
    })
};
