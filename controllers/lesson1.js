const helloRoute = (req, res) => {
    res.send('Hello, World!');
};

const helloRheaRoute = (req, res) => {
    res.send('Hello, I Am Rhea!');
};

module.exports = {
    helloRoute,
    helloRheaRoute
};